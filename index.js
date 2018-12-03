/*!
  Copyright (c) 2018 Jamie McElwain.
  Licensed under the MIT License (MIT)
  https://github.com/jgmcelwain/generate-class-list/blob/master/LICENSE.md
*/

const generateClassList = (...classNames) => {
  const classList = []

  classNames.forEach(className => {
    if (!className || typeof className === 'boolean') {
      return
    }

    if (typeof className === 'string' || typeof className === 'number') {
      return classList.push(className)
    }

    if (typeof className === 'function') {
      return classList.push(className.call(this))
    }

    if (Array.isArray(className)) {
      return className.forEach(inner => {
        return classList.push(generateClassList(inner))
      })
    }

    if (className === Object(className)) {
      return Object.entries(className).forEach(([className, isActive]) => {
        if (isActive) {
          return classList.push(className)
        }
      })
    }
  })

  return classList.join(' ')
}

export default generateClassList
