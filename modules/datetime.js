/* eslint-disable import/prefer-default-export */
/* eslint-disable no-unused-vars */
import { DateTime } from './luxon.js';

export function showDateTime() {
  const dateTimeDiv = document.getElementById('DateTime');
  const date = new Date();

  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const dateString = date.toLocaleDateString('en-US', options);
  const timeString = date.toLocaleTimeString('en-US', {
    hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true,
  });

  const dateTime = `${dateString} , ${timeString}`;
  dateTimeDiv.innerHTML = dateTime;
}
