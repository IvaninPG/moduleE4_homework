//Задание 1:
//
// 	Написать, функцию, которая принимает в качестве аргумента объект и выводит
// 	 в консоль все ключи и значения только собственных свойств. Данная функция
// 	 не должна возвращать значение.


function objOwnProp (obj) {
    for (let key in obj) {

        if (obj.hasOwnProperty(key)) {

            console.log(`Ключь - ${key}; Значение - ${obj[key]}`);
        }
    }
}

const people = {
    country: 'Rassia'
}

const student = Object.create(people);

student.name = 'Pavel';
student.ags = 22;
student.city = 'Moscow'


objOwnProp(student)