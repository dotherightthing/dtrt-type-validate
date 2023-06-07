import dtrtValidate from '../src/dtrt-type-validate.mjs';

QUnit.module('isNumber');

// this type

// all types

QUnit.test('array', (assert) => {
  assert.equal(
    dtrtValidate.isNumber([]),
    false,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    dtrtValidate.isNumber(true),
    false,
  );

  assert.equal(
    dtrtValidate.isNumber(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    dtrtValidate.isNumber(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    dtrtValidate.isNumber(-1),
    true,
  );

  assert.equal(
    dtrtValidate.isNumber(0),
    true,
  );

  assert.equal(
    dtrtValidate.isNumber(1),
    true,
  );

  assert.equal(
    dtrtValidate.isNumber(2),
    true,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    dtrtValidate.isNumber({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    dtrtValidate.isNumber(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    dtrtValidate.isNumber('foo'),
    false,
  );
});

QUnit.test('stringNumber', (assert) => {
  assert.equal(
    dtrtValidate.isNumber('-1'),
    false,
  );

  assert.equal(
    dtrtValidate.isNumber('0'),
    false,
  );

  assert.equal(
    dtrtValidate.isNumber('1'),
    false,
  );

  assert.equal(
    dtrtValidate.isNumber('2'),
    false,
  );
});
