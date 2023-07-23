const employee = {
    name: "Sam",
    streetAddress: "11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updateEmplyee = {...employee }; 
updateEmplyee[key] = value;
return updateEmplyee;

}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}
function deleteFromEmployeeByKey(employee, key) {
    const employeeClone = { ...employee };
    delete employeeClone[key];
    return employeeClone;
  }
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  