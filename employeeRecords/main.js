var employees = []

function Employee(param1, param2, param3, param4 = defaultValue = "Full Time"){
    this.name = param1
    this.jobTitle = param2
    this.salary = param3
    this.status = param4
    
        employees.push("Name:" + this.name + " " + "JobTitle:" + " " + this.jobTitle + " " + "Salary:" + " " + this.salary + "" +"Stats" + this.status)

    


}
new Employee("bob", "worker", 3200)
new Employee("fred", "cook", 15)
new Employee("Tim", "CEO", 1, " part time")

console.log(employees)