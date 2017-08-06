import { PropertyListingsNewPage } from './app.po';

describe('property-listings-new App', () => {
  let page: PropertyListingsNewPage;

  beforeEach(() => {
    page = new PropertyListingsNewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
