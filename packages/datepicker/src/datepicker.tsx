import React, { useState } from 'react';
import { calendar, goToNextYear, goToNextMonth } from './calendar';
import { yoru } from '@yoru-ui/core';
import { createDay } from './date';
import { useResolvedThemes } from '@yoru-ui/themes';

export interface DatepickerProperties {
  // your props here
  selectedDate?: Date;
}

export const DatePicker: React.FC<DatepickerProperties> = () => {
  const calendars = calendar();
  goToNextYear(calendars);
  goToNextMonth(calendars);
  const getMonthDaysGrid = (): ReturnType<typeof createDay>[] => {
    const firstDayOfMonths = calendars.month.getDay(1);
    const totalLastMonthFinalDays = firstDayOfMonths.dayNumber - 1;
    const totalDays = calendars.month.numberOfDays + totalLastMonthFinalDays;
    const monthList = Array.from({ length: totalDays });

    for (let index = totalLastMonthFinalDays; index < totalDays; index++) {
      monthList[index] = calendars.month.getDay(index + 1 - totalLastMonthFinalDays);
    }
    return monthList as ReturnType<typeof createDay>[];
  };
  const [visible] = useState<boolean>(true);
  const baseStyle = useResolvedThemes('DatePicker', {});
  return (
    <yoru.div __style={baseStyle} className="yoru-date-picker">
      {visible && (
        <yoru.div className="date-picker-overlay">
          <div className="date-picker--weekdays">
            {calendars.weekDays.map((day, index) => (
              <span key={index}>{(day as string).slice(0, 3)}</span>
            ))}
          </div>
          <div className="date-picker--days">
            {getMonthDaysGrid().map((day, index) => (
              <span
                key={index}
                className={`${day?.isEqualTo(new Date()) ? 'selected-date' : ''}${
                  !day?.dayNumber ? 'inactive' : ''
                }`}
              >
                {day?.date}
              </span>
            ))}
          </div>
        </yoru.div>
      )}
    </yoru.div>
  );
};
