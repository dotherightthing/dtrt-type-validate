import { isObject } from '../dist/dtrt-type-validate.mjs';

QUnit.module('isObject');

// this type

QUnit.test('empty object', (assert) => {
  assert.equal(
    isObject({}),
    true,
  );
});

QUnit.test('string object', (assert) => {
  assert.equal(
    isObject('{}'),
    false,
  );
});

// all types

QUnit.test('array', (assert) => {
  assert.equal(
    isObject([]),
    false,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    isObject(true),
    false,
  );

  assert.equal(
    isObject(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    isObject(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    isObject(-1),
    false,
  );

  assert.equal(
    isObject(0),
    false,
  );

  assert.equal(
    isObject(1),
    false,
  );

  assert.equal(
    isObject(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    isObject({}),
    true,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    isObject(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    isObject('foo'),
    false,
  );
});
