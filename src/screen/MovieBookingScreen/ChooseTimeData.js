var date = new Date();
var day = new Date().getDay();

var days = [
  "SUN",
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
  "SUN",
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
];
const ChooseTimeData = [
  {
    id: "1",
    setDate: date.setDate(date.getDate()),
    date: date.getDate(),
    day: days[day],
  },
  {
    id: "2",
    setDate: date.setDate(date.getDate() + 1),
    date: date.getDate(),
    day: days[day + 1],
  },
  {
    id: "3",
    setDate: date.setDate(date.getDate() + 1),
    date: date.getDate(),
    day: days[day + 2],
  },
  {
    id: "4",
    setDate: date.setDate(date.getDate() + 1),
    date: date.getDate(),
    day: days[day + 3],
  },
  {
    id: "5",
    setDate: date.setDate(date.getDate() + 1),
    date: date.getDate(),
    day: days[day + 4],
  },
  {
    id: "6",
    setDate: date.setDate(date.getDate() + 1),
    date: date.getDate(),
    day: days[day + 5],
  },
  {
    id: "7",
    setDate: date.setDate(date.getDate() + 1),
    date: date.getDate(),
    day: days[day + 6],
  },
];
export default ChooseTimeData;
