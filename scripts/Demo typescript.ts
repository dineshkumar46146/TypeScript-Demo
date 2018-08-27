let a: number = 12;
let b: number = 17;
 
function showProduct(first: number, second: number): void {
    console.log("The product is: " +  first * second);
}
 
showProduct(a, b);
// Array Type declaration
var array: string[] = ['test', 'dummy'];
var first: string = array[0];
// creating object
var name = { firstName: 'Homer', lastName: 'Simpson' };
name.firstName = 2;
// using classes
class Student {
    private firstName: string;
    private lastName: string;
    yearOfBirth: number;    
    schoolName: string;
    city: string;            
    constructor(firstName: string, lastName: string, schoolName: string, city: string, yearOfBirth: number) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;
        this.city = city;
        this.schoolName = schoolName;
    }
    age() {
        return 2014 - this.yearOfBirth;
    }         
    printStudentFullName(): void {
        alert(this.lastName + ',' + this.firstName);
    }
}
