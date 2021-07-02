function Student(name,roll,numbers,lang){

    this.myname=name;
    this.myroll=roll;
    this.mynumbers=numbers;
    this.mylang=lang;
    this.display=function(){
        console.log(this.myname);
        console.log(this.myroll);
        console.log(this.mynumbers);
        console.log(this.mylang)
    }

}

let student1=new Student("tushar",457789,3.5,["bangla","english","spanish"]);
student1.display();


