const Manager = require("../../../UK-VIRT-FE-PT-10-2023-U-LOLC/12-object-oriented-programming-module/04-team-profile-generator-lesson/challenge/starter/lib/Manager");
const Employee = require("../../../UK-VIRT-FE-PT-10-2023-U-LOLC/12-object-oriented-programming-module/04-team-profile-generator-lesson/challenge/starter/lib/Employee");

test("Can set office number via constructor argument", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test('getRole() should return "Manager"', () => {
  const testValue = "Manager";
  const e = new Manager("Foo", 1, "test@test.com", 100);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 100;
  const e = new Manager("Foo", 1, "test@test.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});
