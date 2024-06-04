const superHeroes = {
  Tony: 42,
  Peter: 18,
  Steve: 104,
  Bruce: 38,
  Thor: 1055,
};

const calcAvgBtn = document.getElementById("calc-avg-age-btn");
calcAvgBtn.addEventListener("click", () => calculateAverageAge(superHeroes));

function calculateAverageAge(superHeroes) {
  const superHeroesAsArray = Object.entries(superHeroes);
  const sum = superHeroesAsArray.reduce((sum, value) => {
    sum += value[1];
    return sum;
  }, 0);
  const avgAge = sum / superHeroesAsArray.length;
  console.log(avgAge);
  document.getElementById("output").textContent = `Average age of superHeroes is: ${avgAge}`;
}
