INSERT INTO departments (name)
VALUES ('HR'),
        ('Technology'),
        ('Finance');

INSERT INTO roles (title, salary, department_id)
VALUES ('HR Recruiter', 50000, 1),
        ('Tech lead', 70000, 2),
        ('Finance manager', 65000, 3);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ('David', 'Anderson', 1, NULL),
        ('Angel','Thompson', 2, 1),
        ('John', 'Baker', 3, 2);

