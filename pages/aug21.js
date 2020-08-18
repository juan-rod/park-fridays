
let getMonthYear = () => {
  let date = new Date(); 
  return {
    month: date.getMonth() + 1,
    year: date.getFullYear()
  }
}
let { month,  year } = getMonthYear()
let daysInMonth = () => {
  return new Date(year, month, 0).getDate();
}
let firstDayInMonth = () => {
  return new Date(`${month}/01/${year}`).getDay()
}

let firstDay = firstDayInMonth()
let dayFirstLandsOn = (firstDay === 0) ? 7 : firstDay

let daysInMonthLength = daysInMonth()

for (let index = 0; index < daysInMonthLength + 1; index++) {
  if (index === 0) continue;
  let dateContainer = document.querySelector('.date-container')
  let spanElement = document.createElement('span')
  if (index === 1) {
    spanElement.classList.add("first")
    let start = dayFirstLandsOn + 1
    let end = dayFirstLandsOn + 2
    spanElement.style.gridColumn = `${start}/${end}`
  }
  spanElement.innerHTML = `${index.toString()}`
  dateContainer.appendChild(spanElement)
}
