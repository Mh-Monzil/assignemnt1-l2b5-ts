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
