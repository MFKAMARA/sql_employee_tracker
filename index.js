const inquirer = require('inquirer');
const mysql = require('mysql2');
const { printTable } = require('console-table-printer');
// Connect to database
const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    // MySQL Username
    user: 'root',
    // TODO: Add MySQL Password
    password: 'Password@123',
    database: 'employee_tracker_db'
  },
  console.log(`Connected to the employer_tracker_db database.`)
);
db.connect(() => {
  menu()
});

function menu() {
  inquirer.prompt([{
    type: 'list',
    message: 'What would you like to do',
    name: 'choice',
    choices: ["view all departments", "view all roles", "view all employees", "add a department", "add a role", "add an employee", "update from employee"]

  }]).then(function (response) {
    console.log(response)
    if (response.choice === 'view all departments') {
      viewdepartments()

    }
    if (response.choice === 'view all roles') {
      viewallroles()
    }
    if (response.choice === 'view all employees') {
      viewallemployees()
    }
    if (response.choice === 'add a department') {
      addDepartment()
    }
    if (response.choice === 'add a role') {
      addRole()
    }
    if (response.choice === 'add an employee') {
      addEmployee()
    }
    if (response.choice === 'update from employee') {
      addUpdateEmployee()
    }

  })
}
function viewdepartments() {
  db.query('SELECT * FROM department', (err, data) => {
    printTable(data)
    menu()
  })
}
function viewallroles() {
  db.query('SELECT * FROM role', (err, data) => {
    printTable(data)
    menu()
  })

}
function viewallemployees() {
  db.query('SELECT * FROM employee', (err, data) => {
    printTable(data)
    menu()
  })
}
function addDepartment() {
  inquirer.prompt([{
    type: "input",
    message: "enter new department",
    name: "newDepartment"
  }]).then(response => {
    db.query(`INSERT INTO department (name) VALUES("${response.newDepartment}")`, (err, data) => {
      viewdepartments()
    })
  })

}
function addRole() {
  inquirer.prompt([{
    type: 'input',
    message: "enter a new role",
    name: "addRole",
  }, {
    type: 'input',
    message: "enter a new salary",
    name: "addsalary",

  }, {
    type: 'input',
    message: "enter a department_id",
    name: "addDepartment_id",

  }]).then(response => {
    db.query(`INSERT INTO role (title, salary,department_id) VALUES("${response.addRole}","${response.addsalary}","${response.addDepartment_id}")`, (err, data) => {
      viewallroles()
    })
  })
}
function addEmployee() {
  inquirer.prompt([{
    type: 'input',
    message: 'add an employee',
    name: 'addEmployee',

  }, {
    type: 'input',
    message: 'enter new first_name',
    name: 'addFirst_name',
  }, {
    type: 'input',
    message: 'enter new last_name',
    name: 'addLast_name',
  }
    , {
    type: 'input',
    message: 'enter new role_id',
    name: 'addRole_id',

  }]).then(response => {
    db.query(`INSERT INTO employee (first_name, last_name,role_id) VALUES("${response.addEmployee}","${response.addFirst_name}","${response.addLast_name}","${response.addRole_id}")`, (err, data) => {
      viewallemployees()
    })
  })
}
function addUpdateEmployee() {
  inquirer.prompt([{
    type: 'input',
    message: 'What is your employee id?',
    name: 'employee_id',
  }, {
    type: 'input',
    message: 'What is your new role id?',
    name: 'role_id',
  }
  ]).then((response) => {
    db.query(`UPDATE employee SET role_id =${response.role_id} WHERE id=${response.employee_id}; `, err => {
      viewallemployees()
    });
  });
}

