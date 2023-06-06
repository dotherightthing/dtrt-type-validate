import { isBoolean } from '../dist/dtrt-type-validate.mjs';

QUnit.module('isBoolean');

// this type

QUnit.test('string boolean', (assert) => {
  assert.equal(
    isBoolean('true'),
    false,
  );

  assert.equal(
    isBoolean('false'),
    false,
  );
});

// all types

QUnit.test('array', (assert) => {
  assert.equal(
    isBoolean([]),
    false,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    isBoolean(true),
    true,
  );

  assert.equal(
    isBoolean(false),
    true,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    isBoolean(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    isBoolean(-1),
    false,
  );

  assert.equal(
    isBoolean(0),
    false,
  );

  assert.equal(
    isBoolean(1),
    false,
  );

  assert.equal(
    isBoolean(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    isBoolean({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    isBoolean(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    isBoolean('foo'),
    false,
  );
});
