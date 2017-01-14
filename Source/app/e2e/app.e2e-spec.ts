import { TrudisplayPage } from './app.po';

describe('trudisplay App', function() {
  let page: TrudisplayPage;

  beforeEach(() => {
    page = new TrudisplayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
