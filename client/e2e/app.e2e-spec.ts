import { AzurefunPage } from './app.po';

describe('azurefun App', () => {
  let page: AzurefunPage;

  beforeEach(() => {
    page = new AzurefunPage();
  });

  it('should display welcome message', () => {
    console.log(process.env);
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
