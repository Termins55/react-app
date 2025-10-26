import {
  getDate,
  getDay,
  startOfMonth,
  startOfWeek,
  endOfMonth,
  getWeek,
  getYear,
  addDays,
  parse,
  isEqual,
  isSameMonth,
} from "date-fns";

import Calendar from './components/Calendar/index'

const WEEK_DAYS = ["SANDAY", "M...", "T", "W", "T", "F", "S"];

function App() {
  const currentDate = new Date();
  const date = new Date();

  console.log("date :>> ", getDate(currentDate));
  console.log("day :>> ", WEEK_DAYS[getDay(currentDate)]);

  return <Calendar />;
}

export default App;
