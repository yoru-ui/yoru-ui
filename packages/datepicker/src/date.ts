const getWeekNumber = (date: Date): number => {
  const firstDayOfYear = new Date(date.getFullYear(), 0, 1);
  const pastDaysOfYear = (date.getTime() - firstDayOfYear.getTime()) / 86_400_000;

  return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
};

const isLeapYear = (year: number): boolean =>
  year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;

export const createDay = (dateParams: Date = new Date(), lang = 'default') => {
  const day = {
    Date: dateParams,
    date: dateParams.getDate(),
    day: dateParams.toLocaleDateString(lang, { weekday: 'long' }),
    dayNumber: dateParams.getDay() + 1,
    year: dateParams.getFullYear(),
    yearShort: dateParams.toLocaleDateString(lang, { year: '2-digit' }),
    month: dateParams.toLocaleDateString(lang, { month: 'long' }),
    monthShort: dateParams.toLocaleDateString(lang, { month: 'short' }),
    monthNumber: dateParams.getMonth() + 1,
    timestamp: dateParams.getTime(),
    week: getWeekNumber(dateParams),
  };

  const isEqualTo = (date: Date): boolean =>
    date.getDate() === day.date &&
    date.getMonth() === day.monthNumber - 1 &&
    date.getFullYear() === day.year;

  return {
    ...day,
    isEqualTo,
    isToday: (): boolean => isEqualTo(new Date()),
  };
};

export const createMonth = (dateParams: Date, lang = 'default') => {
  const day = createDay(dateParams, lang);
  const monthsSize = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const month = {
    lang: lang,
    day,
    name: day.month,
    number: day.monthNumber,
    year: day.year,
    numberOfDays: monthsSize[day.monthNumber - 1],
  };

  if (day.monthNumber === 2) {
    month.numberOfDays = isLeapYear(day.year) ? 29 : 28;
  }

  const getDay = (date: number) =>
    createDay(new Date(month.year, month.number - 1, date), month.lang);

  return {
    ...month,
    getDay,
    [Symbol.iterator]: function* () {
      let number = 1;
      yield getDay(number);
      while (number < month.numberOfDays) {
        ++number;
        yield getDay(number);
      }
    },
  };
};
