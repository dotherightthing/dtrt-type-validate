import { isNull } from '../dist/dtrt-type-validate.mjs';

QUnit.module('isNull');

// this type

// all types

QUnit.test('array', (assert) => {
  assert.equal(
    isNull([]),
    false,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    isNull(true),
    false,
  );

  assert.equal(
    isNull(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    isNull(null),
    true,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    isNull(-1),
    false,
  );

  assert.equal(
    isNull(0),
    false,
  );

  assert.equal(
    isNull(1),
    false,
  );

  assert.equal(
    isNull(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    isNull({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    isNull(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    isNull('foo'),
    false,
  );
});
