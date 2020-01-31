import { InitialPipe } from './initial.pipe';

xdescribe('InitialPipe', () => {
  it('create an instance', () => {
    const pipe = new InitialPipe();
    expect(pipe).toBeTruthy();
  });
});
