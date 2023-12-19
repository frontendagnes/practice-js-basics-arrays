const years = [1980, 1934, 2002, 2019];
const passedYears = [];

function howYears(year) {
  years.map((item) => {
    let el = year - item;
    passedYears.push(el);
  });
  console.log(passedYears);
}

howYears(2023);
