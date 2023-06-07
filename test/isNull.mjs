import dtrtValidate from '../src/dtrt-type-validate.mjs';

QUnit.module('isNull');

// this type

// all types

QUnit.test('array', (assert) => {
  assert.equal(
    dtrtValidate.isNull([]),
    false,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    dtrtValidate.isNull(true),
    false,
  );

  assert.equal(
    dtrtValidate.isNull(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    dtrtValidate.isNull(null),
    true,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    dtrtValidate.isNull(-1),
    false,
  );

  assert.equal(
    dtrtValidate.isNull(0),
    false,
  );

  assert.equal(
    dtrtValidate.isNull(1),
    false,
  );

  assert.equal(
    dtrtValidate.isNull(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    dtrtValidate.isNull({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    dtrtValidate.isNull(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    dtrtValidate.isNull('foo'),
    false,
  );
});
