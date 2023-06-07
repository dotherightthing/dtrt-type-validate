import dtrtValidate from '../src/dtrt-type-validate.mjs';

QUnit.module('isStringNumber');

// this type

// all types

QUnit.test('array', (assert) => {
  assert.equal(
    dtrtValidate.isStringNumber([]),
    false,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    dtrtValidate.isStringNumber(true),
    false,
  );

  assert.equal(
    dtrtValidate.isStringNumber(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    dtrtValidate.isStringNumber(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    dtrtValidate.isStringNumber(-1),
    false,
  );

  assert.equal(
    dtrtValidate.isStringNumber(0),
    false,
  );

  assert.equal(
    dtrtValidate.isStringNumber(1),
    false,
  );

  assert.equal(
    dtrtValidate.isStringNumber(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    dtrtValidate.isStringNumber({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    dtrtValidate.isStringNumber(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    dtrtValidate.isStringNumber('foo'),
    false,
  );
});

QUnit.test('stringNumber', (assert) => {
  assert.equal(
    dtrtValidate.isStringNumber('-1'),
    true,
  );

  assert.equal(
    dtrtValidate.isStringNumber('0'),
    true,
  );

  assert.equal(
    dtrtValidate.isStringNumber('1'),
    true,
  );

  assert.equal(
    dtrtValidate.isStringNumber('2'),
    true,
  );
});
