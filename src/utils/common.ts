export function mapObject(obj: any, fn: (value: any) => any) {
  if (Array.isArray(obj)) return obj.map((value) => fn(value));
  if (typeof obj === "object" && obj !== null) {
    return Object.fromEntries(
      Object.entries(obj).map(([key, value]) => [key, fn(value)])
    );
  }
  return obj !== null && obj !== undefined ? fn(obj) : obj;
}
