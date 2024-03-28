export function createPhoneNumber(numbers: number[]): string {
  let firstThree: string = numbers.slice(0, 3).join("");
  let secondThree: string = numbers.slice(3, 6).join("");
  let lastFour: string = numbers.slice(-4).join("");

  return `(${firstThree}) ${secondThree}-${lastFour}`;
}

// OR refactor to

function phoneNumber<T extends number[]>(numbers: T): string {
  let phoneNumber: string = "(xxx) xxx-xxxx";

  for (let i = 0; i < numbers.length; i++) {
    phoneNumber = phoneNumber.replace("x", numbers[i].toString());
  }

  return phoneNumber;
}
