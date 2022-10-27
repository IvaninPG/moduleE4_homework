//Задание 4:
//
// 	Реализовать следующее консольное приложение подобно примеру, который
// 	 разбирался в видео. Реализуйте его на прототипах.
//
// 	Определить иерархию электроприборов. Включить некоторые в розетку.
// 	 Посчитать потребляемую мощность.
//
// 	Таких приборов должно быть, как минимум, два (например, настольная
// 	 лампа и компьютер). Выбрав прибор, подумайте, какими свойствами он обладает


// -- Начало родительской функции --
function AppliancesElectro(name, weight, power){
    this.purpose = 'tool',
        this.name = name,
        this.weight = weight,
        this.power = power,
        this.starus = false;
}

// Метод показывающий потребляемую мощность при условии подключения прибора к розетке
AppliancesElectro.prototype.consumPower = function(){
    if (this.starus === false) {
        console.log(`Electrical appliance ${this.name} isn't connected`)
    }else { console.log(`Power consumption ${this.name} is ${this.power} W`)}
}

// Метод возвращающий массу с указанием имени
AppliancesElectro.prototype.getWeight = function(){
    console.log(`Weight ${this.name} is ${this.weight} g`)
}

// Метод включающий и отключающий прибор от розетки
AppliancesElectro.prototype.connectOutlet = function(){

    if (this.starus === false) {
        this.starus = true;
    }else { this.starus = false}
    return this.starus
}
//  -- Конец родительской функции --

// создание экземпляра прибора "дрель".
const drill = new AppliancesElectro('Electric drill',650,1000);

// создание собстенных свойст и метода для экземпляра прибора "дрель".
drill.speedRotat = 400
drill.getSpeed = function() {
    console.log(`Rotational speed ${this.name} is ${this.speedRotat} RPM`)
};

// создание экземпляра прибора "пила".
const saw = new AppliancesElectro('Electric saw', 2700, 4000);

console.log(drill);
console.log(saw);
console.log(drill.getSpeed());

console.log(drill.connectOutlet());
console.log(drill.consumPower());
console.log(saw.consumPower());


console.log(drill);
console.log(saw);