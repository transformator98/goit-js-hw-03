const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];
console.table(friends); // вывод в консоль в виде таблицы
/*
 * Ищем друга по имени
 */
const getAllNames = function (allFriends) {
  const names = [];

  for (const friend of allFriends) {
    names.push(friend.name);
  }
  return names;
};
console.log(getAllNames(friends));

console.log(findFriendByName(friends, "Poly"));
console.log(findFriendByName(friends, "Chelsy"));
