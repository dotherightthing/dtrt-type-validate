import dtrtValidate from '../src/dtrt-type-validate.mjs';

QUnit.module('isString');

QUnit.test('array', (assert) => {
  assert.equal(
    dtrtValidate.isString([]),
    false,
  );

  assert.equal(
    dtrtValidate.isString('[]'),
    true,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    dtrtValidate.isString('true'),
    true,
  );

  assert.equal(
    dtrtValidate.isString('false'),
    true,
  );

  assert.equal(
    dtrtValidate.isString(true),
    false,
  );

  assert.equal(
    dtrtValidate.isString(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    dtrtValidate.isString(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    dtrtValidate.isString(-1),
    false,
  );

  assert.equal(
    dtrtValidate.isString(0),
    false,
  );

  assert.equal(
    dtrtValidate.isString(1),
    false,
  );

  assert.equal(
    dtrtValidate.isString(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    dtrtValidate.isString({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    dtrtValidate.isString(''),
    true,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    dtrtValidate.isString('foo'),
    true,
  );
});

QUnit.test('stringNumber', (assert) => {
  assert.equal(
    dtrtValidate.isString('-1'),
    true,
  );

  assert.equal(
    dtrtValidate.isString('0'),
    true,
  );

  assert.equal(
    dtrtValidate.isString('1'),
    true,
  );

  assert.equal(
    dtrtValidate.isString('2'),
    true,
  );
});
