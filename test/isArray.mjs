import { isArray } from '../dtrt-type-validate.mjs';

QUnit.module('isArray');

// array type

QUnit.test('empty array', (assert) => {
  assert.equal(
    isArray([]),
    true,
  );
});

QUnit.test('string array', (assert) => {
  assert.equal(
    isArray('[]'),
    false,
  );
});

// all types

QUnit.test('array', (assert) => {
  assert.equal(
    isArray([ 'foo' ]),
    true,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    isArray(true),
    false,
  );

  assert.equal(
    isArray(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    isArray(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    isArray(-1),
    false,
  );

  assert.equal(
    isArray(0),
    false,
  );

  assert.equal(
    isArray(1),
    false,
  );

  assert.equal(
    isArray(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    isArray({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    isArray(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    isArray('foo'),
    false,
  );
});
