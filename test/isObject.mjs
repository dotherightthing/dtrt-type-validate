import dtrtValidate from '../src/dtrt-type-validate.mjs';

QUnit.module('isObject');

QUnit.test('array', (assert) => {
  assert.equal(
    dtrtValidate.isObject([]),
    false,
  );

  assert.equal(
    dtrtValidate.isObject('[]'),
    false,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    dtrtValidate.isObject('true'),
    false,
  );

  assert.equal(
    dtrtValidate.isObject('false'),
    false,
  );

  assert.equal(
    dtrtValidate.isObject(true),
    false,
  );

  assert.equal(
    dtrtValidate.isObject(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    dtrtValidate.isObject(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    dtrtValidate.isObject(-1),
    false,
  );

  assert.equal(
    dtrtValidate.isObject(0),
    false,
  );

  assert.equal(
    dtrtValidate.isObject(1),
    false,
  );

  assert.equal(
    dtrtValidate.isObject(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    dtrtValidate.isObject({}),
    true,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    dtrtValidate.isObject(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    dtrtValidate.isObject('foo'),
    false,
  );
});

QUnit.test('stringNumber', (assert) => {
  assert.equal(
    dtrtValidate.isObject('-1'),
    false,
  );

  assert.equal(
    dtrtValidate.isObject('0'),
    false,
  );

  assert.equal(
    dtrtValidate.isObject('1'),
    false,
  );

  assert.equal(
    dtrtValidate.isObject('2'),
    false,
  );
});
