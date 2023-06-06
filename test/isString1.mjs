import { isString1 } from '../dist/dtrt-type-validate.mjs';

QUnit.module('isString1');

// this type

// all types

QUnit.test('array', (assert) => {
  assert.equal(
    isString1([]),
    false,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    isString1(true),
    false,
  );

  assert.equal(
    isString1(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    isString1(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    isString1(-1),
    false,
  );

  assert.equal(
    isString1(0),
    false,
  );

  assert.equal(
    isString1(1),
    false,
  );

  assert.equal(
    isString1(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    isString1({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    isString1(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    isString1('foo'),
    true,
  );
});

QUnit.test('stringNumber', (assert) => {
  assert.equal(
    isString1('-1'),
    true,
  );

  assert.equal(
    isString1('0'),
    true,
  );

  assert.equal(
    isString1('1'),
    true,
  );

  assert.equal(
    isString1('2'),
    true,
  );
});
