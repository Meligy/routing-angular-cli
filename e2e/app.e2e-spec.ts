import { RoutingAngularCliPage } from './app.po';

describe('routing-angular-cli App', function() {
  let page: RoutingAngularCliPage;

  beforeEach(() => {
    page = new RoutingAngularCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
