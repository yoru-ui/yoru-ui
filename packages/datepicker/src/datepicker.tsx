import React, { useState } from 'react';
import { calendar, goToNextMonth, goToPreviousMonth, Calendar } from './calendar';
import { yoru } from '@yoru-ui/core';
import { createDay } from './date';
import { useResolvedThemes } from '@yoru-ui/themes';
import { Button } from '@yoru-ui/button';
import ChevronIcon from './ChevronIcon';
export interface DatepickerProperties {
  // your props here
  selectedDate?: Date;
}

const arrayOfMonth = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const getMonthDaysGrid = (cal: Calendar): ReturnType<typeof createDay>[] => {
  const firstDayOfMonths = cal.month.getDay(1);
  const totalLastMonthFinalDays = firstDayOfMonths.dayNumber - 1;
  const totalDays = cal.month.numberOfDays + totalLastMonthFinalDays;
  const monthList = Array.from({ length: totalDays });

  for (let index = totalLastMonthFinalDays; index < totalDays; index++) {
    monthList[index] = cal.month.getDay(index + 1 - totalLastMonthFinalDays);
  }
  return monthList as ReturnType<typeof createDay>[];
};

const pickerMode = (cal: Calendar) => ({
  day: (
    <>
      <yoru.div className="date-picker--weekdays">
        {cal.weekDays.map((day, index) => (
          <span key={index}>{(day as string).slice(0, 3)}</span>
        ))}
      </yoru.div>
      <yoru.div className="date-picker--days">
        {getMonthDaysGrid(cal).map((day, index) => (
          <yoru.span
            key={index}
            className={`${day?.isEqualTo(new Date()) ? 'selected-date' : ''}${
              !day?.dayNumber ? 'inactive' : ''
            }`}
          >
            <yoru.span>{day?.date}</yoru.span>
          </yoru.span>
        ))}
      </yoru.div>
    </>
  ),
  month: (
    <yoru.div className="date-picker--months">
      {arrayOfMonth.map((month, index) => (
        <yoru.span
          key={index}
          onClick={() => {}}
          className={`${cal.month.number === index + 1 ? 'active' : ''}`}
        >
          <yoru.span>{month}</yoru.span>
        </yoru.span>
      ))}
    </yoru.div>
  ),
  year: (() => {
    const yearList = Array.from({ length: 12 });
    for (let index = 0; index < 12; index++) {
      yearList[index] = cal.year - 6 + index;
    }
    return (
      <div className="date-picker--years">
        {yearList.map(year => (
          <span
            key={year as number}
            onClick={() => {}}
            className={`${cal.year === year ? 'active' : ''}`}
          >
            <span>{year as number}</span>
          </span>
        ))}
      </div>
    );
  })(),
});

type PickerMode = keyof ReturnType<typeof pickerMode>;
interface RenderPickerProperties {
  mode?: PickerMode;
  cal?: Calendar;
}

const RenderPicker: React.FC<RenderPickerProperties> = ({
  mode = 'day',
  cal = calendar(),
}): React.ReactElement => {
  const [currentMode] = useState<PickerMode>(mode);

  return pickerMode(cal)[currentMode];
};

export const DatePicker: React.FC<DatepickerProperties> = () => {
  const [calendars, setCalendars] = useState<Calendar>(calendar());
  const [visible] = useState<boolean>(true);
  const baseStyle = useResolvedThemes('DatePicker', {});
  return (
    <yoru.div __style={baseStyle} className="yoru-date-picker">
      {visible && (
        <yoru.div className="date-picker-overlay">
          <yoru.div className="date-picker--header">
            <Button
              onClick={() => setCalendars(cal => goToPreviousMonth(cal))}
              className="prev-month"
              variants="ghost"
            >
              <ChevronIcon direction="left" />
            </Button>
            <p>
              <span>{calendars.month.name}</span>, <span>{calendars.year}</span>
            </p>
            <Button
              onClick={() => setCalendars(cal => goToNextMonth(cal))}
              className="next-month"
              variants="ghost"
            >
              <ChevronIcon />
            </Button>
          </yoru.div>
          <RenderPicker cal={calendars} mode="day" />
        </yoru.div>
      )}
    </yoru.div>
  );
};
