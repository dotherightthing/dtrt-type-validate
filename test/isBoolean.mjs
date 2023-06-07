import dtrtValidate from '../src/dtrt-type-validate.mjs';

QUnit.module('isBoolean');

// this type

QUnit.test('string boolean', (assert) => {
  assert.equal(
    dtrtValidate.isBoolean('true'),
    false,
  );

  assert.equal(
    dtrtValidate.isBoolean('false'),
    false,
  );
});

// all types

QUnit.test('array', (assert) => {
  assert.equal(
    dtrtValidate.isBoolean([]),
    false,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    dtrtValidate.isBoolean(true),
    true,
  );

  assert.equal(
    dtrtValidate.isBoolean(false),
    true,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    dtrtValidate.isBoolean(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    dtrtValidate.isBoolean(-1),
    false,
  );

  assert.equal(
    dtrtValidate.isBoolean(0),
    false,
  );

  assert.equal(
    dtrtValidate.isBoolean(1),
    false,
  );

  assert.equal(
    dtrtValidate.isBoolean(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    dtrtValidate.isBoolean({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    dtrtValidate.isBoolean(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    dtrtValidate.isBoolean('foo'),
    false,
  );
});
