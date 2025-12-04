// module is loaded via importmap in index.html
import dtrtValidate from 'dtrt-type-validate'; // eslint-disable-line

QUnit.config.fixture = '<div id="test1" class="test"></div>';

QUnit.module('isNodeList: Base Types');

QUnit.test('array', (assert) => {
  assert.equal(
    dtrtValidate.isNodeList([]),
    false,
  );

  assert.equal(
    dtrtValidate.isNodeList('[]'),
    false,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    dtrtValidate.isNodeList('true'),
    false,
  );

  assert.equal(
    dtrtValidate.isNodeList('false'),
    false,
  );

  assert.equal(
    dtrtValidate.isNodeList(true),
    false,
  );

  assert.equal(
    dtrtValidate.isNodeList(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    dtrtValidate.isNodeList(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    dtrtValidate.isNodeList(-1),
    false,
  );

  assert.equal(
    dtrtValidate.isNodeList(0),
    false,
  );

  assert.equal(
    dtrtValidate.isNodeList(1),
    false,
  );

  assert.equal(
    dtrtValidate.isNodeList(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    dtrtValidate.isNodeList({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    dtrtValidate.isNodeList(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    dtrtValidate.isNodeList('foo'),
    false,
  );
});

QUnit.test('stringNumber', (assert) => {
  assert.equal(
    dtrtValidate.isNodeList('-1'),
    false,
  );

  assert.equal(
    dtrtValidate.isNodeList('0'),
    false,
  );

  assert.equal(
    dtrtValidate.isNodeList('1'),
    false,
  );

  assert.equal(
    dtrtValidate.isNodeList('2'),
    false,
  );
});

QUnit.module('isNodeList: DOM Types');

QUnit.test('createTextNode', (assert) => {
  const fixture = document.createTextNode('Hello world');

  assert.equal(
    dtrtValidate.isNodeList(fixture),
    false,
  );
});

QUnit.test('querySelector', (assert) => {
  const fixture = document.querySelector('div#test1');

  assert.equal(
    dtrtValidate.isNodeList(fixture),
    false,
  );
});

QUnit.test('querySelectorAll', (assert) => {
  const fixture = document.querySelectorAll('div');

  assert.equal(
    dtrtValidate.isNodeList(fixture),
    true,
  );
});
