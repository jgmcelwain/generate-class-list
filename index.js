/*!
  Copyright (c) 2018 Jamie McElwain.
  Licensed under the MIT License (MIT)
  https://github.com/jgmcelwain/generate-class-list/blob/master/LICENSE.md
*/

const generateClassList = (...classNames) => {
  const classList = []

  const addClass = className => {
    if (className) {
      return classList.push(className)
    }
  }

  classNames.forEach(className => {
    if (!className || typeof className === 'boolean') {
      return
    }

    if (typeof className === 'string' || typeof className === 'number') {
      return addClass(className)
    }

    if (typeof className === 'function') {
      return addClass(className.call(this))
    }

    if (Array.isArray(className)) {
      return className.forEach(inner => {
        return addClass(generateClassList(inner))
      })
    }

    if (className === Object(className)) {
      return Object.entries(className).forEach(([className, isActive]) => {
        if (isActive) {
          return addClass(className)
        }
      })
    }
  })

  return classList.join(' ')
}

export default generateClassList
