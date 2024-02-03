SQL: Employee Tracker

## Table of Contents
Description
Installation
Usage
Walkthrough Video
User Story
Acceptance Criteria
License


## Description
Developers often need to create interfaces for non-developers to easily interact with and manage information stored in databases. This project involves building a command-line application from scratch to manage a company's employee database using Node.js, Inquirer, and MySQL.

Your Task
Your task is to create a content management system (CMS) that enables a business owner to view and manage departments, roles, and employees in their company. This application should be developed using Node.js, Inquirer (version 8.2.4), and MySQL.

## Installation
To install the required Inquirer package, use the following command in your project folder:

bash
Copy code
npm i inquirer@8.2.4

## Usage
Clone the repository to your local machine.
Run the installation command mentioned above to install Inquirer.
Set up your MySQL database and update the connection details in the code.
Run the application using:
bash
Copy code
node index.js


## Walkthrough Video
Please refer to the Walkthrough Video to see a demonstration of the application's functionality.

User Story

As a business owner, I want to be able to view and manage the departments, roles, and employees in my company so that I can organize and plan my business.

Acceptance Criteria

When the application is started, the user is presented with options to view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role.
Choosing to view all departments presents a formatted table showing department names and department ids.
Choosing to view all roles presents the job title, role id, the department that role belongs to, and the salary for that role.
Choosing to view all employees presents a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.
Choosing to add a department prompts the user to enter the name of the department, and that department is added to the database.
Choosing to add a role prompts the user to enter the name, salary, and department for the role, and that role is added to the database.
Choosing to add an employee prompts the user to enter the employee’s first name, last name, role, and manager, and that employee is added to the database.
Choosing to update an employee role prompts the user to select an employee to update and their new role, and this information is updated in the database.

## License
This project is licensed under the MIT License.# sql_employee_tracker
