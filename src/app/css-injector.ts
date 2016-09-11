
// Adapted from <http://stackoverflow.com/a/26230472>

export class CssInjector {

  private wrap;
  private temp;

  constructor(private doc) {

    // wrapper for all injected styles and temp el to create them
    this.wrap = this.doc.createElement('div');
    this.temp = this.doc.createElement('div');
  }

  injectCss(cssRules) {

    // append wrapper to the body on the first call
    if (!this.wrap.id) {
      this.wrap.id = 'injected-css';
      this.wrap.style.display = 'none';
      this.doc.body.appendChild(this.wrap);
    }

    // <br> for IE: http://goo.gl/vLY4x7
    this.temp.innerHTML = '<br><style>'+ cssRules +'</style>';
    this.wrap.appendChild( this.temp.children[1] );
  }

}

