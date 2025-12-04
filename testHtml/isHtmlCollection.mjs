// module is loaded via importmap in index.html
import dtrtValidate from 'dtrt-type-validate'; // eslint-disable-line

QUnit.config.fixture = '<div id="test1" class="test"></div>';

QUnit.module('isHTMLCollection: Base Types');

QUnit.test('array', (assert) => {
  assert.equal(
    dtrtValidate.isHTMLCollection([]),
    false,
  );

  assert.equal(
    dtrtValidate.isHTMLCollection('[]'),
    false,
  );
});

QUnit.test('boolean', (assert) => {
  assert.equal(
    dtrtValidate.isHTMLCollection('true'),
    false,
  );

  assert.equal(
    dtrtValidate.isHTMLCollection('false'),
    false,
  );

  assert.equal(
    dtrtValidate.isHTMLCollection(true),
    false,
  );

  assert.equal(
    dtrtValidate.isHTMLCollection(false),
    false,
  );
});

QUnit.test('null', (assert) => {
  assert.equal(
    dtrtValidate.isHTMLCollection(null),
    false,
  );
});

QUnit.test('number', (assert) => {
  assert.equal(
    dtrtValidate.isHTMLCollection(-1),
    false,
  );

  assert.equal(
    dtrtValidate.isHTMLCollection(0),
    false,
  );

  assert.equal(
    dtrtValidate.isHTMLCollection(1),
    false,
  );

  assert.equal(
    dtrtValidate.isHTMLCollection(2),
    false,
  );
});

QUnit.test('object', (assert) => {
  assert.equal(
    dtrtValidate.isHTMLCollection({}),
    false,
  );
});

QUnit.test('string', (assert) => {
  assert.equal(
    dtrtValidate.isHTMLCollection(''),
    false,
  );
});

QUnit.test('string1', (assert) => {
  assert.equal(
    dtrtValidate.isHTMLCollection('foo'),
    false,
  );
});

QUnit.test('stringNumber', (assert) => {
  assert.equal(
    dtrtValidate.isHTMLCollection('-1'),
    false,
  );

  assert.equal(
    dtrtValidate.isHTMLCollection('0'),
    false,
  );

  assert.equal(
    dtrtValidate.isHTMLCollection('1'),
    false,
  );

  assert.equal(
    dtrtValidate.isHTMLCollection('2'),
    false,
  );
});

QUnit.module('isHTMLCollection: DOM Types');

QUnit.test('createTextNode', (assert) => {
  const fixture = document.createTextNode('Hello world');

  assert.equal(
    dtrtValidate.isHTMLCollection(fixture),
    false,
  );
});

QUnit.test('querySelector', (assert) => {
  const fixture = document.querySelector('div#test1');

  assert.equal(
    dtrtValidate.isHTMLCollection(fixture),
    false,
  );
});

QUnit.test('querySelectorAll', (assert) => {
  const fixture = document.querySelectorAll('div');

  assert.equal(
    dtrtValidate.isHTMLCollection(fixture),
    false,
  );
});
