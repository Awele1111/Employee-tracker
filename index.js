const inquirer = require('inquirer');
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    // MySQL Username
    user: 'root',
    // TODO: Add MySQL Password
    password: 'rootroot',
    database: 'company_db'
  },
  console.log(`Connected to the books_db database.`)
)

const initialQuestions = [
    {
        type: 'list',
        name: 'initial_choice',
        message: 'select operation to perform',
        choices: ['view all departments','view all roles','view all employees', 'view all employees', 'add a role', 'add a department', 'add an employee', 'update an employee role', 'exit']
    }

]

const init = () => {
     inquirer.prompt(initialQuestions).then (async (answer)  => {
        let request = answer.initial_choice;
        switch (request) {
            case 'view all departments':
                await viewDepartments();
                init();
                break;
            case 'view all roles':
                await viewRoles();
                init();
                break;
            case 'view all employees':
                await viewEmployees();
                init();
                break;
            case 'add a department':
                await addDepartment();
                init();
                break;
            case 'add a role':
                await viewRole();
                init();
                break;
            case 'add an employee':
                await addEmployee();
                init();
                break;
            case 'update an employee role':
                await updateEmployee();
                init();
                break;
            case 'exit':
                process.exit();
                break;
        }
    })}


    function viewDepartments () {
        connection.query('select * from departments;', (err, data) => {
            if (err) console.log(err);
            console.table(data)
            init()
        })
    }

    function viewRoles () {
        connection.query('select * from roles;', (err, data) => {
            if (err) console.log(err);
            console.table(data)
            init()
        })   
    }

    function viewEmployees () {
        connection.query('select * from employees;', (err, data) => {
            if (err) console.log(err);
            console.table(data)
            init()
        })  
    }

    function addDepartment () {
        connection.query('select * from department;', (err, data) => {
            if (err) console.log(err);
            console.table(data)
            init()
        })  
    }
    function addRole () {
        connection.query('select * from roles;', (err, data) => {
            if (err) console.log(err);
            console.table(data)
            init()
        })  
    }
    function updateEmployee () {
        connection.query('select * from employees;', (err, data) => {
            if (err) console.log(err);
            console.table(data)
            init()
        })  
    }
    init()
    
    
    

    
   