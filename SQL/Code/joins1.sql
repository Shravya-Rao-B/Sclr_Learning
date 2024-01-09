/*
1.
Display the details of the employees who joined the company before their managers joined the company.

Return the columns 'employee_id', 'first_name', and 'last_name'.
Return the result ordered by employee_id in ascending order.
Dataset Description:

Hints:
Hint 1:
'Write code that retrieves the employee_id, first_name, and last_name of employees from the employees table who were
hired before their corresponding managers.

The result set is then sorted in ascending order by employee_id.

1 - The SELECT statement selects three columns from the employees table: employee_id, first_name, and last_name.

2 - The FROM clause specifies the table employees and assigns it aliases e1 and e2 to differentiate between the two instances of the same table.

The JOIN keyword combines the employees table with itself based on the condition e1.manager_id = e2.employee_id.
This condition ensures that the joined rows have matching manager_id and employee_id values,
indicating that e1 is the employee and e2 is the corresponding manager.

3 - The WHERE clause specifies the condition e1.hire_date < e2.hire_date.

This condition filters the result set to include only those employees (e1) whose hire date is earlier than the hire date
of their corresponding manager (e2).

4 - The ORDER BY clause sorts the result set in ascending order based on e1.employee_id.

Solution approach:
STEP 1: Select columns employee_id, first_name, and last_name from the employee’s table.

select e1.employee_id, e1.first_name, e1.last_name from employees e1;

STEP 2: To filter the records of the employees who joined the company before their managers joined the company, we need to use inner join and join the employee’s table with itself with a different alias.
Now, we compare the manager_id from the first employee’s table with the employee_id of the second employee’s table.

select e1.employee_id, e1.first_name, e1.last_name from employees e1
join employees e2 on e1.manager_id=e2.employee_id;

STEP 3: To extract the records of who joined first, use the ‘<’ operator on the hire_date column in the where clause.
The hire date of the manager should be more than that of the employee.

STEP 4: Use order by on the employee_id column to display the details in the ascending order of their Ids.

Complete solution:
STEP 1: Select columns employee_id, first_name, and last_name from the employee’s table.

select e1.employee_id, e1.first_name, e1.last_name from employees e1;

STEP 2: To filter the records of the employees who joined the company before their managers joined the company, we need to use inner join and join the employee’s table with itself with a different alias.
Now, we compare the manager_id from the first employee’s table with the employee_id of the second employee’s table.

select e1.employee_id, e1.first_name, e1.last_name from employees e1
join employees e2 on e1.manager_id=e2.employee_id;

STEP 3: To extract the records of who joined first, use the ‘<’ operator on the hire_date column in the where clause.
The hire date of the manager should be more than that of the employee.

STEP 4: Use order by on the employee_id column to display the details in the ascending order of their Ids.

select e1.employee_id, e1.first_name, e1.last_name 
from employees e1 
join employees e2 
on e1.manager_id = e2.employee_id
where e1.hire_date < e2.hire_date
order by e1.employee_id;

*/
select e.employee_id, e.first_name, e.last_name
from employees e
join employees em 
on e.manager_id = em.employee_id
where e.hire_date < em.hire_date
order by employee_id

