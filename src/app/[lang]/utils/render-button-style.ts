export function renderButtonStyle(type: string) {
  switch (type) {
    case "primary":
      return "px-6 py-2 text-lg font-semibold rounded  items-center bg-secondary dark:text-gray-900";
    case "secondary":
      return "px-8 py-3 text-lg font-semibold border  items-center rounded dark:border-gray-100";
    default:
      return "px-8 py-3 text-lg font-semibold rounded  items-center dark:bg-secondary dark:text-gray-900";
  }
}
