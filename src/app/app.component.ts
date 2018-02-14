import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {

    private _data: any;
    private _size: Array<any>;
    private _number: Array<any>;
    private _lcdNumber: Array<any>;
    private _horizontal = '-';
    private _vertical = '|';
    private _whiteSpace = '&nbsp';

    printLCDNumber(values: any) {
        this._size = [];
        this._number = [];
        this._lcdNumber = [];
        const couple: Array<any> = new Array;
        let format = true;
        if (values !== '') {
            const couples = values.trim().split(' ');
            for (let i = 0; i < couples.length; i++) {
                couple.push(couples[i].split(','));
                this._size.push(+couple[i][0]);
                for (let j = 0; j < couple[i][0].length; j++) {
                    if (couple[i].length === 2) {
                        this._number.push(couple[i][1].split(''));
                    } else {
                        format = false;
                        alert('El formato de la entrada es incorrecto.');
                        break;
                    }
                }
                if (!format) {
                    break;
                }
            }
            for (let i = 0; i < this._number.length; i++) {
                for (let j = 0; j < this._number[i].length; j++) {
                    this._number[i][j] = +this._number[i][j];
                }
            }
            console.log(format);


            if (format) {
                if (this.validateFormat(values)) {
                    if (this.validateRange()) {
                        for (let i = 0; i < this._size.length; i++) {
                            this.createLCDNumber(this._size[i], this._number[i]);
                        }
                    } else {
                        alert('El tamaño esta fuera del rango (1 a 10).');
                    }
                } else {
                    alert('El formato de la entrada es incorrecto.');
                }
            }
        } else {
            alert('Ingrese al menos una pareja (tamaño, número)');
        }
    }

    createLCDNumber(size: any, number: any) {
        console.log(size, number);
        const middle: number = (((size * 2) + 3) / 2 - 0.5);
        const temp: Array<any> = new Array;
        for (let n = 0; n < number.length; n++) {
            const digit: Array<any> = new Array((size * 2) + 3);
            switch (number[n]) {
                case 1:
                    for (let i = 0; i < digit.length; i++) {
                        if (i === 0 || i === digit.length - 1 || i === middle) {
                            digit[i] = this.insertLine(1, size);
                        } else {
                            digit[i] = this.insertLine(3, size);
                        }
                    }
                    temp.push(digit);
                    break;
                case 2:
                    for (let i = 0; i < digit.length; i++) {
                        if (i === 0 || i === digit.length - 1 || i === middle) {
                            digit[i] = this.insertLine(5, size);
                        } else if (i < middle) {
                            digit[i] = this.insertLine(3, size);
                        } else {
                            digit[i] = this.insertLine(2, size);
                        }
                    }
                    temp.push(digit);
                    break;
                case 3:
                    for (let i = 0; i < digit.length; i++) {
                        if (i === 0 || i === digit.length - 1 || i === middle) {
                            digit[i] = this.insertLine(5, size);
                        } else if (i < middle || i > middle) {
                            digit[i] = this.insertLine(3, size);
                        }
                    }
                    temp.push(digit);
                    break;
                case 4:
                    for (let i = 0; i < digit.length; i++) {
                        if (i === 0 || i === digit.length - 1) {
                            digit[i] = this.insertLine(1, size);
                        } else if (i === middle) {
                            digit[i] = this.insertLine(5, size);
                        } else if (i < middle) {
                            digit[i] = this.insertLine(4, size);
                        } else {
                            digit[i] = this.insertLine(3, size);
                        }
                    }
                    temp.push(digit);
                    break;
                case 5:
                    for (let i = 0; i < digit.length; i++) {
                        if (i === 0 || i === digit.length - 1 || i === middle) {
                            digit[i] = this.insertLine(5, size);
                        } else if (i < middle) {
                            digit[i] = this.insertLine(2, size);
                        } else {
                            digit[i] = this.insertLine(3, size);
                        }
                    }
                    temp.push(digit);
                    break;
                case 6:
                    for (let i = 0; i < digit.length; i++) {
                        if (i === 0 || i === digit.length - 1 || i === middle) {
                            digit[i] = this.insertLine(5, size);
                        } else if (i < middle) {
                            digit[i] = this.insertLine(2, size);
                        } else {
                            digit[i] = this.insertLine(4, size);
                        }
                    }
                    temp.push(digit);
                    break;
                case 7:
                    for (let i = 0; i < digit.length; i++) {
                        if (i === 0) {
                            digit[i] = this.insertLine(5, size);
                        } else if (i === digit.length - 1 || i === middle) {
                            digit[i] = this.insertLine(1, size);
                        } else {
                            digit[i] = this.insertLine(3, size);
                        }
                    }
                    temp.push(digit);
                    break;
                case 8:
                    for (let i = 0; i < digit.length; i++) {
                        if (i === 0 || i === digit.length - 1 || i === middle) {
                            digit[i] = this.insertLine(5, size);
                        } else if (i < middle || i > middle) {
                            digit[i] = this.insertLine(4, size);
                        }
                    }
                    temp.push(digit);
                    break;
                case 9:
                    for (let i = 0; i < digit.length; i++) {
                        if (i === 0 || i === digit.length - 1 || i === middle) {
                            digit[i] = this.insertLine(5, size);
                        } else if (i < middle) {
                            digit[i] = this.insertLine(4, size);
                        } else {
                            digit[i] = this.insertLine(3, size);
                        }
                    }
                    temp.push(digit);
                    break;
                case 0:
                    for (let i = 0; i < digit.length; i++) {
                        if (i === 0 || i === digit.length - 1) {
                            digit[i] = this.insertLine(5, size);
                        } else if (i === middle) {
                            digit[i] = this.insertLine(1, size);
                        } else if (i < middle || i > middle) {
                            digit[i] = this.insertLine(4, size);
                        }
                    }
                    temp.push(digit);
                    break;
                default:
                    break;
            }
        }
        this._lcdNumber.push(temp);
        console.log('lcd', this._lcdNumber);
    }

    insertLine(type: number, size: number) {
        const line: Array<any> = new Array(size + 3);
        switch (type) {
            case 1:
                for (let i = 0; i < line.length; i++) {
                    line[i] = this._whiteSpace;
                }
                break;
            case 2:
                for (let i = 0; i < line.length; i++) {
                    if (i === line.length - 1) {
                        line[i] = this._whiteSpace;
                    } else if (i === 0) {
                        line[i] = this._vertical;
                    } else {
                        line[i] = this._whiteSpace;
                    }
                }
                break;
            case 3:
                for (let i = 0; i < line.length; i++) {
                    if (i === line.length - 1) {
                        line[i] = this._whiteSpace;
                    } else if (i === line.length - 2) {
                        line[i] = this._vertical;
                    } else {
                        line[i] = this._whiteSpace;
                    }
                }
                break;
            case 4:
                for (let i = 0; i < line.length; i++) {
                    if (i === line.length - 1) {
                        line[i] = this._whiteSpace;
                    } else if (i === 0 || i === line.length - 2) {
                        line[i] = this._vertical;
                    } else {
                        line[i] = this._whiteSpace;
                    }
                }
                break;
            case 5:
                for (let i = 0; i < line.length; i++) {
                    if (i === line.length - 1) {
                        line[i] = this._whiteSpace;
                    } else if (i === 0 || i === line.length - 2) {
                        line[i] = this._whiteSpace;
                    } else {
                        line[i] = this._horizontal;
                    }
                }
                break;
            default:
                break;
        }
        return line;
    }

    validateRange() {
        let count = 0;
        for (let i = 0; i < this._size.length; i++) {
            if (this._size[i] >= 1 && this._size[i] <= 10) {
                count++;
            }
        }

        if (count === this._size.length) {
            return true;
        } else {
            return false;
        }
    }

    validateFormat(values: any) {
        const whiteSpace = values.split(' ');
        console.log(whiteSpace);
        const comas: Array<any> = new Array;
        for (let i = 0; i < whiteSpace.length; i++) {
            comas.push(whiteSpace[i].split(','));
            if (comas[i].length > 2) {
                return false;
            } else {
                return true;
            }
        }
    }

}
