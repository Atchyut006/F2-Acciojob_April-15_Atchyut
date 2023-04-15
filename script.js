/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  
  function logEmployee(employee){
    if (employee.profession == 'developer')
    {
      console.log(employee)
    }
  };
  
  function PrintDeveloperbyMap() {
    //Write your code here , just console.log
    arr.map(logEmployee);
  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here , just console.log
    arr.forEach(logEmployee);
  }
  
  function addData() {
    //Write your code here, just console.log
     var employeeObj = {id:4,name:"susan",age:"20",profession:"intern"};
     arr.push(employeeObj);
     console.log(arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    for(var i=0;i<arr.length;i++){
      if (arr[i].profession == 'admin'){
        arr.splice(i,1);
      }
    }
    console.log(arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let arr1 = [
      { id: 5, name: "Arnav", age: "24", profession: "developer" },
      { id: 6, name: "Atchyut", age: "25", profession: "admin" },
      { id: 7, name: "Arjun", age: "26", profession: "developer" },
    ];
     
    var finalArr = [...arr,...arr1];
    console.log(finalArr);
  }
  