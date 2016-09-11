import { Injectable, SecurityContext } from '@angular/core';

import {
  DomSanitizationService, // XXX: Becomes DomSanitizer in RC6.
  SafeHtml
} from '@angular/platform-browser';


import * as CssParser from 'css';

@Injectable()
export class CssChecker {

  constructor(private sanitizer: DomSanitizationService) { }

  stylesheetProblems(stylesheetText: string) {

    let problems = [];

    // Parse the stylesheet into its component rules,
    // and only allow through the ones that we and Angular
    // can live with.
    //
    let ast = CssParser.parse(stylesheetText);

    // Abort immediately if there are any parsing errors.
    //
    if (ast.stylesheet.parsingErrors.length > 0) {
      problems.push({ parseErrors: ast.stylesheet.parsingErrors });
      return problems;
    }

    // Check each rule, making sure it's safe to use. Specifically:
    // - Angular has to consider the rule value safe
    // - XXX: Unimplemented: Only class selectors are allowed
    //   (that is, every selector has to start with dot)
    //
    ast.stylesheet.rules.forEach((rule: any) => {

      // Only check rules. Skip everything else (like comments).
      //
      if (rule.type !== 'rule') {
        return;
      }

      // Make sure Angular is okay with each declaration's value.
      //
      rule.declarations.forEach((declaration) => {

        // Only check rule declarations. Skip everything else (like comments).
        //
        if (declaration.type !== 'declaration') {
          return;
        }

        let sanitizedValue = this.sanitizer.sanitize(
          SecurityContext.STYLE,
          declaration.value
        );

        if (sanitizedValue !== declaration.value) {
          console.log('*** Detected unsafe style value:', declaration.value);
          problems.push({ unsafeDeclaration: declaration });
        }

      });
    });

    return problems;
  }

}
