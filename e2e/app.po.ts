export class FakeSuperPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fake-super-app h1')).getText();
  }
}
