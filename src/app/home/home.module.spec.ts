import { HomeModule } from './home.module';

describe('DetailsModule', () => {
  let homeModule: HomeModule;

  beforeEach(() => {
    homeModule = new HomeModule();
  });

  it('should create an instance', () => {
    expect(homeModule).toBeTruthy();
  });
});
