const color = require('cli-color');
const prompt = require('prompt-sync')();

const planta: number[][] = [
    [22, 22, 22, 22, 22, 33, 11, 22, 22, 22, 22, 22, 22, 11, 11, 22, 22, 22, 22, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 88, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 22, 22, 88, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 11],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
]

const planta1: number[][] = [
    [22, 22, 22, 22, 33, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 88, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 22, 88, 11, 22],
    [22, 11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [11, 11, 11, 11, 88, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
]

const planta2: number[][] = [
    [22, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 33, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 88, 22, 22, 88, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 22, 22, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 11, 11, 22, 22, 11, 11, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 11, 11, 22, 22, 11, 11, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 11, 11, 22, 22, 11, 11, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 11, 11, 22, 22, 11, 11, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 11, 11, 22, 22, 11, 11, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 22, 22, 22, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 22, 22, 22, 11, 22],
    [22, 11, 22, 22, 22, 22, 22, 11, 11, 22, 22, 11, 11, 22, 22, 22, 22, 22, 11, 22],
    [22, 11, 88, 22, 22, 11, 11, 11, 11, 22, 22, 11, 11, 88, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 88, 11, 11, 11, 22, 22, 11, 11, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 11, 88, 22, 22, 11, 11, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 22, 22, 11, 11, 11, 11, 22, 22, 11, 11, 11, 11, 22, 22, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 88, 22],
    [22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22]
]

const planta3: number[][] = [
    [22, 11, 11, 11, 11, 33, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 55, 55, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 11, 11, 11, 11, 11, 22],
    [22, 11, 11, 11, 11, 88, 11, 11, 11, 11, 22]
]


const colorir = (text: number): string => {
    if (text == 22) {
        return color.red.bgRed('  ');
    } else if (text == 11) {
        return color.blue.bgBlue('  ');
    } else if (text == 33) {
        return color.green.bgGreen('  ');
    } else {
        return color.yellow.bgYellow('  ');
    }
}

var x: number = 0;
var y: number = 5;
var passos: number = 0;
var encontrado: boolean = false;
var encontrado1: boolean = false;
var encontrado2: boolean = false;



const mostrarPlanta = (planta_atual: number[][]): void => {
    console.clear();
    for (let i of planta_atual) {
        let linha: any[] = [];
        for (let e of i) {
            linha.push(colorir(e))
        }
        console.log(linha.toString().replaceAll(',', ''))
    }
    console.log('Você deu', String(passos), 'passos.');
}


const descer = (planta:number[][]): void => {
    if (x + 1 < planta.length && planta[x + 1][y] !== 22) {
        planta[x][y] = 11;
        x = x + 1;
        planta[x][y] = 33;
        passos++;
    }
}


const subir = (planta:number[][]): void => {
    if (x - 1 >= 0 && planta[x - 1][y] !== 22) {
        planta[x][y] = 11;
        x = x - 1;
        planta[x][y] = 33;
        passos++;
    }
}

const esquerda = (planta:number[][]): void => {
    if (y - 1 >= 0 && planta[x][y - 1] !== 22) {
        planta[x][y] = 11;
        y = y - 1;
        planta[x][y] = 33;
        passos++;
    }
}

const direita = (planta:number[][]): void => {
    if (y + 1 < planta[0].length && planta[x][y + 1] !== 22) {
        planta[x][y] = 11;
        y = y + 1;
        planta[x][y] = 33;
        passos++;
    }
}


const easter = (): void => {
    for (var linha of planta) {
        if (linha.includes(88)) {
            encontrado = true;
            break
        } else {
            encontrado = false;
        }
    }
    for (var linha of planta1) {
        if (linha.includes(88)) {
            encontrado1 = true;
            break
        } else {
            encontrado1 = false;
        }
    }
    if (encontrado == false && encontrado1 == false) {
        planta1[16][18] = 11;
        planta1[17][18] = 11;
    }
}

const easter1 = (): void => {
    for (var linha of planta) {
        if (linha.includes(88)) {
            encontrado1 = true;
            break
        } else {
            encontrado1 = false;
        }
    }
    for (var linha of planta1) {
        if (linha.includes(88)) {
            encontrado1 = true;
            break
        } else {
            encontrado1 = false;
        }
    }
    for (var linha of planta2) {
        if (linha.includes(88)) {
            encontrado1 = true;
            break
        } else {
            encontrado1 = false;
        }
    }
    if (encontrado == false && encontrado1 == false && encontrado2 == false) {
        planta2[17][1] = 11;
    }
}

const verificaProduto = (): boolean => {
    for (var linha of planta) {
        for (var item of linha) {
            if (item == 88) {
                return false
            }
        }
    }
    for (var linha of planta1) {
        for (var item of linha) {
            if (item == 88) {
                return false
            }
        }
    }
    for (var linha of planta2) {
        for (var item of linha) {
            if (item == 88) {
                return false
            }
        }
    }
    for (var linha of planta3) {
        for (var item of linha) {
            if (item == 88) {
                return false
            }
        }
    }
    return true
}

const verificaPlanata = (planta_atual:number[][]): boolean =>{
    if (planta_atual == planta){
        return true
    }
    else{
        return false
    }
}
const start = (planta_atual:number[][]) => {
    mostrarPlanta(planta_atual);
    easter();
    easter1();
    let escolha: string = prompt('Digite uma direção (w, a, s, d) ou (q) para sair: ');
    if (escolha.toUpperCase() == 'Q' || verificaProduto()) {
        return
    } else if (escolha.toUpperCase() == 'W') {
        subir(planta_atual)
    } else if (escolha.toUpperCase() == 'A') {
        esquerda(planta_atual);
    } else if (escolha.toUpperCase() == 'S') {
        descer(planta_atual);
    } else if (escolha.toUpperCase() == 'D') {
        direita(planta_atual);
    } 
    if (x == 8 && y == 19){
        planta1[15][0] = 11;
        planta_atual = planta1;
        x = 0;
        y = 4;
    } else if (x == 15 && y == 0) {
        planta1[0][4] = 33;
        planta_atual = planta;
        x = 8;
        y = 19;
    } else if (x == 17 && y == 18) {
        planta2[0][1] = 11;
        planta_atual = planta2;
        x = 0;
        y = 18;
    } else if (x == 0 && y == 1) {
        planta2[0][18] = 33;
        planta_atual = planta1;
        x = 17;
        y = 18;
    } else if (x == 17 && y == 1) {
        planta_atual = planta3;
        x = 0;
        y = 5;
    }
    start(planta_atual);
}

start(planta);