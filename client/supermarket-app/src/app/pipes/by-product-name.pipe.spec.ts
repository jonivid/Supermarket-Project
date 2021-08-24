import { ByProductNamePipe } from './by-product-name.pipe';

describe('ByProductNamePipe', () => {
  it('create an instance', () => {
    const pipe = new ByProductNamePipe();
    expect(pipe).toBeTruthy();
  });
});
