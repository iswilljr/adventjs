export function countPackages(carriers: Carrier[], carrierID: string): number {
  const carrier = carriers.find(carrier => carrier[0] === carrierID) as Carrier

  return carrier[2].reduce(
    (acc, carrier) => (acc += countPackages(carriers, carrier)),
    carrier[1],
  )
}

type Carrier = [string, number, string[]]
