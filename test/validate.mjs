import dtrtValidate from '../src/dtrt-type-validate.mjs';

QUnit.module('validate');

QUnit.test('error', (assert) => {
  assert.throws(
    () => {
      dtrtValidate.validate('foo', 'object', 'My object');
    },
    (err) => err.toString() === 'Error: My object must be an object, not a string',
    'expected error thrown',
  );
});

QUnit.test('array', (assert) => {
  assert.deepEqual(
    dtrtValidate.validate([], 'array'),
    [],
  );
});

QUnit.test('boolean', (assert) => {
  assert.deepEqual(
    dtrtValidate.validate(true, 'boolean'),
    true,
  );

  assert.deepEqual(
    dtrtValidate.validate(false, 'boolean'),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.deepEqual(
    dtrtValidate.validate(null, 'null'),
    null,
  );
});

QUnit.test('number', (assert) => {
  assert.deepEqual(
    dtrtValidate.validate(-1, 'number'),
    -1,
  );

  assert.deepEqual(
    dtrtValidate.validate(0, 'number'),
    0,
  );

  assert.deepEqual(
    dtrtValidate.validate(1, 'number'),
    1,
  );

  assert.deepEqual(
    dtrtValidate.validate(2, 'number'),
    2,
  );
});

QUnit.test('object', (assert) => {
  assert.deepEqual(
    dtrtValidate.validate({}, 'object'),
    {},
  );
});

QUnit.test('equal', (assert) => {
  assert.deepEqual(
    dtrtValidate.validate('', 'string'),
    '',
  );
});

QUnit.test('equal', (assert) => {
  assert.deepEqual(
    dtrtValidate.validate('foo', 'string1'),
    'foo',
  );
});

QUnit.test('stringNumber', (assert) => {
  assert.equal(
    dtrtValidate.validate('-1', 'stringNumber'),
    '-1',
  );

  assert.equal(
    dtrtValidate.validate('0', 'stringNumber'),
    '0',
  );

  assert.equal(
    dtrtValidate.validate('1', 'stringNumber'),
    '1',
  );

  assert.equal(
    dtrtValidate.validate('2', 'stringNumber'),
    '2',
  );
});