/*
2.
Write a query to find details of the employees who work in the 'Human Resources' department.

Return the columns 'employee_id', 'department_id', 'first_name', 'last_name', 'job_id', and 'department_name'.
Return the result ordered by employee_id in ascending order.

Hints:
Hint 1:
STEP 1: Select the columns employee_id, department_id, first_name, last_name, and job_id from the employee’s table.
Select department_name from the department’s table.

select e.employee_id, e.department_id, e.first_name, e.last_name, e.job_id, d.department_name from employees e;

STEP 2: Use inner join and join the tables employees and departments based on the column department_id.

select e.employee_id, e.department_id, e.first_name, e.last_name, e.job_id, d.department_name from employees e
inner join departments d
on e.department_id = d.department_id

STEP 3: To filter the records of the employees who work in the ‘Human Resources‘ department, use the ‘=’ operator in the where clause on the department_name column.

Solution approach:
Write query that selects specific columns from the “employees” and “departments” tables, performs an inner join based on the department ID, and filters the result to include only employees who belong to the ‘Human Resources’ department. The resulting rows will contain information about the employee ID, department ID, first name, last name, job ID, and department name of employees in the ‘Human Resources’ department.

 SELECT e.employee_id, e.department_id, e.first_name, e.last_name, e.job_id, d.department_name 
This line specifies the columns to be selected in the result set. It includes the employee ID, department ID, first name, last name, job ID, and department name.

 FROM employees e 
This line specifies the “employees” table and assigns it the alias “e”. The alias “e” is used to reference the “employees” table in the query.

 INNER JOIN departments d ON e.department_id = d.department_id 
This line performs an inner join between the “employees” table (aliased as “e”) and the “departments” table (aliased as “d”). It joins the tables based on the “department_id” column in both tables, matching employees to their respective departments.

 WHERE d.department_name = 'Human Resources' 
This line filters the result set based on the condition that the department name from the “departments” table (aliased as “d”) should be ‘Human Resources’. This condition restricts the result to only employees who belong to the ‘Human Resources’ department.

Complete solution:
STEP 1: Select the columns employee_id, department_id, first_name, last_name, and job_id from the employee’s table.
Select department_name from the department’s table.

select e.employee_id, e.department_id, e.first_name, e.last_name, e.job_id, d.department_name from employees e;

STEP 2: Use inner join and join the tables employees and departments based on the column department_id.

select e.employee_id, e.department_id, e.first_name, e.last_name, e.job_id, d.department_name from employees e
inner join departments d
on e.department_id = d.department_id

STEP 3: To filter the records of the employees who work in the ‘Human Resources‘ department, use the ‘=’ operator in the where clause on the department_name column.

select e.employee_id, e.department_id, e.first_name, e.last_name, e.job_id, d.department_name 
from employees e
inner join departments d
on e.department_id = d.department_id
where d.department_name = 'Human Resources'
order by e.employee_id;
*/
select employee_id, e.department_id, first_name, last_name, job_id, department_name
from employees e
join departments d
on e.department_id = d.department_id
where d.department_name = "Human Resources"
order by employee_id;

/*
3.
Write a query to find all the people who viewed more than one article on the same date.

Save the viewer_id as the id.
Return the result sorted by id in ascending order.


Sample Explanation:

Viewer with id 5 viewed two articles on 2019-08-01.
Viewer with id 6 viewed two articles on 2019-08-02.
Viewer with id 4 viewed the same article two times. Hence, not included.

Hints:
STEP 1: Select the column viewer_id from the views table and save it as ‘id’.

STEP 2: To filter the records of all the people who viewed more than one article on the same date, we use self-join and join the views table with different aliases where:

The viewer_id should be the same.
The view_date of the article should be the same
But, the article_id should be different.
All, three conditions should satisfy.
STEP 3: Now, to filter the duplicated records we use the distinct keyword for the id column.

STEP 4: Use the order by clause to order the output based on the id column in ascending order.

complete solution:
STEP 1: Select the column viewer_id from the views table and save it as ‘id’.

STEP 2: To filter the records of all the people who viewed more than one article on the same date, we use self-join and join the views table with different aliases where:

The viewer_id should be the same.
The view_date of the article should be the same
But, the article_id should be different.
All, three conditions should satisfy.
STEP 3: Now, to filter the duplicated records we use the distinct keyword for the id column.

STEP 4: Use the order by clause to order the output based on the id column in ascending order.

SELECT DISTINCT v1.viewer_id AS id
FROM views v1
JOIN views v2
ON v1.viewer_id = v2.viewer_id
AND v1.view_date = v2.view_date
AND v1.article_id != v2.article_id
ORDER BY 1;
*/
select distinct v1.viewer_id as id 
from views v1
join views v2 
on v1.viewer_id = v2.viewer_id
and v1.view_date = v2.view_date
and v1.article_id != v2.article_id
order by id

