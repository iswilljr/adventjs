# Challenge #5: ⏱️ The countdown to take off

Elves have a **secret timestamp**: it’s the exact date and time when **Santa Claus takes off with the sleigh** 🛷 to deliver gifts around the world. But at the North Pole they use a super weird format to store the time:

`YYYY*MM*DD@HH|mm|ss NP`
(example: `2025*12*25@00|00|00 NP`).

Your mission is to write a function that receives:

- `fromTime`: reference date in elf format (`YYYY*MM*DD@HH|mm|ss NP`).
- `takeOffTime`: the same takeoff date, also in elf format.

The function must return:

- The **full seconds** remaining until takeoff.
- If we’re exactly at takeoff time -> `0`.
- If takeoff already happened -> a **negative number** indicating how many seconds have passed since then.

## Examples

```typescript
timeUntilTakeOff('2025*12*25@00|00|00 NP', '2025*12*25@00|00|05 NP') // 5
timeUntilTakeOff('2025*12*25@00|00|05 NP', '2025*12*25@00|00|00 NP') // -5
timeUntilTakeOff('2025*12*25@00|00|00 NP', '2025*12*25@00|00|00 NP') // 0
timeUntilTakeOff('2024*12*31@23|59|59 NP', '2025*01*01@00|00|00 NP') // 1
```
