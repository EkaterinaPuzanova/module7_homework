function hasKeyInObj(str, obj) {
    return obj.hasOwnProperty(str);
}


// ПРИМЕР
// let exampleProto = {
//     job: 'developer'
// }

// let exampleObj = Object.create(exampleProto);
// exampleObj.name = 'John';
// exampleObj.age = 30;

// console.log(hasKeyInObj('name', exampleObj));
// console.log(hasKeyInObj('job', exampleObj));
// console.log(hasKeyInObj('status', exampleObj));