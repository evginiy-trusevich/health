import { HealthPage } from './app.po';

describe('health App', () => {
  let page: HealthPage;

  beforeEach(() => {
    page = new HealthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
