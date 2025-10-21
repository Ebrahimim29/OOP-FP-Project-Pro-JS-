//Pure Function(تابع خالص):
//تابعی که، خروجی فقط به ورودی بستگی داره. چیزی بیرون خودش رو تغییر نمی ده
const drive = (color,speed) => 
    `${color} car is driving at ${speed} Km/h`;

console.log(drive("yellow",220));

//--تابع ناخالص
let c = 30;
const addWithC = (a,b)=> a+b+c;

console.log(addWithC(10,20));

//Immutability(تغییر ناپذیری):
//یعنی وقتی با داده کار می کنی، اون رو تغییر ندی، بلکه یه کپی جدید می سازی
const numbers = [10,20,30];

const newNumbers = [...numbers,40,50];
console.log(newNumbers);
console.log(numbers);

//Higher-Order-Function(توابع مرتبه بالا):
//تابعی که یا یه تابع دیگه رو ورودی و پارامتر می گیره یا یه تابع جدید بر میگردونه
const doubled = numbers.map(x => x**2);
console.log(doubled);




