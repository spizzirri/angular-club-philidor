import { BorrarespaciosPipe } from './borrarespacios.pipe';

fdescribe('BorrarespaciosPipe', () => {
  it('create an instance', () => {
    const pipe = new BorrarespaciosPipe();
    expect(pipe.transform("Hola soy damian")).toBe("Holasoydamian");
  });
});