/*
4.
Display the details of those employees who have a manager working in the department that is US (i.e., country_id) based.

Note:

Return the columns employee_id, first_name, and last_name.
Return the result ordered by employee_id in ascending order.

Hints:
Hint 1:
STEP 1: Select employee_id, first_name, and last_name columns from the employees table.

STEP 2: To filter the records of the employees who have a manager working in the department that is US based, we need to use an Inner Join and join the employees table with itself with a different alias.
Now, we compare the manager_id from the first employees table with the employee_id of the second employees table.

STEP 3: Using an Inner Join, join the employees and departments tables on department_id. Inner join because we need to filter the common records from employees and departments.

STEP 4: Using an Inner Join, join the departments and locations tables on location_id. Inner join because we need to filter the common records from departments and locations.

STEP 5: To filter the records that are ‘US-based’, in the WHERE clause, use the ‘=’ operator on the country_id column.

STEP 6: Use ORDER BY on the employee_id column to display the details in ascending order of their ids.

Solution approach:
Write SQL query that retrieves the employee ID, first name, and last name from the employees table. It performs joins between the employees, departments, and locations tables to retrieve information about the employee’s manager and department location. The result set is filtered to include only employees whose departments are located in the United States. The final result is ordered by employee ID in ascending order.

Step by step solution appraoch :

SELECT e.employee_id, e.first_name, e.last_name: This part of the query specifies the columns we want to retrieve from the employees table.
e.employee_id: This column represents the employee ID.

e.first_name: This column represents the first name of the employee.

e.last_name: This column represents the last name of the employee.

FROM employees e: This clause specifies the first table we want to retrieve data from, which is the employees table. It is given the alias “e”.

JOIN employees e1 ON e.manager_id = e1.employee_id: This clause performs an inner join operation between the employees table and itself. It joins the table based on the relationship between an employee and their manager. The join condition e.manager_id = e1.employee_id ensures that we match each employee with their respective manager. This allows us to retrieve the manager’s information.

JOIN departments d ON e1.department_id = d.department_id: This clause performs an inner join operation between the departments table and the joined employees table. It joins the table based on the department ID. The join condition e1.department_id = d.department_id ensures that we match the department of the employee’s manager.

JOIN locations l ON d.location_id = l.location_id: This clause performs an inner join operation between the locations table and the joined departments and employees tables. It joins the table based on the location ID. The join condition d.location_id = l.location_id ensures that we match the location of the department.

WHERE country_id = 'US': This clause filters the result to include only employees whose departments are located in the United States. It checks the country ID from the locations table.

ORDER BY employee_id: This clause specifies the sorting order of the result set. The result will be ordered by employee ID in ascending order.

Complete solution:
select 
e.employee_id, e.first_name, e.last_name 
from employees e 
join employees e1
on e.manager_id = e1.employee_id 
join departments d
on e1.department_id = d.department_id
join locations l
on d.location_id = l.location_id 
where country_id = 'US'
order by employee_id;
*/
select e.employee_id, e.first_name, e.last_name
from employees e
join employees em 
on e.manager_id = em.employee_id
join departments d
on em.department_id = d.department_id
join locations l
on d.location_id = l.location_id
where l.country_id = 'US'
order by e.employee_id

