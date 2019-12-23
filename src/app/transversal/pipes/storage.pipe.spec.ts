import { StoragePipe } from './storage.pipe';

describe('StoragePipe', () => {
  it('create an instance', () => {
    const pipe = new StoragePipe(null);
    expect(pipe).toBeTruthy();
  });
});
