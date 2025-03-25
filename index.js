// Задача 1: Преобразование списка товаров
// У вас есть массив товаров, где каждый товар представлен объектом с полями name,
// price, и discount. Необходимо создать новый массив, где для каждого товара будет
// добавлена новая переменная finalPrice, которая рассчитывается как price -
// discount. Результат должен быть массивом, который включает name и finalPrice
// для каждого товара.

// ❌ //

// ----------------------------------------------------- //

// Задача 2: Преобразование оценок студентов
// У вас есть массив объектов студентов, где каждый объект включает поля name и
// grades (массив оценок). Нужно создать новый массив, который будет содержать
// только имя студента и среднюю оценку по всем предметам.

// const students = [
//   { name: "Alice", grades: [85, 90, 92] },
//   { name: "Bob", grades: [78, 83, 88] },
//   { name: "Charlie", grades: [95, 97, 99] },
// ];

// const transformedStudents = students.map((student) => ({
//   name: student.name,
//   averageGrade:
//     student.grades.reduce((sum, grade) => sum + grade, 0) /
//     student.grades.length,
// }));

// console.log(transformedStudents);

// ----------------------------------------------------- //

// Задача 3: Пересчет цен в другую валюту
// У тебя есть массив товаров с ценами в долларах. Нужно преобразовать массив,
// пересчитав цены в евро (1 USD = 0.93 EUR).

// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Smartphone", price: 500 },
//   { name: "Tablet", price: 300 },
// ];

// const exchangeRate = 0.93;

// const convertedProducts = products.map((product) => ({
//   name: product.name,
//   priceInEuro: (product.price * exchangeRate).toFixed(2),
// }));

// console.log(convertedProducts);

// ----------------------------------------------------- //

// Задача 4:
// Напиши стрелочную функцию getUserNames(users), которая будет принимать один
// параметр users — массив объектов пользователей. Функция должна возвращать
// массив имен всех пользователей (свойство name) из массива users.

// const getUserNames = (users) => users.map((user) => user.name);

// const users = [
//   { name: "Mexa", age: 17 },
//   { name: "SindromMexi", age: 99 },
//   { name: "David", age: 43 },
// ];

// console.log(getUserNames(users));

// ----------------------------------------------------- //

// Задача 5:
// Напиши стрелочную функцию getUsersWithFriend(users, friendName), которая
// будет принимать два параметра:
// 1. Первый параметр users — массив объектов пользователей.
// 2. Второй параметр friendName — имя друга для поиска.
// Функция должна возвращать массив всех пользователей из массива users, у которых
// есть друг с именем friendName. Друзья каждого пользователя хранятся в свойстве
// friends. Если пользователей с таким другом нет, то функция должна вернуть пустой
// массив.
// Советы:
// ● Метод filter() можно использовать для создания нового массива с
// элементами, которые удовлетворяют определенному условию.
// ● Используй метод includes() для проверки, содержит ли массив friends имя
// друга friendName.

// const getUsersWithFriend = (users, friendName) =>
//   users.reduce((acc, user) => {
//     if (user.friends.includes(friendName)) {
//       acc.push(user);
//     }
//     return acc;
//   }, []);

// const users = [
//   { name: "Mexa", friends: ["Maga", "SindromMexi"] },
//   { name: "Maga", friends: ["Mexa", "Kukla"] },
//   { name: "SindromMexi", friends: ["Novruz"] },
//   { name: "Kukla", friends: ["Maga", "Novruz"] },
// ];

// console.log(getUsersWithFriend(users, "Maga"));

// console.log(getUsersWithFriend(users, "Novruz"));

// console.log(getUsersWithFriend(users, "Gus"));

// ----------------------------------------------------- //

// Задача 6: Фильтрация доступных товаров
// У вас есть массив товаров, каждый из которых имеет свойства: name, price, inStock
// (наличие на складе). Напишите функцию, которая возвращает все товары, которые
// есть в наличии и стоят меньше 50.

// const filterAvailableProducts = (products) =>
//   products.filter((product) => product.inStock && product.price < 50);

// const products = [
//   { name: "Camera", price: 30, inStock: true },
//   { name: "Pen", price: 5, inStock: true },
//   { name: "Phone", price: 80, inStock: true },
//   { name: "Pencil", price: 2, inStock: false },
//   { name: "Eraser", price: 10, inStock: true },
// ];

// console.log(filterAvailableProducts(products));
