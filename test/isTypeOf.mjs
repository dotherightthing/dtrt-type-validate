import { isTypeOf } from '../dist/dtrt-type-validate.mjs';

QUnit.module('isTypeOf');

// this type

// all types

QUnit.test('function', (assert) => {
  const func = function () {};

  assert.equal(
    isTypeOf('function', func),
    true,
  );
});
