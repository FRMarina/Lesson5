// Провести рефакторинг задачи так, чтобы код (toString().padStart(2, "0")) не повторялся, вынести его в отдельную функцию и использовать
// Саму задачу обернуть в отдельную функцию getDate, которая принимает в качестве параметра произвольную дату в формате '2026-10-22T22:10:15'
//* Проверить валидна ли дата в переданном параметре
const strPad = (obj: number): string => obj.toString().padStart(2, "0");
const wrongFormatText = "Неверный формат";
function getDate(str: string | Date) {
  const dateObj: Date = new Date(str);
  if (Number.isNaN(dateObj.getTime())) {
    throw new Error(wrongFormatText);
  }

  const day = strPad(dateObj.getDate());
  const month = strPad(dateObj.getMonth() + 1);
  const year = dateObj.getFullYear();

  const hours = strPad(dateObj.getHours());
  const minutes = strPad(dateObj.getMinutes());
  const seconds = strPad(dateObj.getSeconds());

  const formattedDate = `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  return formattedDate;
}

console.log(getDate("2026-10-22T22:10:15"));
console.log(getDate("rfrf"));
console.log(getDate(""));
console.log(getDate("12345"));
console.log(getDate("2026-13-45T99:99:99"));
