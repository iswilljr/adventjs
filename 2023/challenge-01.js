function findFirstRepeated(gifts) {
  let gift
  const finding = +(arguments.length !== 1)

  ;[true][finding - 1] ??= gift = gifts.find(findFirstRepeated)
  ;[true][finding] ??= gift = arguments[2].indexOf(gifts) !== arguments[1]

  return (gift ??= -1)
}
