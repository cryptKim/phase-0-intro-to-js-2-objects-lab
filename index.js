let employee = {
    name: "Kev",
    streetAddress: "76 Boro St"
  };
  
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
      ...employee,
      [key]: value
    };
  }
  
  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
  }
  
  function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
  
  const updatedEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Jane Smith");
  console.log("Updated Employee (non-destructive):", updatedEmployee);
  console.log("Original Employee (unchanged):", employee);
  
  destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "456 Elm St");
  console.log("Updated Employee (destructive):", employee);
  
  const employeeWithoutAddress = deleteFromEmployeeByKey(employee, "streetAddress");
  console.log("Employee without Address (non-destructive):", employeeWithoutAddress);
  console.log("Original Employee (unchanged):", employee);
  
  destructivelyDeleteFromEmployeeByKey(employee, "name");
  console.log("Employee without Name (destructive):", employee);