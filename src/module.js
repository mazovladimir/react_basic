class Arithmetic {
    constructor({x = 0,y = 0} = {}) {
        this.x = x;
        this.y = y;
    }

    sum(x ,y) {
        return x + y;
    }
}

export const arithmetic = new Arithmetic();
export const resultSum = arithmetic.sum;