//Задание 5.
//
//
// 	Переписать консольное приложение из предыдущего юнита на классы.


// -- Начало родительского класса --
class AppliancesElectro {
    constructor(name, weight, power) {
        this.purpose = 'tool',
        this.name = name,
        this.weight = weight,
        this.power = power,
        this.starus = false;
    }

    consumPower() {
        if (this.starus === false) {
            console.log(`Electrical appliance ${this.name} isn't connected`)
        } else {
            console.log(`Power consumption ${this.name} is ${this.power} W`)
        }
    }

    getWeight(){
        console.log(`Weight ${this.name} is ${this.weight} g`)
    }

    connectOutlet(){
        if (this.starus === false) {
            this.starus = true;
        }else { this.starus = false}
        return this.starus
    }
}

// -- Конец родитеьского класса --

// создание потомка для Дрелей от родительского
class AppliancesElectroDrills extends AppliancesElectro {
    constructor(name, weight, power, speed) {
        super(name, weight, power);
        this.speedRotat = speed
    }

    getSpeed() {
        console.log(`Rotational speed ${this.name} is ${this.speedRotat} RPM`)
    }
}

// создание экземпляра прибора "дрель".
const drill = new AppliancesElectroDrills('Electric drill',650,1000, 400);

// создание экземпляра прибора "пила".
const saw = new AppliancesElectro('Electric saw', 2700, 4000);

console.log(drill);
console.log(saw);
drill.getSpeed();

drill.connectOutlet();
drill.consumPower();
saw.consumPower();


console.log(drill);
console.log(saw);