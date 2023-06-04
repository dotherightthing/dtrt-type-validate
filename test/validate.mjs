import { validate } from '../dtrt-type-validate.mjs';

QUnit.module('validate');

QUnit.test('error', (assert) => {
  assert.throws(
    () => {
      validate('foo', 'object', 'My object');
    },
    (err) => err.toString() === 'Error: My object must be an object, not a string',
    'expected error thrown',
  );
});

QUnit.test('array', (assert) => {
  assert.deepEqual(
    validate([], 'array'),
    [],
  );
});

QUnit.test('boolean', (assert) => {
  assert.deepEqual(
    validate(true, 'boolean'),
    true,
  );

  assert.deepEqual(
    validate(false, 'boolean'),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.deepEqual(
    validate(null, 'null'),
    null,
  );
});

QUnit.test('number', (assert) => {
  assert.deepEqual(
    validate(-1, 'number'),
    -1,
  );

  assert.deepEqual(
    validate(0, 'number'),
    0,
  );

  assert.deepEqual(
    validate(1, 'number'),
    1,
  );

  assert.deepEqual(
    validate(2, 'number'),
    2,
  );
});

QUnit.test('object', (assert) => {
  assert.deepEqual(
    validate({}, 'object'),
    {},
  );
});

QUnit.test('equal', (assert) => {
  assert.deepEqual(
    validate('', 'string'),
    '',
  );
});

QUnit.test('equal', (assert) => {
  assert.deepEqual(
    validate('foo', 'string1'),
    'foo',
  );
});

QUnit.test('stringNumber', (assert) => {
  assert.equal(
    validate('-1', 'stringNumber'),
    '-1',
  );

  assert.equal(
    validate('0', 'stringNumber'),
    '0',
  );

  assert.equal(
    validate('1', 'stringNumber'),
    '1',
  );

  assert.equal(
    validate('2', 'stringNumber'),
    '2',
  );
});
