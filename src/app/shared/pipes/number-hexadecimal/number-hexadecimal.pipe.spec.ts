import { NumberHexadecimalPipe } from './number-hexadecimal.pipe';

describe('NumberHexadecimalPipe', () => {
  it('create an instance', () => {
    const pipe = new NumberHexadecimalPipe();
    expect(pipe).toBeTruthy();
  });
});
