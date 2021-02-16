const companies = [{
    name: "Company One",
    category: "Finance",
    start: 1981,
    end: 2004
  },
  {
    name: "Company Two",
    category: "Retail",
    start: 1992,
    end: 2008
  },
  {
    name: "Company Three",
    category: "Auto",
    start: 1999,
    end: 2007
  },
  {
    name: "Company Four",
    category: "Retail",
    start: 1989,
    end: 2010
  },
  {
    name: "rahul",
    category: "Technology",
    start: 2009,
    end: 2014
  },
  {
    name: "Company Six",
    category: "Finance",
    start: 1987,
    end: 2010
  },
  {
    name: "Company Seven",
    category: "Auto",
    start: 1986,
    end: 1996
  },
  {
    name: "Company Eight",
    category: "Technology",
    start: 2011,
    end: 2016
  },
  {
    name: "Company Nine",
    category: "Retail",
    start: 1981,
    end: 1989
  }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// const x= function check(e){
//   return e.name.includes('Company One');
// }
let anyVar = companies.filter(item => {
  return item.name.includes('rahul');
});

console.log(anyVar);

// 1) for loop

// for(let i=0; i<companies.length; i++){
//     console.log(companies[i]);
// }


// 2) for-each loop


// companies.forEach(function(iterator){
//     console.log(iterator);
// })

// 3) Get age greater then 21

// let canDrink = [];
// for(let i = 0 ; i<ages.length; i++){
//     if(ages[i]>=21){
//         canDrink.push(ages[i])
//     }
// }

//console.log("ages greater then 21 is" + canDrink);

// 4) filter method

// const canDrink = ages.filter(function(ages){
//     if(ages >= 21){
//         return true;
//     }
// })

// 5) Using ES6
// const canDrink = ages.filter(age => age >= 21);

// console.log("ages greater then 21 is " + canDrink);

//Filter the retail compamies

// const retailCompanies = companies.filter(function(company){
//     if(company.category === 'Retail'){
//         return true;
//     }
// });

// const retailCompanies = companies.filter(company => (company.category === 'Retail')

// console.log(retailCompanies);
