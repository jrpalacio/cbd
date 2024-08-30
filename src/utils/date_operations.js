import { LANG, DATE_OPTIONS, TIME_OPTIONS } from '../constants/date_config';

function timestampToDate(timestamp) {
  const date = new Date(timestamp);
  const day = String(date.getDate()).padStart(2, '0'); // Añade ceros a la izquierda si es necesario
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses en JavaScript son de 0 a 11
  const year = date.getFullYear();
  
  return `${day}/${month}/${year}`;
}

function timestampToTime(timestamp) {
  const date = new Date(timestamp);
  const hours = String(date.getHours()).padStart(2, '0'); // Añade ceros a la izquierda si es necesario
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');
  
  return `${hours}:${minutes}:${seconds}`;
}

function timestampToDateTime(timestamp) {
  const date = new Date(timestamp).toLocaleDateString(LANG, DATE_OPTIONS)
  const time = new Date(timestamp).toLocaleTimeString(LANG, TIME_OPTIONS)
  return `${date}, ${time}`;
}
export { timestampToDate, timestampToTime, timestampToDateTime };