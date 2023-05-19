let a = [ [1,2,3,4, 5, 5.1,5.2,5.3,5.4] , [6,7,8,9,10,11,12] , [13,14,15,16,17] ]
let final  =  []
let maxLength = 0;
 let count = a.forEach((arr) => {
    if (arr.length > maxLength) {
      maxLength = arr.length;
    }
  });

// for(let i = 0 ; i < a.length ; i++)  {
//     let data = a[i]
//     console.log("11111111111111111",data)
//     // for(let j = 0 ; j < maxLength ; j++)  {
//     //     console.log("222222222222222222222" , data[j])
//     // }
// }
//commented
// for(let i = 0 ; i < a.length ; i++) {
//     const b = a[i]
//     if(b.length>0) {
//         console.log("111111111111111111111111111",b[i])
//         final.push(b[i])
//     }
// }
// for(let i = 0 ; i < a.length ; i++) {
//     const b = a[i]
//     if(b.length>0) {
//         console.log("111111111111111111111111111",b[i])
//         final.push(b[i])
//     }
// }


for(let i = 0 ; i < maxLength ; i++)  {
    let result = a.map((key)=>{
            const data =  key[i]
            final.push(data)
      })
    }
final.push(null,false,0,true)
final = final.filter(Boolean) // for uundefined 
  console.log("final",final)

// ===========================2====================================

const make = 'Ford';
const model = 'Mustang';
const car = { make, model };
console.log(car);
