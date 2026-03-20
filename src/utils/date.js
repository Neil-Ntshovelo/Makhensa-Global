export const parseISODate = (isoDate) => {
  // Treat input as a local-date (no timezone shifting surprises)
  if (!isoDate) return null;
  const [y, m, d] = isoDate.split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
};

export const isWithinInclusive = (date, startDate, endDate) => {
  if (!date || !startDate || !endDate) return false;
  return date >= startDate && date <= endDate;
};

export const isRunningNow = ({ startDate, endDate }) => {
  const start = parseISODate(startDate);
  const end = parseISODate(endDate);
  if (!start || !end) return false;

  const now = new Date();
  // Compare using local time but clamp now to date precision
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return isWithinInclusive(today, start, end);
};

export const formatShortDate = (isoDate) => {
  const date = parseISODate(isoDate);
  if (!date) return "";
  return date.toLocaleDateString("en-ZA", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
};

