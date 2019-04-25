import { DetailsModule } from './details.module';

describe('DetailsModule', () => {
  let homeModule: DetailsModule;

  beforeEach(() => {
    homeModule = new DetailsModule();
  });

  it('should create an instance', () => {
    expect(homeModule).toBeTruthy();
  });
});
