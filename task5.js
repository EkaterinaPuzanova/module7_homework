// Электрические приборы
class ElectricalAppliance {
    constructor(power) {
        this.power = power;
        this.isConnect = false; // по умолчанию все приборы выключены
    }

    static connect(electricalAppliance) {
        electricalAppliance.isConnect = true;
    }
    static unconnect(electricalAppliance) {
        electricalAppliance.isConnect = false;
    }
}

// Лампы
class DeskLamp extends ElectricalAppliance {
    constructor(legLength, power) {
        super(power);
        this.legLength = legLength;
    }

    changeLength(newLength) {
        this.legLength = newLength;
    }

}

// Компьютеры
class Computer extends ElectricalAppliance {
    constructor(ram, power) {
        super(power);
        this.ram = ram;
    }
}

// Экземпляры ламп
const DESKLAMP1 = new DeskLamp(70, 60);
const DESKLAMP2 = new DeskLamp(80, 60);
const DESKLAMP3 = new DeskLamp(50, 70);

// Экземпляры компьютеров
const COMPUTER1 = new Computer(8, 600);
const COMPUTER2 = new Computer(16, 1000);
const COMPUTER3 = new Computer(32, 1400);

const arrAppliances = [DESKLAMP1, DESKLAMP2, DESKLAMP3, COMPUTER1, COMPUTER2, COMPUTER3];

// Включаем нужные приборы в сеть
[DESKLAMP1, DESKLAMP3, COMPUTER2].forEach(element => {
    ElectricalAppliance.connect(element)
});

// Вычисляем потребляемую мощность
function getSumPower(arr) {
    let result = 0;
    arr.forEach(element => {
        if (element.isConnect === true) {
            result += element.power
        }
    });
    console.log(result + ' Вт');
}

getSumPower(arrAppliances);