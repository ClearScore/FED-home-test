import animate, { bounceEaseOut, bounce } from './animate';

const oldrequestAnimationFrame = global.requestAnimationFrame;
global.performance = {
  now: jest.fn(),
};
jest.useFakeTimers();

describe('Animate test', () => {
  beforeEach(() => {
    delete global.requestAnimationFrame;
  });

  afterEach(() => {
    global.requestAnimationFrame = oldrequestAnimationFrame;
  });

  describe('animate', () => {
    it('calls requestAnimationFrame', () => {
      global.requestAnimationFrame = jest.fn();
      animate({ timing: jest.fn(), draw: jest.fn(), duration: 0 });
      expect(global.requestAnimationFrame.mock.calls).toHaveLength(1);
    });
  });

  describe('bounceEaseOut returns the correct fractions', () => {
    it('bounceEaseOut 0', () => { expect(bounceEaseOut(0.01)).toEqual(0.0007562500000000139); });
    it('bounceEaseOut 0.2', () => { expect(bounceEaseOut(0.2)).toEqual(0.30249999999999977); });
    it('bounceEaseOut 0.5', () => { expect(bounceEaseOut(0.5)).toEqual(0.765625); });
    it('bounceEaseOut 0.8', () => { expect(bounceEaseOut(0.8)).toEqual(0.94); });
    it('bounceEaseOut 1', () => { expect(bounceEaseOut(1)).toEqual(1); });
  });

  describe('bounce returns the correct fractions', () => {
    it('bounce 0', () => { expect(bounce(0.01)).toEqual(0.006118749999999999); });
    it('bounce 0.2', () => { expect(bounce(0.2)).toEqual(0.06); });
    it('bounce 0.5', () => { expect(bounce(0.5)).toEqual(0.234375); });
    it('bounce 0.8', () => { expect(bounce(0.8)).toEqual(0.6975000000000002); });
    it('bounce 1', () => { expect(bounce(1)).toEqual(1); });
  });
});
