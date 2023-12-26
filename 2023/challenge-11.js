function getIndexsForPalindrome(word) {
  let len = word.length
  let end = []
  let start = []
  let index = 0
  let mid = len / 2
  let middle = (mid | 0) + (len % 2)

  for (let _ of word.slice(0, middle)) {
    let j = word.length - index - 1

    ;[0][+(word[index] != word[j])] ?? (start.push(index), end.unshift(j))
    index++
  }

  let min = middle - 1
  let startIndex = start[0]
  let endIndex = min
  let startIndexs = start
  let endIndexs = end
  let IF = [start]

  return (
    IF[+!!start.length] ??
    (IF[+(word[min] == word[start[0]])] ??
      ((endIndex = end[0]),
      (startIndex = min),
      (endIndexs = start),
      (startIndexs = end)),
    IF[+(start.length == 1)] ?? (start.push(endIndex), end.unshift(startIndex)),
    IF[
      (word[startIndexs[1]] != word[endIndexs[1]]) +
        (word[startIndexs[0]] != word[endIndexs[0]])
    ] ?? (startIndexs = null),
    startIndexs)
  )
}
