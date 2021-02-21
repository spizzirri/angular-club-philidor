import { BorrarespaciosPipe } from './borrarespacios.pipe';

describe('BorrarespaciosPipe', () => {
  it('create an instance', () => {
    const pipe = new BorrarespaciosPipe();
    expect(pipe.transform("Hola soy damian")).toBe("Holasoydamian");
  });
});
