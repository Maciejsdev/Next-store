export const formatCurrency = (amount: number | null) => {
  const value = amount || 0;
  return new Intl.NumberFormat("en-IE", {
    style: "currency",
    currency: "EUR",
  }).format(value);
};

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("en-IE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};
