// function xinChao() {
//    var chao = "Chao ban";
//    alert(chao);
// }

// xinChao();

// alert(chao);

// var chao = "Chao ban";

// function xinChao() {
//     alert(chao);
// }

// xinChao();

// alert(chao);

// var name_array = ['this','is','a','test','only'];
// console.log(name_array[0]);
// console.log(name_array[1]);
// console.log(name_array[4]);
// console.log(name_array[2]);
// console.log(name_array[3]);

// var san_pham = [
//     ['sanpham1', '1000VND'],
//     ['sanpham2', '1000VND'],
//     ['sanpham3', '1000VND'],
// ];

// console.log(san_pham[0][0]);

// var mang = [1,2,3,4,5];
// console.log(mang.length);
// mang.length = 2;
// console.log(mang);
// mang.length = 0;
// console.log(mang);

// var mang = [1,2,3,4];
// console.log(mang.join());
// console.log(mang.join(' '));

// var mang = [1,2,3,4];
// for (var i = 0; i < mang.length; i++) {
//     console.log('index '+ i + '=' + mang[i]);
// }

// var mang = [1,2,3,4];
// mang.forEach(element => {
//     console.log(element);
// });

// var name = {};
// var employee = {name: 'nguyen van a', job: 'designer', birthday: '11/11/2000'};

// var nimi = new Object();
// nimi.key = 'value';
// nimi.attribute = {color: 'red', width: 100};
// console.log(nimi.key);
// console.log(nimi.attribute.color);

// var person = new Object();
// person.name = 'john doe';
// person.job = 'accounting';
// person.birthday = '11/11/2000';

// person.job = 'unemployed';
// console.log(person);

// var person = new Object();
// person.name = 'john doe';
// person.job = 'accounting';
// person.birthday = '11/11/2000';

// delete person.job;
// console.log(person);

// var person = new Object();
// person.name = 'john doe';
// person.job = 'accounting';
// person.birthday = '11/11/2000';

// for (var key in person) {
//     console.log(key + ': ' + person[key]);
// }

// var obj_in_arr = [
//     {name:'john doe', class:'accounting', birthday:'01/01/2000', address:'none'},
//     {name:'john doe', class:'accounting', birthday:'01/01/2000', address:'none'},
//     {name:'john doe', class:'accounting', birthday:'01/01/2000', address:'none'},
//     {name:'john doe', class:'accounting', birthday:'01/01/2000', address:'none'},
// ];

// for (var i = 0; i < obj_in_arr.length; 1++) {
//     console.log('index'+i+'='+obj_in_arr[i]);
// }

// localStorage.setItem('image','https://imgs.search.brave.com/Xw3NFxb1mDLhRHiFwZ6y4pqYJMU3dRW84i1nhdwXG8Q/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9ocmx0eDEy/cGw4aHEvNTU5Nnoy/QkNSOUttVDFLZVJC/ck9RYS80MDcwZmQ0/ZTJmMWExM2Y3MWMy/YzQ2YWZlYjE4ZTQx/Yy9zaHV0dGVyc3Rv/Y2tfNDUxMDc3MDQz/LWhlcm8xLmpwZz9m/aXQ9ZmlsbCZ3PTYw/MCZoPTEyMDA')

// localStorage.setItem('image','https://imgs.search.brave.com/')

// localStorage.setItem('image1','https://imgs.search.brave.com/')

// localStorage.setItem('image','https://imgs.search.brave.com/')

// console.log(localStorage.getItem('image'))

// localStorage.removeItem('image')
// localStorage.removeItem('image1')

var information = {name:'john doe', age:'35'};

localStorage.setItem('info',JSON.stringify(information));