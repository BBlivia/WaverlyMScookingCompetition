let url = "https://www.themealdb.com/api/json/v1/1/search.php?s"

let itemButton = document.getElementById('items').addEventListener('click', mealHandler)
var i = 0

var meals = []
var data = {}
async function fetchData(){
  console.log('fetchData')
let response = await fetch(url)
    return response.json()
  }
 
 






function displayMeal(meals){
  console.log('displaymeal')
  //console.log(meals)
  document.querySelector('.naming').innerText = meals[i].strMeal
  document.querySelector('img').src = meals[i].strMealThumb
  document.getElementsByClassName('.instuctions').innerText = meals[i].strIngredient1
  i+=1                                                          
}

async function mealHandler(){
 if (meals.length ==0){
     data = await fetchData() 
      console.log(data)
      meals = data.meals
 } //console.log(meals)
  displayMeal(meals)
  //console.log(meals)



}


