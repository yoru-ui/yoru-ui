import { createDay, createMonth } from './date';

// export const calendar = () => {
//   const weekDays = Array.from({ length: 7 });
//   const today = createDay(new Date(), 'default');
//   const year = 2021;
//   const month = createMonth(new Date(year, 0), 'default');
//   const lang = 'default';
//   weekDays.forEach((_, index) => {
//     const day = month.getDay(index);
//     if (!weekDays.includes(day.day)) {
//       weekDays[day.dayNumber - 1] = day.day;
//     }
//   });

//   const getMonth = (monthNumber: number): typeof month =>
//     createMonth(new Date(year, monthNumber - 1), lang);

//   const getPreviousMonth = (): typeof month => {
//     if (month.number === 1) {
//       // back to december of previous year
//       return createMonth(new Date(year - 1, 11), lang);
//     }
//     return createMonth(new Date(year, month.number - 2), lang);
//   };

//   const getNextMonth = (): typeof month => {
//     if (month.number === 12) {
//       // back to january of next year
//       return createMonth(new Date(year + 1, 0), lang);
//     }
//     return createMonth(new Date(year, month.number + 2), lang);
//   };

//   return {
//     weekDays,
//     today,
//     year,
//     month,
//     lang,
//     getMonth,
//     getPreviousMonth,
//     getNextMonth,
//   };
// };

export const calendar = (
  yearParams: number | null = null,
  monthNumber: number | null = null,
  lang = 'default',
) => {
  const weekDays = Array.from({ length: 7 });
  const today = createDay(undefined, lang);
  const year = yearParams ?? today.year;
  const month = createMonth(new Date(year, (monthNumber || today.monthNumber) - 1), lang);
  weekDays.forEach((_, index) => {
    const day = month.getDay(index);
    if (!weekDays.includes(day.day)) {
      weekDays[day.dayNumber - 1] = day.day;
    }
  });

  const getMonth = (monthNumber: number): typeof month =>
    createMonth(new Date(year, monthNumber - 1), lang);

  const getPreviousMonth = (): typeof month => {
    if (month.number === 1) {
      // back to december of previous year
      return createMonth(new Date(year - 1, 11), lang);
    }
    return createMonth(new Date(year, month.number - 2), lang);
  };

  const getNextMonth = (): typeof month => {
    if (month.number === 12) {
      // back to january of next year
      return createMonth(new Date(year + 1, 0), lang);
    }
    return createMonth(new Date(year, month.number + 2), lang);
  };

  const calendar = {
    lang: lang,
    today,
    year,
    month,
    weekDays,
    [Symbol.iterator]: function* iterateMonth() {
      let number = 1;
      yield getMonth(number);
      while (number < 12) {
        number++;
        yield getMonth(number);
      }
    },
  };

  return {
    ...calendar,
    getPreviousMonth,
    getNextMonth,
  };
};

export type Calendar = ReturnType<typeof calendar>;

export const goToNextYear = (cal: Calendar): Calendar => {
  cal.year += 1;
  cal.month = createMonth(new Date(cal.year, cal.month.number - 1), cal.lang);
  return { ...cal };
};

export const goToPreviousYear = (cal: Calendar): Calendar => {
  cal.year -= 1;
  cal.month = createMonth(new Date(cal.year, cal.month.number - 1), cal.lang);
  return { ...cal };
};

export const goToNextMonth = (cal: Calendar): Calendar => {
  if (cal.month.number === 12) {
    cal.month = createMonth(new Date(cal.year, 0), cal.lang);
    return { ...cal };
  }

  cal.month = createMonth(new Date(cal.year, cal.month.number), cal.lang);
  return { ...cal };
};

export const goToPreviousMonth = (cal: Calendar): Calendar => {
  if (cal.month.number === 1) {
    cal.month = createMonth(new Date(cal.year, 11), cal.lang);
    return { ...cal };
  }

  cal.month = createMonth(new Date(cal.year, cal.month.number - 2), cal.lang);
  return { ...cal };
};

export const goToDate = (cal: Calendar, monthNumber: number, yearParams: number): Calendar => {
  cal.month = createMonth(new Date(cal.year, monthNumber - 1), cal.lang);
  cal.year = yearParams;
  return { ...cal };
};
