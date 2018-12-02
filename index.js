/*!
  Copyright (c) 2018 Jamie McElwain.
  Licensed under the MIT License (MIT)
  https://github.com/jgmcelwain/generate-class-list/blob/master/LICENSE.md
*/

const generateClassList = (...potentialClasses) => {
  const classList = []

  potentialClasses.forEach(potentialClass => {
    if (!potentialClass || typeof potentialClass === 'boolean') {
      return
    }

    if (typeof potentialClass === 'string' || typeof potentialClass === 'number') {
      return classList.push(potentialClass)
    }

    if (Array.isArray(potentialClass)) {
      return potentialClass.forEach(inner => {
        return classList.push(generateClassList(inner))
      })
    }

    if (potentialClass === Object(potentialClass)) {
      return Object.entries(potentialClass).forEach(([className, isActive]) => {
        if (isActive === true) {
          return classList.push(className)
        }
      })
    }
  })

  return classList.join(' ')
}

export default generateClassList
