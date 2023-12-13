# Challenge #13: Calculating the time

The elves are preparing for **Christmas Eve** and they need your help to determine if they have enough time or not ⏳.

For this, they give you an array with the duration of each delivery. The format of the duration is `HH:mm:ss`, the deliveries start at `00:00:00` and the time limit is `07:00:00`.

**Your function must return the time they will lack or the time they will have left over** in order to finish the deliveries. The format of the returned duration should be `HH:mm:ss`.

If they finish before `07:00:00`, the remaining time until `07:00:00` should be displayed with a negative sign. For example, **if they have 1 hour and 30 minutes left over, return `-01:30:00`**

```js
calculateTime(['00:10:00', '01:00:00', '03:30:00'])
// '-02:20:00'

calculateTime(['02:00:00', '05:00:00', '00:30:00'])
// '00:30:00'

calculateTime(['00:45:00', '00:45:00', '00:00:30', '00:00:30']) // '-05:29:00'
```
