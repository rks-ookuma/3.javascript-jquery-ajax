'use strict';

// 演習2
console.log("=================演習2");
console.log("大熊隆寛");

// 演習3
console.log("=================演習3");
let lastName = "大熊";
let firstName = "隆寛";
console.log(lastName);
console.log(firstName);

// 演習4
console.log("=================演習4");
let old = 22;
const ADULT_AGE = 20;
if (old < ADULT_AGE) {
    console.log("未成年です");
}else{
    console.log("成人です");
}

// 演習4-2
console.log("=================演習4-2");
let age = 22;
if (age <= 4) {
    console.log("幼年期");
}else if(5 <= age && age <= 14){
    console.log("少年期");
}else if(15 <= age && age <= 24){
    console.log("青年期");
}else if (25 <= age && age <= 44) {
    console.log("壮年期");
}else if(45 <= age && age <= 64){
    console.log("中年期");
}else if (65 <= age) {
    console.log("高年期");
}

// 演習5
console.log("=================演習5");
let answer = 0;
for (let i = 0; i < 10; i++) {
    answer += i;
}
console.log(answer);

// 演習5－2
console.log("=================演習5－2");
for (let i = 1; i <= 9; i++) {
    let answers = "";
    for (let k = 1; k <= 9; k++) {
        if (i*k < 10) {
            answers = answers + " " + (i*k);
        }else{
            answers = answers + (i*k);
        }
        answers = answers + " ";
    }
    console.log(answers);
}

// 演習6
console.log("=================演習5－2");
let nums = [];
for (let i = 1; i <= 10; i++) {
    nums.push(i);
}
let result = 0;
for (const num of nums) {
    result += num;
}
console.log(result);

// 演習6－2
console.log("=================演習6－2");
for (const num of nums) {
    if (num % 2 == 1) {
        console.log(num);
    }
}

// 演習7
console.log("================演習7");
let countriesMap = {
    '日本' : '東京',
    'スリランカ' : 'スリジャヤワルダナブラコッテ',
    'タイ' : 'クルンテープ・マハーナコーン・アモーンラッタナコーシン・マヒンタラーユッタヤー・マハーディロック・ポップ・ノッパラット・ラーチャタニーブリーロム・ウドムラーチャニウェートマハーサターン・アモーンピマーン・アワターンサティット・サッカタッティヤウィサヌカムプラシット'
};
console.log(countriesMap["日本"]);
console.log(countriesMap["タイ"]);
countriesMap['タイ'] = "バンコク";
console.log(countriesMap['タイ']);

// 演習8
console.log('================演習8');
function printName(){
    console.log("大熊隆寛");
}
printName();

// 演習8－2
console.log('================演習8－2');
console.log(add(5,3));
console.log(sub(5,3));
console.log(multi(5,3));
console.log(div(5,3));
function add(num1,num2) {
    return num1 + num2;
}
function sub(num1,num2) {
    return num1 - num2;
}
function multi(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}

// 演習9
console.log('===============演習9');
let printNameVal = () => console.log("大熊隆寛");
printNameVal();

// 演習9－2
console.log('===============演習9－2');
let addVal = (num1,num2) => num1+num2;
let subVal = (num1,num2) => {
    return num1 - num2;
}
let multiVal = (num1, num2) => num1 * num2;
let divVal = (num1, num2) =>{
    return num1 / num2;
}
console.log(addVal(5,3));
console.log(subVal(5,3));
console.log(multiVal(5,3));
console.log(divVal(5,3));

