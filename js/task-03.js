/**
 * Напиши функцию findBestEmployee(employees), которая принимает объект сотрудников
 * и возвращает имя самого продуктивного (который выполнил больше всех задач).
 * Сотрудники и кол-во выполненых задач содержатся как свойства объекта в формате
 * "имя":"кол-во задач".
 */
// const findBestEmployee = function (employees) {
//   // console.table(employees);
//   let result = 0;

//   const keys = Object.keys(employees);
//   for (const key of keys) {
//     // console.log(employees[key]);
//     if (employees[key] > result) {
//       result = employees[key];
//     }
//   }
//   return result;
// };
const findBestEmployee = function (employees) {
  const values = Object.values(employees);
  let moreTasks = values[0];
  for (let i = 1; i < values.length; i += 1) {
    if (values[i] > moreTasks) {
      moreTasks = values[i];
    }
  }
  for (let key in employees) {
    if (moreTasks === employees[key]) {
      return key;
    }
  }
};
// const findBestEmployee = function (employees) {
//   const keys = Object.keys(employees);
//   const add = [];
//   console.log(keys);
//   for (var key of keys) {
//   }
//   const summ = Math.max(employees[key]);
//   console.log(summ);

//   console.log(employees[summ]);
// };

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
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
