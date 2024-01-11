import React from 'react';
import moment from 'moment';
import style from './Date.module.scss';
const TodayDate: React.FC = () => {
  const day = moment().format('D');
  const month = moment().format('MMM');
  const year = moment().format('YYYY');
  const weekDay = moment().format('dddd');

  return (
    <div className={style.date}>
      <div className={style.day}>{day}</div>
      <div>
        <div>{month}</div>
        <div className={style.year}>{year}</div>
      </div>
      <div className={style.weekDay}>{weekDay}</div>
    </div>
  );
};

export default TodayDate;
