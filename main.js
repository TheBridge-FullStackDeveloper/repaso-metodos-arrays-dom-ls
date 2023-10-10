const employees = [
  { name: "John Doe", age: 28, department: "Sales", salary: 50000 },
  { name: "Jane Smith", age: 35, department: "Marketing", salary: 60000 },
  { name: "Michael Johnson", age: 42, department: "IT", salary: 80000 },
  { name: "Emily Davis", age: 31, department: "Sales", salary: 55000 },
  { name: "Robert Brown", age: 39, department: "Finance", salary: 70000 },
  { name: "Olivia Wilson", age: 27, department: "Marketing", salary: 55000 },
  { name: "David Taylor", age: 45, department: "IT", salary: 90000 },
];

// Mostrar únicamente los empleados que pertenezcan al departamento de "Sales".
const salesEmployees = employees.filter(
  (employee) => employee.department === "Sales"
);
// console.log(salesEmployees);
// Mostrar únicamente los empleados que tengan un salario mayor a 60000.
const hypeSalary = employees.filter((employee) => employee.salary > 60000);
// console.log(hypeSalary);
// Crea un array que contenga solo los nombres de los empleados.
const employeesNames = employees.map((employee)=> employee.name)
console.log(employeesNames)
// Crea un array que contenga solo el nombre y edad de cada empleado.
const employeesNamesAndAge = employees.map(employee =>{
  const newEmployee= {
    name:employee.name,
    age:employee.age
  }
  return newEmployee
})
console.log(employeesNamesAndAge)
// Crea un array que contenga los nombres de los empleados menores de 35
const menores35Employees = employees.filter(employee => employee.age < 35).map(employee=> employee.name)
console.log(menores35Employees)
// Crea un array que muestre el nombre y el salario de los empleados que tengan un salario entre 55.000 y 85.000 incluidos
const mediumSalarayEmployees = employees.filter(employee=> employee.salary >= 55000 && employee.salary <= 85000).map(employee=>{
  const nameAndSalary = {
    name:employee.name,
    salary:employee.salary
  }
  return nameAndSalary
})
console.log(mediumSalarayEmployees)
// guarda en el localStorage el array que creaste que contiene nombre y edad de cada empleado.
localStorage.setItem("employeesNamesAndAge",JSON.stringify(employeesNamesAndAge))
// traete del localStorage ese array que has guardado previamente y muestralo por consola
const savedEmployeesNamesAndAge = JSON.parse(localStorage.getItem("employeesNamesAndAge"))
console.log("ls",savedEmployeesNamesAndAge)
// pinta en el DOM el nombre y edad de cada empleado utilizando el array que te has traido del localStorage
const text = document.getElementById("text")

savedEmployeesNamesAndAge.forEach(employee => {
  text.innerHTML += `<p class="employee">Name: ${employee.name}, Age: ${employee.age} </p>`
});
