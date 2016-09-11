import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

const dataPropForUrlProp = {
  problemTemplateUrl  : 'problemTemplate',
  solutionTemplateUrl : 'solutionTemplate',
  stylesheetUrl       : 'stylesheet'
};

@Injectable()
export class DeckLoader {

  constructor (private http: Http) { }

  loadJsonUrl(url) {
    return this.http.get(url).map(res => res.json()).toPromise();
  }

  loadTextUrl(url) {
    return this.http.get(url).map(res => res.text()).toPromise();
  }

  loadDecks(url) {
    let allDecks;

    return this.loadJsonUrl(url)
      .then(decks => {

        allDecks = decks;

        let promises = [];

        allDecks.forEach(deck => {
          Object.keys(dataPropForUrlProp).forEach(urlProp => {
            const dataProp = dataPropForUrlProp[urlProp];

            promises.push(
              this.loadTextUrl(deck[urlProp])
                .then(data => { deck[dataProp] = data })
            );
          });
        });

        return Promise.all(promises);
      })
      .then(() => { return allDecks })
    ;
  }

}
