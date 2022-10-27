//Задание 2:
//
// 	Написать функцию, которая принимает в качестве аргументов строку и объект,
// 	 а затем проверяет есть ли у переданного объекта свойство с данным именем.
// 	 Функция должна возвращать true или false.


function checkProp (str, obj) {
    console.log(str in obj)
}

const people = {
    country: 'Rassia'
}

const student = Object.create(people);

student.name = 'Pavel';
student.ags = 22;
student.city = 'Moscow'


checkProp('fasdf', student)