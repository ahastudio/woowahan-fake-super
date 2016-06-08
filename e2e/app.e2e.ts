import { FakeSuperPage } from './app.po';

describe('fake-super App', function() {
  let page: FakeSuperPage;

  beforeEach(() => {
    page = new FakeSuperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fake-super works!');
  });
});
