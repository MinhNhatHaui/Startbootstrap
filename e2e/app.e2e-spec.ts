import { AppPage } from './app.po';

<<<<<<< HEAD
describe('groo App', () => {
=======
describe('start-bootstrap App', () => {
>>>>>>> chore: initial commit from @angular/cli
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
