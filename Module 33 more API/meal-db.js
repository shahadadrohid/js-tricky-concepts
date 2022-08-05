const searchFood = () => {
    const searchField = document.getElementById('search-container');
    const searchFieldText = searchField.value;
    searchField.value = '';
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFieldText}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayData(data.meals))
}

const displayData = meals => {
    // console.log(meals)
    const searchResult = document.getElementById('search-result')
    meals.forEach(food => {
        // console.log(food)
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadDetails('${food.idMeal}')" class="card h-100">
            <img width="200px" src="${food.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${food.strMeal}</h5>
                <p class="card-text">${food.strInstructions.slice(0, 250)}</p>
            </div>
        </div>`;
        searchResult.appendChild(div)
    })
}
const loadDetails = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]))
}

const displayMealDetail = meal => {
    // console.log(meal)
    const mealDetails = document.getElementById('meal-details');
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 400)}</p>
        </div>
    `;
    mealDetails.appendChild(div)
}