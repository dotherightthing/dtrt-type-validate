import { isStringNumber } from '../dist/dtrt-type-validate.mjs';

QUnit.module('isStringNumber');

// this type

// all types

QUnit.test('array', (assert) => {
  assert.equal(
    isStringNumber([]),
    false,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    isStringNumber(true),
    false,
  );

  assert.equal(
    isStringNumber(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    isStringNumber(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    isStringNumber(-1),
    false,
  );

  assert.equal(
    isStringNumber(0),
    false,
  );

  assert.equal(
    isStringNumber(1),
    false,
  );

  assert.equal(
    isStringNumber(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    isStringNumber({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    isStringNumber(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    isStringNumber('foo'),
    false,
  );
});

QUnit.test('stringNumber', (assert) => {
  assert.equal(
    isStringNumber('-1'),
    true,
  );

  assert.equal(
    isStringNumber('0'),
    true,
  );

  assert.equal(
    isStringNumber('1'),
    true,
  );

  assert.equal(
    isStringNumber('2'),
    true,
  );
});
