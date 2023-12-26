function manufacture(gifts, materials) {
  const includes = new RegExp(`^(?=[${materials}]*$)`, 'gi')
  return gifts.filter(includes.test.bind(includes))
}
