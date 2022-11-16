import * as React from "react";

type Hours = {
  hours: Week;
  children?: React.ReactNode;
};

interface Week extends Record<string, any> {
  monday?: Day;
  tuesday?: Day;
  wednesday?: Day;
  thursday?: Day;
  friday?: Day;
  saturday?: Day;
  sunday?: Day;
}

type Day = {
  isClosed: boolean;
  openIntervals: OpenIntervals[];
};

type OpenIntervals = {
  start: string;
  end: string;
};

const todayIndex = new Date().getDay() == 0 ? 6 : new Date().getDay() -1;

/**
 * Dynamically creates a sort order based on today's day.
 */
function getSorterForCurrentDay(): { [key: string]: number } {
    const dayIndexes = [0, 1, 2, 3, 4, 5, 6];
/*
  const updatedDayIndexes = [];
  for (let i = 0; i < dayIndexes.length; i++) {
    let dayIndex = dayIndexes[i];
    *//*if (dayIndex - todayIndex >= 0) {
      dayIndex = dayIndex - todayIndex;
    } else {
      dayIndex = dayIndex + 7 - todayIndex;
    }*//*
    updatedDayIndexes[i] = dayIndex;
  }*/

  return {
  /*  monday: updatedDayIndexes[1],
    tuesday: updatedDayIndexes[2],
    wednesday: updatedDayIndexes[3],
    thursday: updatedDayIndexes[4],
    friday: updatedDayIndexes[5],
    saturday: updatedDayIndexes[6],
    sunday: updatedDayIndexes[0]*/
      monday: dayIndexes[0],
      tuesday: dayIndexes[1],
      wednesday: dayIndexes[2],
      thursday: dayIndexes[3],
      friday: dayIndexes[4],
      saturday: dayIndexes[5],
      sunday: dayIndexes[6]
  };
}

const defaultSorter: { [key: string]: number } = {
  monday: 0,
  tuesday: 1,
  wednesday: 2,
  thursday: 3,
  friday: 4,
  saturday: 5,
  sunday: 6,
};

const giorniTradotti: { [key: string]: string } = {
    monday: 'Lunedì',
    tuesday: 'Martedì',
    wednesday: 'Mercoledì',
    thursday: 'Giovedì',
    friday: 'Venerdì',
    saturday: 'Sabato',
    sunday: 'Domenica',
}

function sortByDay(week: Week): Week {
    const tmp = [];
    for (const [k, v] of Object.entries(week)) {
        tmp[getSorterForCurrentDay()[k]] = { key: k, value: v };
    }
    
  const orderedWeek: Week = {};
    tmp.forEach((obj) => {
    orderedWeek[obj.key] = obj.value;
    });

  return orderedWeek;
}

const renderHours = (week: Week) => {

  const dayDom: JSX.Element[] = [];
/*  for (const [k, v] of Object.entries(sortByDay(week))) {
    dayDom.push(<DayRow key={k} dayName={k} day={v} isToday={isDayToday(k)} />);
    }*/
    for (const [k, v] of Object.entries(sortByDay(week))) {
        dayDom.push(<DayRow key={k} dayName={k} giornoTradotto={giorniTradotti[k]} day={v} isToday={isDayToday(k)} />);        
    }

  return <div>{dayDom}</div>;
};

function isDayToday(dayName: string) {
    return defaultSorter[dayName] === todayIndex;
   /* return defaultSorter[dayName];*/
}

function convertTo12HourFormat(time: string, /*includeMeridiem: boolean*/): string {
  const timeParts = time.split(":");
  let hour = Number(timeParts[0]);
  const minutesString = timeParts[1];
  /* const meridiem = hour < 12 || hour === 24 ? "AM" : "PM"; // Set AM/PM*/
  /* hour = hour % 12 || 12; // Adjust hours*/
  hour = hour % 24 || 24; // Adjust hours

  return (
      hour.toString() + ":" + minutesString /*+ (includeMeridiem ? meridiem : "")*/
  );
}

type DayRow = {
  dayName: string;
  day: Day;
  giornoTradotto: any;
  isToday?: boolean;
};

const DayRow = (props: DayRow) => {
    const { dayName, day, isToday, giornoTradotto } = props;

  return (
      <div className={`grid grid-cols-2 lg:grid-cols-5 day-list-inner ${isToday ? "font-bold" : ""}`}>
      <div className="lg:col-span-2">
        {giornoTradotto}
      </div>
      {!day.isClosed && (
         <div className="lg:col-span-3">
            {convertTo12HourFormat(day.openIntervals[0].start)} -{" "}
            {convertTo12HourFormat(day.openIntervals[0].end)}
        </div>
      )}
      {day.isClosed && (
        <div className="lg:col-span-3">
         Chiuso
        </div>
      )}
    </div>
  );
};

const Hours = (props: Hours) => {
  const { hours } = props;

  return (
      <>
       <div className="hours">        
        {renderHours(hours)}
      </div>
    </>
  );
};

export default Hours;
