export function stringToNumber(str: string): number {
  const strAsNumber = Number(str);
  if (Number.isNaN(strAsNumber)) throw new Error(`"${str}" is not a number`);

  return strAsNumber;
}
