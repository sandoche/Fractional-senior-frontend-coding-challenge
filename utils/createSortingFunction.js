const createSortingFunction = (field, direction) => {
  const sortingFunction = (a, b) => {
    if (direction === 'asc') {
      if (typeof a[field] === 'string') {
        return a[field].toLowerCase() <= b[field].toLowerCase() ? -1 : 1
      } else {
        return a[field] <= b[field] ? -1 : 1
      }
    } else {
      // eslint-disable-next-line
      if (typeof a[field] === 'string') {
        return a[field].toLowerCase() > b[field].toLowerCase() ? -1 : 1
      } else {
        return a[field] > b[field] ? -1 : 1
      }
    }
  }
  return sortingFunction
}

export default createSortingFunction