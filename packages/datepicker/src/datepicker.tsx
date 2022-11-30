import React, { useCallback, useRef, useState } from 'react';
import {
  calendar,
  goToNextMonth,
  goToPreviousMonth,
  Calendar,
  goToDate,
  goToPreviousYear,
  goToNextYear,
  formatDate,
} from './calendar';
import { yoru } from '@yoru-ui/core';
import { createDay } from './date';
import { useResolvedThemes } from '@yoru-ui/themes';
import { Button } from '@yoru-ui/button';
import { Input } from '@yoru-ui/input';
import ChevronIcon from './ChevronIcon';
import useOutsideBounds from './hooks/useOutsideBounds';
export interface DatepickerProperties {
  // your props here
  selectedDate?: Date;
  onChange?: (date: Date) => void;
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
  const prevMonth = goToPreviousMonth({ ...cal });
  const nextMonth = goToNextMonth({ ...cal });
  const totalLastMonthFinalDays = firstDayOfMonths.dayNumber - 1;
  const totalDays = cal.month.numberOfDays + totalLastMonthFinalDays;
  const monthList = Array.from({ length: totalDays });

  const lastDayOfMonths = cal.month.getDay(cal.month.numberOfDays).day;
  const totalFirstMonthFinalDays =
    cal.weekDays.length - cal.weekDays.findIndex(day => day === lastDayOfMonths) - 1;

  for (let i = 0; i < totalLastMonthFinalDays; i++) {
    const inverted = totalLastMonthFinalDays - (i + 1);
    monthList[i] = prevMonth.month.getDay(prevMonth.month.numberOfDays - inverted);
  }

  for (let index = totalLastMonthFinalDays; index < totalDays; index++) {
    monthList[index] = cal.month.getDay(index + 1 - totalLastMonthFinalDays);
  }

  for (let index = totalDays; index < totalDays + totalFirstMonthFinalDays; index++) {
    monthList[index] = nextMonth.month.getDay(index + 1 - totalDays);
  }

  return monthList as ReturnType<typeof createDay>[];
};

const pickerMode = ({
  cal = calendar(),
  selectedDate = new Date(),
  onChangeMonth = () => {},
  onChangeYear = () => {},
  onChangeDay = () => {},
}: RenderPickerProperties) => ({
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
            className={`${day?.isEqualTo(selectedDate) ? 'selected-date' : ''} ${
              day?.monthNumber !== cal.month.number ? 'inactive' : ''
            }`}
            onClick={() => onChangeDay(day.Date)}
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
          onClick={() => onChangeMonth(index + 1)}
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
        {(yearList as number[]).map(year => (
          <span
            key={year}
            onClick={() => onChangeYear(year)}
            className={`${cal.year === year ? 'active' : ''}`}
          >
            <span>{year}</span>
          </span>
        ))}
      </div>
    );
  })(),
});

type PickerMode = keyof ReturnType<typeof pickerMode>;
interface RenderPickerProperties {
  selectedDate?: Date;
  mode?: PickerMode;
  cal?: Calendar;
  onChangeMonth?: (month: number) => void;
  onChangeYear?: (year: number) => void;
  onChangeDay?: (day: Date) => void;
}

const RenderPicker: React.FC<RenderPickerProperties> = (props): React.ReactElement => {
  const { mode = 'day' } = props;

  return pickerMode(props)[mode];
};

export const DatePicker: React.FC<DatepickerProperties> = ({
  onChange = () => {},
  selectedDate,
}) => {
  const [calendars, setCalendars] = useState<Calendar>(calendar());
  const [mode, setMode] = useState<PickerMode>('day');
  const datePickerRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useOutsideBounds(datePickerRef);
  const baseStyle = useResolvedThemes('DatePicker', {});

  const onChangeDay = (day: Date) => {
    onChange(day);
    setVisible(false);
  };

  const onChangeMonth = (month: number) => {
    setCalendars(cal => goToDate(cal, month, cal.year));
    setMode('day');
  };

  const onChangeYear = (year: number) => {
    setCalendars(cal => goToDate(cal, cal.month.number, year));
    setMode('day');
  };

  const handlePreviousButton = useCallback((mode: PickerMode) => {
    switch (mode) {
      case 'day':
      case 'month':
        setCalendars(cal => goToPreviousMonth(cal));
        break;
      case 'year':
        setCalendars(cal => goToPreviousYear(cal));
        break;
    }
  }, []);

  const handleNextButton = useCallback((mode: PickerMode) => {
    switch (mode) {
      case 'day':
      case 'month':
        setCalendars(cal => goToNextMonth(cal));
        break;
      case 'year':
        setCalendars(cal => goToNextYear(cal));
        break;
    }
  }, []);

  React.useEffect(() => {
    if (selectedDate) {
      console.info(formatDate(calendar(selectedDate), 'Tanggal: DD-YYYY'));
    }
  }, [selectedDate]);

  return (
    <yoru.div ref={datePickerRef} __style={baseStyle} className="yoru-date-picker">
      <Input value={selectedDate?.toISOString()} disabled placeholder="Select Date" />
      <yoru.div className="yoru-click-listener" onClick={() => setVisible(!visible)}></yoru.div>
      {visible && (
        <yoru.div className="date-picker-overlay">
          <yoru.div className="date-picker--header">
            <Button
              onClick={() => handlePreviousButton(mode)}
              className="prev-month"
              variants="ghost"
            >
              <ChevronIcon direction="left" />
            </Button>
            <yoru.p>
              <yoru.span onClick={() => setMode('month')}>{calendars.month.name}</yoru.span>,{' '}
              <yoru.span onClick={() => setMode('year')}>{calendars.year}</yoru.span>
            </yoru.p>
            <Button onClick={() => handleNextButton(mode)} className="next-month" variants="ghost">
              <ChevronIcon />
            </Button>
          </yoru.div>
          <RenderPicker
            cal={calendars}
            mode={mode}
            onChangeMonth={onChangeMonth}
            onChangeYear={onChangeYear}
            onChangeDay={onChangeDay}
            selectedDate={selectedDate}
          />
        </yoru.div>
      )}
    </yoru.div>
  );
};
