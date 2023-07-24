// exporting a named function greet
export function greet() {

    console.log("hello world !! using import")

}
//  exporting a   function  
export const message = () => {
    const name = "ravi";
    const age = 26;
    return "my name is " + name + " and my age is " + age;

}
// exporting constant pi
export const pi = 3.1428;
// performing maths cal
export function calarea(radius) {
    return pi * radius * radius;

}
// exporting object 
export const people = {
    name: "rahul",
    age: 28,
    address: "bengaluru",
};