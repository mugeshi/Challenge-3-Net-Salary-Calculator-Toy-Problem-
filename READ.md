Net Salary Calculator
This is a JavaScript function that calculates the net salary based on the provided basic salary and benefits. It takes into account various deductions such as PAYE (Pay As You Earn), NHIF (National Hospital Insurance Fund), and NSSF (National Social Security Fund) contributions.

Learning Goals
By using this calculator, you will learn:

How to calculate net salary based on the given basic salary and benefits.
How to apply different tax rates for different income ranges.
How to determine NHIF deductions based on the gross salary.
How to calculate NSSF contributions based on the gross salary.
Introduction
The calculateNetSalary function calculates the net salary based on the provided basic salary and benefits. It uses predefined tax rates, NHIF rates, and NSSF contribution limits to perform the necessary calculations.

Instructions
To use this net salary calculator, follow these steps:

Define the basicSalary variable and then assign it to the value of the employee's basic salary.
Define the benefits variable and assign it the value of any additional benefits received by the employee.
calculateNetSalary function, passing the basicSalary and benefits as arguments.
The function will return an object containing the following salary details:
grossSalary: The total gross salary (basic salary + benefits).
paye: The calculated PAYE (income tax) amount.
nhifDeductions: The NHIF deduction amount.
nssfContributions: The NSSF contribution amount.
netSalary: The final net salary after deducting PAYE, NHIF, and NSSF.
You can access the salary details by using the returned object. For example:
javascript
Copy code
const salaryDetails = calculateNetSalary(basicSalary, benefits);
console.log(salaryDetails);
This will print the salary details to the console.
Please note that the provided tax rates, NHIF rates, and NSSF contribution limits are based on the current regulations in effect. Ensure that these values are up to date and relevant to your specific situation.

modify the calculateNetSalary function or the example usage code to suit your needs.

