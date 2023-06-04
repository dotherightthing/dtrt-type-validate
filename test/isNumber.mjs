import { isNumber } from '../dtrt-type-validate.mjs';

QUnit.module('isNumber');

// this type

// all types

QUnit.test('array', (assert) => {
  assert.equal(
    isNumber([]),
    false,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    isNumber(true),
    false,
  );

  assert.equal(
    isNumber(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    isNumber(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    isNumber(-1),
    true,
  );

  assert.equal(
    isNumber(0),
    true,
  );

  assert.equal(
    isNumber(1),
    true,
  );

  assert.equal(
    isNumber(2),
    true,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    isNumber({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    isNumber(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    isNumber('foo'),
    false,
  );
});

QUnit.test('stringNumber', (assert) => {
  assert.equal(
    isNumber('-1'),
    false,
  );

  assert.equal(
    isNumber('0'),
    false,
  );

  assert.equal(
    isNumber('1'),
    false,
  );

  assert.equal(
    isNumber('2'),
    false,
  );
});
