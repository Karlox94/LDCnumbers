import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    private _data: any;
    private _size: any[] = [];
    private _number: any[] = [];
    private _lcdNumber: any[] = [];

    ngOnInit() {
        // this.createLCDNumber(4, [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
        // this.insertLine(5, 3);
    }

    printLCDNumber(values: any) {
        this._size = [];
        this._number = [];
        this._lcdNumber = [];
        const couple: any[] = [];
        const couples = values.split(' ');
        for (let i = 0; i < couples.length; i++) {
            couple.push(couples[i].split(','));
            this._size.push(+couple[i][0]);
            for (let j = 0; j < couple[i][0].length; j++) {
                this._number.push(couple[i][1].split(''));
            }
        }
        for (let i = 0; i < this._number.length; i++) {
            for (let j = 0; j < this._number[i].length; j++) {
                this._number[i][j] = +this._number[i][j];
            }
        }
        console.log(couple);
        console.log(this._size, this._number);
        for (let i = 0; i < this._size.length; i++) {
            this.createLCDNumber(this._size[i], this._number[i]);
        }
    }

    createLCDNumber(size: any, number: any) {
        console.log(size, number);
        const middle: number = (((size * 2) + 3) / 2 - 0.5);
        // for (let s = 0; s < size.length; s++) {
            for (let n = 0; n < number.length; n++) {
                const digit: Array<any> = new Array((size * 2) + 3);
                switch (number[n]) {
                    case 1:
                        for (let i = 0; i < digit.length; i++) {
                            if (i === 0 || i === digit.length - 1) {
                                digit[i] = this.insertLine(1, size);
                            } else {
                                digit[i] = this.insertLine(2, size);
                            }
                        }
                        this._lcdNumber.push(digit);
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
                        this._lcdNumber.push(digit);
                        break;
                    case 3:
                        for (let i = 0; i < digit.length; i++) {
                            if (i === 0 || i === digit.length - 1 || i === middle) {
                                digit[i] = this.insertLine(5, size);
                            } else if (i < middle || i > middle) {
                                digit[i] = this.insertLine(3, size);
                            }
                        }
                        this._lcdNumber.push(digit);
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
                        this._lcdNumber.push(digit);
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
                        this._lcdNumber.push(digit);
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
                        this._lcdNumber.push(digit);
                        break;
                    case 7:
                        for (let i = 0; i < digit.length; i++) {
                            if (i === 0) {
                                digit[i] = this.insertLine(5, size);
                            } else if (i === digit.length - 1) {
                                digit[i] = this.insertLine(1, size);
                            } else {
                                digit[i] = this.insertLine(3, size);
                            }
                        }
                        this._lcdNumber.push(digit);
                        break;
                    case 8:
                        for (let i = 0; i < digit.length; i++) {
                            if (i === 0 || i === digit.length - 1 || i === middle) {
                                digit[i] = this.insertLine(5, size);
                            } else if (i < middle || i > middle) {
                                digit[i] = this.insertLine(4, size);
                            }
                        }
                        this._lcdNumber.push(digit);
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
                        this._lcdNumber.push(digit);
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
                        this._lcdNumber.push(digit);
                        break;
                    default:
                        break;
                }
            }
        // }
    }

    insertLine(type: number, size: number) {
        const line: Array<any> = new Array(size + 2);
        switch (type) {
            case 1:
                for (let i = 0; i < line.length; i++) {
                    line[i] = '&nbsp';
                }
                break;
            case 2:
                for (let i = 0; i < line.length; i++) {
                    if (i === 0) {
                        line[i] = '|';
                    } else {
                        line[i] = '&nbsp';
                    }
                }
                break;
            case 3:
                for (let i = 0; i < line.length; i++) {
                    if (i === line.length - 1) {
                        line[i] = '|';
                    } else {
                        line[i] = '&nbsp';
                    }
                }
                break;
            case 4:
                for (let i = 0; i < line.length; i++) {
                    if (i === 0 || i === line.length - 1) {
                        line[i] = '|';
                    } else {
                        line[i] = '&nbsp';
                    }
                }
                break;
            case 5:
                for (let i = 0; i < line.length; i++) {
                    if (i === 0 || i === line.length - 1) {
                        line[i] = '&nbsp';
                    } else {
                        line[i] = '-';
                    }
                }
                break;
            default:
                break;
        }
        return line;
    }

}
