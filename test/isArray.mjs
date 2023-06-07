import dtrtValidate from '../src/dtrt-type-validate.mjs';

QUnit.module('isArray');

// array type

QUnit.test('empty array', (assert) => {
  assert.equal(
    dtrtValidate.isArray([]),
    true,
  );
});

QUnit.test('string array', (assert) => {
  assert.equal(
    dtrtValidate.isArray('[]'),
    false,
  );
});

// all types

QUnit.test('array', (assert) => {
  assert.equal(
    dtrtValidate.isArray([ 'foo' ]),
    true,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    dtrtValidate.isArray(true),
    false,
  );

  assert.equal(
    dtrtValidate.isArray(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    dtrtValidate.isArray(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    dtrtValidate.isArray(-1),
    false,
  );

  assert.equal(
    dtrtValidate.isArray(0),
    false,
  );

  assert.equal(
    dtrtValidate.isArray(1),
    false,
  );

  assert.equal(
    dtrtValidate.isArray(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    dtrtValidate.isArray({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    dtrtValidate.isArray(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    dtrtValidate.isArray('foo'),
    false,
  );
});
