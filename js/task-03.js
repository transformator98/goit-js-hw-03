/**
 * Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников
 * и возвращает имя самого продуктивного (который выполнил больше всех задач).
 * Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате
 * "имя":"кол-во задач".
 */
// const findBestEmployee = function (employees) {
//   let result = [];

//   for (const key in employees) {
//     result.push(employees[key]);
//   }
//   const add = Math.max(...result);

//   for (const key in employees) {
//     if (add === employees[key]) {
//       return key;
//     }
//   }
// };

const findBestEmployee = function (employees) {
  let moreTasks = 0;
  let name;
  for (const key in employees) {
    if (moreTasks < employees[key]) {
      moreTasks = employees[key];
      name = key;
    }
  }
  return name;

  // const keys = Object.keys(employees);
  // let moreTasks = 0;
  // let name;
  // for (const key of keys) {
  //   if (moreTasks < employees[key]) {
  //     moreTasks = employees[key];
  //     name = key;
  //   }
  // }
  // return name;

  // for (let i = 1; i < values.length; i += 1) {
  //   if (values[i] > moreTasks) {
  //     moreTasks = values[i];
  //   }
  // }
  // for (let key in employees) {
  //   if (moreTasks === employees[key]) {
  //     return key;
  //   }
  // }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
    test: 12,
  })
); // lorence
console.log(
  findBestEmployee({
    ann: 150,
    david: 315,
    helen: 1210,
    lorence: 199,
  }) //helen
);
console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  })
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  })
); // lux
