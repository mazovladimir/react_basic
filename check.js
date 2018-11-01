class Check {
    constructor(productCount = 0, sumCount = 0, productTitles = []) {
        this.productCount = productCount;
        this.sumCount = sumCount;
        this.productTitles = productTitles;
    }
    add(product) {
        if (!this.productTitles.includes(product.title) || this.productTitles.length >= 0) {
            this.sumCount += product.price * product.count;
            this.productCount += product.count;
            this.productTitles.push(product.title);
        }
    }
    remove(product) {
        if (this.productTitles.includes(product.title) || this.productTitles.length > 0) {
            let index = this.productTitles.indexOf(product.title);
            this.sumCount -= product.price * product.count;
            this.productCount -= product.count;
            this.productTitles.splice(index, 1);
        }
    }
}

export const myProduct = new Check();
console.log(myProduct);
myProduct.add({title: 'first', count: 2, price: 10});
console.log(myProduct);
myProduct.add({title: 'second', count: 2, price: 10});
console.log(myProduct);
myProduct.remove({title: 'second', count: 2, price: 10});
console.log(myProduct);
myProduct.remove({title: 'first', count: 2, price: 10});
console.log(myProduct);


