import canIterate from '../app';

test.each([[new Map()], [new Set()], ['Netology']])(
  'testing canIterate(object) with param %s - supposed to return true',
  (element) => {
    expect(canIterate(element)).toBeTruthy();
  },
);

test.each([[null], [10]])(
  'testing canIterate(object) with param %s - supposed to return false',
  (element) => {
    expect(canIterate(element)).toBeFalsy();
  },
);
