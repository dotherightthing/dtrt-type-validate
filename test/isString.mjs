import { isString } from '../dist/dtrt-type-validate.mjs';

QUnit.module('isString');

// this type

// all types

QUnit.test('array', (assert) => {
  assert.equal(
    isString([]),
    false,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    isString(true),
    false,
  );

  assert.equal(
    isString(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    isString(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    isString(-1),
    false,
  );

  assert.equal(
    isString(0),
    false,
  );

  assert.equal(
    isString(1),
    false,
  );

  assert.equal(
    isString(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    isString({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    isString(''),
    true,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    isString('foo'),
    true,
  );
});

QUnit.test('stringNumber', (assert) => {
  assert.equal(
    isString('-1'),
    true,
  );

  assert.equal(
    isString('0'),
    true,
  );

  assert.equal(
    isString('1'),
    true,
  );

  assert.equal(
    isString('2'),
    true,
  );
});
