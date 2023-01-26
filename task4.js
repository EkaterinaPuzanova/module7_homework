// Электрические приборы
function ElectricalAppliance() {
    this.isConnect = false; // по умолчанию все приборы выключены

    this.connect = function() {
        this.isConnect = true;
    }
    this.unconnect = function() {
        this.isConnect = false;
    }
}

// Лампы
function DeskLamp(power, legLength) {
    this.power = power,
    this.legLength = legLength,

    this.changeLength = function(newLength) {
        this.legLength = newLength;
    }
}
DeskLamp.prototype = new ElectricalAppliance();

// Компьютеры
function Computer(power, ram) {
    this.power = power,
    this.ram = ram
}
Computer.prototype = new ElectricalAppliance();

// Экземпляры ламп
const DESKLAMP1 = new DeskLamp(60, 70);
const DESKLAMP2 = new DeskLamp(60, 80);
const DESKLAMP3 = new DeskLamp(70, 50);

// Экземпляры компьютеров
const COMPUTER1 = new Computer(600, 8);
const COMPUTER2 = new Computer(1000, 16);
const COMPUTER3 = new Computer(1400, 32);

const arrAppliances = [DESKLAMP1, DESKLAMP2, DESKLAMP3, COMPUTER1, COMPUTER2, COMPUTER3];

// Включаем нужные приборы в сеть
[DESKLAMP1, DESKLAMP3, COMPUTER2].forEach(element => {
    element.connect()
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