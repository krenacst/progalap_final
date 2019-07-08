/*
1. feladat

//number        string      boolean         object                          tömb                mátrix
11234556        'baba'      true         {kor: 35, name: 'Tibi'}        [1, 2, 3, 4, 5]  [[1, 2, 3], [4, 5, 6]]
                            false

2. feladat
//Paraméterátadás: A primitív adattípusok (szám, logikai érték) érték szerint adódnak át. Az objektumok
//(ez által a tömbök is ) referencia szerint adódnak át. Az objektumokban tárolt értékekre az objektum nevével és
//a benne tárolt érték megnevezésével hivatkozunk. A tömbök elemeire a tömb nevével és az elem indexével
//hivatkozunk. A tömb elemeinek számozása 0-val kezdődik.
//példa: let tomb = [24, 45, 56] A 45-öt úgy kapjuk meg a tömbből, hogy tomb[1]-el hivatkozunk rá.
//          obj = {name: 'Tibi', age: 35} A korra úgy hivatkozunk, hogy obj.age
*/
/*
3. feladat
/* const sumArray = (tomb) => {
    let sum = 0;
for (let i = 0; i < tomb.length; i++){
sum += tomb[i];

}
return sum;
}
*/
/*
4. feladat
/*
const countE = (e, tomb) => {
    let c = 0;
    for (let i = 0; i < tomb.length; i++) {
        if (e === tomb[i]) {
            c++;
        }
    }
    return c;
}
*/
/*
5. feladat
/*
let date = 10;
switch (date) {
    case 8: console.log('Ma még csak 8-a van.')
        break;
        case 9: console.log('Ma már 9-e.')
            break;
            case 10: console.log('Ma végre írhatod a szakaszzárót!')
                break;
default: console.log('Ez csak akkor olvasható, ha a date sem 8, sem 9, sem 10.)
break;
}
*/
/*
6. feladat
*/
/*
const metszet = (arr1, arr2) => {
  arr1 = [1, 2, 3, 4, 5, 6, 9];
  arr2 = [3, 5, 9, 10, 11, 13];
  var metsz = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] = arr2[i]) {
      metsz.push(arr1[i]);
    }

    return metsz;
  }
};
console.log(metszet());

7. feladat

const add = (a, b) => {
  return a + b;
};
const sub = (a, b) => {
  return a - b;
};
const mul = (a, b) => {
  return a * b;
};
const dev = (a, b) => {
  return a / b;
};

const operation = (a, b, t) => {
  return t(a, b);
};
let a = 4;
let b = 6;
console.log(operation(a, b, add));

8. feladat
*/
const g2 = (a, b) => {
  let arr = new Array(a);
  for (let i = 0; i < a; i++) {
    arr[i] = new Array(b);
  }
  return arr;
};
var arr = g2(10, 10);
// console.log(arr);

const fill = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      arr[i][j] = Math.pow(2, 5);
    }
  }
  return arr;
};
console.log(fill(arr));
