# Challenge #18: 📇 Santa's Magic Agenda

Santa Claus has a magic agenda where he keeps the addresses of the children to deliver the gifts. However, the agenda is a bit messy. The lines have the child's name, the phone number, and the address, but not always in the same order.

The children's names are always between `<` and `>`, for example, `<Juan Perez>`.
The phone numbers have the format `+X-YYY-YYY-YYY`, where `X` is one or two digits and each `Y` is a digit, for example, `+34-600-123-456` or `+3-123-456-789`.
The address is everything that is left on the line after removing the name and the phone number.

Your task is to write a function that, given the agenda and a phone number, returns the child's name and address if exactly one child with that phone number is found.

If no child is found or more than one child has a phone number that contains the search string, return `null`.

```javascript
const agenda = `+34-600-123-456 Calle Alegria 5 <Juan Perez>
Reservas-01 <Maria Garcia> +34-123-456-789 Calle Fin 2`

findInAgenda(agenda, '34-600-123-456')
// { name: "Juan Perez", address: "Calle Alegria 5" }

findInAgenda(agenda, '600-123')
// { name: "Juan Perez", address: "Calle Alegria 5" }

findInAgenda(agenda, '111')
// null
// (No results found)

findInAgenda(agenda, '1')
// null
// (Too many results found)
```