/*
5.
Display the details of the employees who had job titles like 'sales' in the past and the min_salary is greater than or equal to 6000.

Return the columns 'employee_id', 'department_name', 'job_id', 'job_title', and 'min_salary'.
Return the employee's current information for the columns 'employee_id', and 'department_name'.
Return the employee's past information for the columns 'job_id', 'job_title', and 'min_salary'.
Return the output ordered by employee_id and min_salary in ascending order.
NOTE:

To get the min_salary refer to the jobs table.
Refer to the job_history table to get the details of past jobs.
An employee might have worked in multiple jobs in the past whose record will be available in job_history.
If any employee hasn't worked in any jobs in the past, his record wouldn't be present in the job_history table.

Hints:
Hint 1:
STEP 1:
Select the column employee_id from the employees table.
Select the column department_name from the departments table.
Select job_id, job_title, and min_salary columns from the jobs table.

STEP 2: Using an Inner Join, join the employees and departments tables on department_id. Inner join because we need to filter the common records from employees and departments.

STEP 3: Using an Inner Join, join the employees and job_history tables on employee_id. Inner join because we need to filter the common records from departments and job_history.

STEP 4: Using an Inner Join, join the job_history and jobs tables on job_id. Inner join because we need to filter the common records from job_history and jobs.

STEP 5: Use the LIKE operator in the WHERE clause on the job_title column and filter the records that belong to sales.

STEP 6: Use the >= operator on the min_salary column in the WHERE clause and filter the records where the min_salary is >= 6000. Also, use the AND operator between different conditions.

STEP 7: Use ORDER BY clause and order the output based on the employee_id and min_salary columns in ascending order.

Solution approach:
Write SQL query that retrieves the employee ID, department name, job ID, job title, and minimum salary for employees who have a job with a minimum salary of 6000 or higher and the job title contains the word “sales”. The result set is ordered by employee ID and the minimum salary of the job in ascending order.

Step by step solution appraoch :

SELECT emp.employee_id, dept.department_name, j.job_id, j.job_title, j.min_salary: This part of the query specifies the columns we want to retrieve from the tables.
emp.employee_id: This column represents the employee ID.
dept.department_name: This column represents the department name.
j.job_id: This column represents the job ID.
j.job_title: This column represents the job title.
j.min_salary: This column represents the minimum salary for the job.

FROM employees as emp: This clause specifies the first table we want to retrieve data from, which is the employees table. It is given the alias “emp”.

INNER JOIN departments as dept ON emp.department_id = dept.department_id: This clause joins the employees table with the departments table based on the department ID. It ensures that only matching records are retrieved.

INNER JOIN job_history as jh ON emp.employee_id = jh.employee_id: This clause joins the employees table with the job_history table based on the employee ID. It ensures that only matching records are retrieved.

INNER JOIN jobs as j ON jh.job_id = j.job_id: This clause joins the job_history table with the jobs table based on the job ID. It ensures that only matching records are retrieved.

WHERE j.min_salary >= 6000 AND j.job_title LIKE '%sales%': This clause specifies the conditions that filter the rows.

j.min_salary >= 6000: This condition filters the rows where the minimum salary of the job is greater than or equal to 6000.
j.job_title LIKE ‘%sales%’: This condition filters the rows where the job title contains the word “sales”.

ORDER BY emp.employee_id, j.min_salary ASC: This clause specifies the sorting order of the result set. The result will be sorted first by employee ID in ascending order, and then by the minimum salary of the job in ascending order.

Complete solution:
SELECT emp.employee_id, dept.department_name, j.job_id, j.job_title, j.min_salary
FROM employees as emp
INNER JOIN departments as dept
ON emp.department_id= dept.department_id
INNER JOIN job_history as jh
ON emp.employee_id=jh.employee_id
INNER JOIN jobs as j
ON jh.job_id=j.job_id
WHERE j.min_salary >= 6000
AND j.job_title LIKE '%sales%'
ORDER BY emp.employee_id, j.min_salary ASC
*/

select e.employee_id, d.department_name, j.job_id, j.job_title, j.min_salary FROM
employees e
join departments as d
on e.department_id = d.department_id
join job_history as jh 
on e.employee_id = jh.employee_id
join jobs as j 
on j.job_id = jh.job_id 
where j.job_title like ('%sales%')
and j.min_salary >= 6000
order by employee_id, min_salary