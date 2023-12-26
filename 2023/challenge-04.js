function decode(message) {
  let start
  let content
  let end = message.indexOf(')')

  ;[true][end + 1] ??
    ((start = message.lastIndexOf('(', end)),
    (content = [...message.slice(start + 1, end)]),
    (message = decode(
      message.slice(0, start) +
        content.reverse().join('') +
        message.slice(end + 1),
    )))

  return message
}
