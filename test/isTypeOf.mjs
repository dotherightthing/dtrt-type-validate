import dtrtValidate from '../src/dtrt-type-validate.mjs';

QUnit.module('isTypeOf');

// this type

// all types

QUnit.test('function', (assert) => {
  const func = function () {};

  assert.equal(
    dtrtValidate.isTypeOf('function', func),
    true,
  );
});
