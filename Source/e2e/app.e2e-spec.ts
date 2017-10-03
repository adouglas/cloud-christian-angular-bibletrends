import { CloudChristianAngularBiblelabsPage } from './app.po';

describe('cloud-christian-angular-biblelabs App', () => {
  let page: CloudChristianAngularBiblelabsPage;

  beforeEach(() => {
    page = new CloudChristianAngularBiblelabsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
