function formatString(input: string, toUpper: boolean = true): string {
  return toUpper ? input.toUpperCase() : input.toLowerCase();
}

type Book = {
  title: string;
  rating: number;
};

function filterByRating(items: Book[]): Book[] {
  return items.filter((item) => item.rating >= 4);
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
  return arrays.flat();
}

class Vehicle {
  private make: string;
  private year: number;

  constructor(make: string, year: number) {
    this.make = make;
    this.year = year;
  }

  getInfo() {
    return `Make: ${this.make}, Year: ${this.year}`;
  }
}

class Car extends Vehicle {
  private model: string;

  constructor(make: string, year: number, model: string) {
    super(make, year);
    this.model = model;
  }

  getModel() {
    return `Model: ${this.model}`;
  }
}

function processValue(value: string | number): number {
  return typeof value === "string" ? value.length : value * 2;
}

interface Product {
  name: string;
  price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
  if (products.length === 0) return null;
  return products.reduce((prev, curr) =>
    prev.price > curr.price ? prev : curr
  );
}

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function getDayType(day: Day): string {
  if (day === Day.Saturday || day === Day.Sunday) return "Weekend";
  return "Weekday";
}

async function squareAsync(n: number): Promise<number> {
  if (n < 0) throw new Error("Negative number not allowed");

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(n * n);
    }, 1000);
  });
}
