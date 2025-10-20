// کلاس Product نماینده یک محصول است
class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    //متد نمونه ای برای نمایش اطلاعات محصول
    display(){
        return `محصول: ${this.name} | قیمت: ${this.price} تومان`;
    }
}

const p1 = new Product("لپ تاپ",1000000);
const p2 = new Product("موبایل",5000000);
const p3 = new Product("هدفون", 3000000);

//آرایه ای از محصولات--Composition
const products = [p1,p2,p3];

//برنامه نویسی تابعی -- FP
//Pure Function : افزایش قیمت هر محصول بدون تغییر شی اصلی (immutability)
function increasePrice(product,percent){

    //شی جدید برمیگرداند (تغییر ناپذیری)
    let newPrice = product.price + product.price * (percent/100);
    return new Product(product.name, newPrice); //خروجی یک آبجکت
}

//Higher-Order Function(تابع مرتبه بالا)
function mapProducts(products, fn){
    return products.map(fn); //خروجی یک آرایه است
}

//Pure Function: فیلتر محصولات گرانتر از مقدار داده شده
function filterExpensive(products, minPrice){
    return products.filter(p => p.price > minPrice); //خروجی یک آرایه است
}

//Pure Function: جمع قیمت محصولات
function totalPrice(products) {
    return products.reduce((sum,p) => sum + p.price , 0); //خروجی یک مقدار است
}
// part 252