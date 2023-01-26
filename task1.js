function showOwnKey(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key);
        }
    }
}

// ПРИМЕР
// let exampleProto = {
//     job: 'developer'
// }

// let exampleObj = Object.create(exampleProto);
// exampleObj.name = 'John';
// exampleObj.age = 30;

// showOwnKey(exampleObj);