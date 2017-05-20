import { AngularArchitecturePage } from './app.po';

describe('angular-architecture App', () => {
  let page: AngularArchitecturePage;

  beforeEach(() => {
    page = new AngularArchitecturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
