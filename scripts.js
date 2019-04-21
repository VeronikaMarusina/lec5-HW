//Створити об’єкт me з властивостями (використати змінні з першого завдання першої лекції)

const me = {
  firstName: 'Veronika',
  lastName: 'Marusina',
  sex: 'female',
  age: 24,
  dateOfBirth: '30.10.1994',
  cityLiving: 'Lviv',
  favouriteMovie: 'Lord of rings',
  hobby: 'handmade',
  lastCountryVisite: 'Norway', 
  univercityGraduated: 'Lviv National University named after I.Franko',
  favouriteColour: 'green',
  favouriteSeason: 'spring',
  favouriteMusic: 'pop',
  eyeColour: 'brown',
}

console.log(me);


//Згенерувати масив чисел (100 елементів), на проміжку від -100 до 100, 
//порахувати всі від’ємні та додатні, 
//вивести мінімальний та максимальний елемент. (використати методи перебору масивів)

let newArray = [];

function randomArray(from, to, array){
  for(i = 0; i < 100; i++){
    array[i] = (Math.random() * (to - from) + from).toFixed()
  }
  return array;
}

randomArray(-100,100,newArray);

console.log(newArray);

//від’ємні
const negativeArray = newArray.filter(function(item) {
  return item < 0;
 });

sumOfLess0 = negativeArray.length;

console.log('count of negative el', sumOfLess0);

//додатні
const positiveArray = newArray.filter(function(item) {
  return item > 0;
 });

sumOfGreater0 = positiveArray.length;

console.log('count of positive el',sumOfGreater0);

//мінімальний та максимальний елемент

let min = newArray[0]/1;
let max = newArray[0]/1;

newArray.forEach(function(item){
  if((item/1) < min){
    min = item/1;
  }
  return min;
});

console.log('min el', min);

newArray.forEach(function(item){
  if((item/1) > max){
    max = item/1;
  }
  return max;
});

console.log('mxax el', max);



//Згенерувати масив чисел, написати функцію, яка залишає унікальні елементи масиву. (використати метод push)

let newArray2 = [];

randomArray(50,90, newArray2);

console.log('array with duplicates', newArray2);

let uniqueArray = [];

newArray2.forEach(function(item){
  let duplicate = false;
  for(i = 0; i <= uniqueArray.length; i++){    
    if(uniqueArray[i] === item){
      duplicate = true;
    }
  }
  if (duplicate === false){
    uniqueArray.push(item)
  }
  return uniqueArray;
})

console.log('array with unique elements only', uniqueArray);