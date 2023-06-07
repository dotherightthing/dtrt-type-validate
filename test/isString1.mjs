import dtrtValidate from '../src/dtrt-type-validate.mjs';

QUnit.module('isString1');

// this type

// all types

QUnit.test('array', (assert) => {
  assert.equal(
    dtrtValidate.isString1([]),
    false,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    dtrtValidate.isString1(true),
    false,
  );

  assert.equal(
    dtrtValidate.isString1(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    dtrtValidate.isString1(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    dtrtValidate.isString1(-1),
    false,
  );

  assert.equal(
    dtrtValidate.isString1(0),
    false,
  );

  assert.equal(
    dtrtValidate.isString1(1),
    false,
  );

  assert.equal(
    dtrtValidate.isString1(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    dtrtValidate.isString1({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    dtrtValidate.isString1(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    dtrtValidate.isString1('foo'),
    true,
  );
});

QUnit.test('stringNumber', (assert) => {
  assert.equal(
    dtrtValidate.isString1('-1'),
    true,
  );

  assert.equal(
    dtrtValidate.isString1('0'),
    true,
  );

  assert.equal(
    dtrtValidate.isString1('1'),
    true,
  );

  assert.equal(
    dtrtValidate.isString1('2'),
    true,
  );
});
