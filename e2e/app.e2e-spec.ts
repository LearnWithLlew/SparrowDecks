import { SparrowSpikePage } from './app.po';

describe('sparrow-spike App', function() {
  let page: SparrowSpikePage;

  beforeEach(() => {
    page = new SparrowSpikePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
