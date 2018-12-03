import generateClassList from './index'

test('adds a class from a string', () => {
  expect(generateClassList('from-string')).toBe('from-string')
})

test('adds multiple classes from an array', () => {
  expect(generateClassList(['first', 'second'])).toBe('first second')
})

test('ignores falsey values when adding classes', () => {
  expect(generateClassList(['only-class', false, null, undefined])).toBe('only-class')
})

test('conditionally adds classes from objects', () => {
  expect(
    generateClassList({
      'should-exist': true,
      'should-not-exist': false
    })
  ).toBe('should-exist')
})

test('adds multiple classes from multiple arguments ', () => {
  expect(generateClassList('first-class', ['second-class'], { 'third-class': true })).toBe(
    'first-class second-class third-class'
  )
})
