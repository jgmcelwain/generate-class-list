# generate-class-list

Generate a CSS class list for an element from a variety of input formats, with support for static and conditional classes.

## Usage

`generate-class-list` accepts a variety of input formats.

```js
import generateClassList from 'generate-class-list'

// string
generateClassList('my-class') // 'my-class'

// array
generateClassList(['first', 'second']) // 'first second'

// object with conditions
generateClassList({ 'conditional-class': someCheck === true }) // 'conditional-class'

// values from functions
generateClassList(() => 'from-a-function')) // 'from-a-function'

// multiple arguments
generateClassList('first', { 'second': someCheck === true }) // 'first second'

// nested arrays
generateClassList([[[[[[[[[[['why-would-you-do-this']]]]]]]]]]]) // 'why-would-you-do-this'
```

## Examples

### JS

```html
<input id="input-field" class="input-field" />

<script type="text/javascript" src="//unpkg.com/generate-class-list"></script>
<script type="text/javascript">
  const inputField = document.querySelector('#input-field')

  inputField.addEventListener('input', ({ target: { value } }) => {
    inputField.setAttribute('class', generateClassList('input-field', { 'is-valid': value.length > 0 }))
  })
</script>
```

### React

```jsx
import React, { useState } from 'react'
import generateClassList from 'generate-class-list'

const InputField = () => {
  const [value, setValue] = useState('')

  return (
    <input
      type="text"
      value={value}
      onChange={({ target }) => setValue(target.value)}
      className={generateClassList('input-field', { 'is-valid': value.length > 0 })}
    />
  )
}

export default InputField
```

### Vue.js

> Vue already has [similar functionality out of the box](https://vuejs.org/v2/guide/class-and-style.html), so `generate-class-list` is likely unnecessary.

```vue
<template>
  <input v-model="value" :class="classList" type="text" />
</template>

<script>
import generateClassList from 'generate-class-list'

export default {
  name: 'input-field',
  data() {
    return {
      value: ''
    }
  },
  computed: {
    classList() {
      return generateClassList('input-field', { 'is-valid': this.value.length > 0 })
    }
  }
}
</script>
```
