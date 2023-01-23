/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { DateTime } from './luxon.js';

export const showDateTime = () => {
  const dateTimeDiv = document.getElementById('DateTime');
  const now = DateTime.local();

  const dateString = now.toLocaleString(DateTime.DATE_FULL);
  const timeString = now.toLocaleString(DateTime.TIME_SIMPLE);

  const dateTime = `${dateString} , ${timeString}`;
  dateTimeDiv.innerHTML = dateTime;
};
