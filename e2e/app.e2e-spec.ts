import { AzurefunPage } from './app.po';

describe('azurefun App', () => {
  let page: AzurefunPage;

  beforeEach(() => {
    page = new AzurefunPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
