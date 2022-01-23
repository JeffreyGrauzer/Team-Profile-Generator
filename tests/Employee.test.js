const Employee = require("../lib/Employee");

test("Employee", () => {
  const Employee1 = new Employee("Jeff", "DL", "email@email");
  //expect(typeof Employee1).toBe("Jeff", "DL", "email@email");
  expect(Employee1.name).toEqual("Jeff");
});

test("for valid Id", () => {
  const employeeID = 3;
  const employee = new Employee("Jeff", employeeID);
  expect(employee.id).toBeTruthy();
});
