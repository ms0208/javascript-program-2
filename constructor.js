class employee{
    constructor(name,age,salary){
        this.name = name;  // constructor.
        this.age =age;
        this.salary = salary;
    }
    biodata(){
        return`My name is ${this.name} . My age is ${this.age} .My salary is ${this.salary}`;

    }
}
    class student extends employee{  // inheritance  
       constructor(name,age,salary,id){
     super(name,age,salary);
        this.id=id;

         }
         studentdata(){
           // console.log(`My name is ${this.name}.My age is ${this.age} .My salary is ${this.salary}.My id is ${this.id}`);
           return`${super.biodata()} My id is ${this.id}`

         }
    
        }


let  obj1 = new student('manav',21,25000,7);
console.log(obj1.studentdata());
let obj2 = new employee('pranav',26,2500);
console.log(obj2.biodata());
