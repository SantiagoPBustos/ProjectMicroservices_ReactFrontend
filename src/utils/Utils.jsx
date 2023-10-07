export const generateDays = () => {
  const result = [];
  for (let i = 1; i <= 31; i++) {
    result.push(i);
  }
  return result;
};

export const generateMonths = () => {
  const months = [];
  for (let i = 1; i <= 12; i++) {
    months.push(i);
  }
  return months;
};

export const generateYears = (rangoInicial, rangoFinal) => {
  const years = [];
  for (let i = rangoInicial; i <= rangoFinal; i++) {
    years.push(i);
  }
  return years;
};
