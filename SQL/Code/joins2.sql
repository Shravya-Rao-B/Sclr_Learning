/*
1.
Write a query to display the details of all those departments that don't have any working employees.

Return the columns 'department_id', and 'department_name'.
Return the results ordered by 'department_id' in ascending order.

Hints:
Hint 1:
Use appropriate join and filter all the records from the department’s table and common records from the employee’s table.
Use the “is null” operator to filter the departments with no employees.

STEP 1: Select department_id and department_name from the department’s table.

select d.department_id, d.department_name from departments d;

STEP 2: Using left join, join the tables departments and employees on department_id. (Left join because not all departments have working employees).

select d.department_id, d.department_name from departments d
left join employees e on d.department_id = e.department_id;

STEP 3: Use the ‘is null’ operator in the where clause to filter the records where there is no working employee.

Solution Approach:
Write SQL query that retrieves the department ID and department name from the departments table. It performs a left join between the departments table and the employees table based on the department ID. The result set is filtered to include only those departments that do not have any associated employees. The final result is ordered by department ID in ascending order.

Step by step solution appraoch :

SELECT d.department_id, d.department_name: This part of the query specifies the columns we want to retrieve from the tables.
d.department_id: This column represents the department ID.

d.department_name: This column represents the department name.

FROM departments d: This clause specifies the first table we want to retrieve data from, which is the departments table. It is given the alias “d”.

LEFT JOIN employees e ON d.department_id = e.department_id: This clause performs a left join operation between the departments table and the employees table. It joins the two tables based on the department ID. This join ensures that all records from the departments table are included, and only matching records from the employees table are included. If there is no matching record in the employees table, the columns from the employees table will have NULL values.

WHERE e.department_id IS NULL: This clause specifies the condition that filters the rows. It selects only those rows where the department ID in the employees table is NULL. This effectively filters out the departments that do not have any associated employees.

ORDER BY d.department_id: This clause specifies the sorting order of the result set. The result will be ordered by department ID in ascending order.

Scaler solution:
STEP 1: Select department_id and department_name from the department’s table.

select d.department_id, d.department_name from departments d;

STEP 2: Using left join, join the tables departments and employees on department_id. (Left join because not all departments have working employees).

select d.department_id, d.department_name from departments d
left join employees e on d.department_id = e.department_id;

STEP 3: Use the ‘is null’ operator in the where clause to filter the records where there is no working employee.

select d.department_id, d.department_name 
from departments d 
left join employees e 
on d.department_id = e.department_id 
WHERE e.department_id is null
order by d.department_id;
*/
/* what also worked */
select department_id , department_name
from departments where department_id not in 
(
   select distinct department_id from employees
)
order by department_id

/*
2.
Write a query to find the employee_id of the employees whose salary is strictly less than $15000 and whose manager left the company.

When a manager leaves the company, their information is deleted from the employees table, but the reports still have their manager_id set to the manager that left.

Note: Return the result ordered by employee_id in ascending order.

Sample Explanation:

The employees with a salary less than $15000 are 1, 2, 3, 4, 5, and 7.
1 manager is employee 2, who is still in the company.
2, 3 employees have manager_id as null as they are in the highest position in the company and they have no managers.
4 manager is employee 3, who is still in the company.
5, 7 manager is employee 6, who left the company because there is no row for employee 6 as it was deleted.
So, 5,7 employees manager left and their salary is less than $15000. Hence, that employee's employee_id is returned.

Hints:
STEP 1: Select column employee_id from the employee’s table.

STEP 2: To filter the records of the employees whose manager left the company, we need to use left join and join the employee’s table with itself with a different alias.
Now, we compare the manager_id from the first employee’s table with the employee_id of the second employee’s table.

STEP 3: To find that particular employee_id, the manager_id should not be null and the employee_id of that manager should be null. We check this condition using is null and is not null on manager_id and employee_id respectively.

STEP 4: To filter the records on whose salary is strictly less than $15000, we use the ‘<’ operator on the salary column and use the ‘and’ operator to satisfy this and the above condition from step 3.

STEP 5: Use the order by clause to order the output in ascending order.

Solution approach:
SELECT a.employee_id 
This line specifies that we want to select the employee_id from the employees table using the alias a.

 FROM employees AS a 
This line specifies the employees table and assigns the alias a to it.
 The alias a will be used to refer to the records from this table in subsequent lines.

 LEFT JOIN employees AS b ON a.manager_id = b.employee_id 
This line performs a left join between the employees table (aliased as a) and itself (aliased as b). It joins the records where the manager_id of a matches the employee_id of b. This establishes a relationship between an employee and their manager.

 WHERE a.salary < 15000 AND a.manager_id IS NOT NULL AND b.employee_id IS NULL 
This line specifies the conditions for filtering the records. It includes the following conditions:

 a.salary < 15000 
Only employees with a salary less than 15000 are considered.

 a.manager_id IS NOT NULL 
Only employees with a non-null manager_id are considered, i.e., they have a manager.

 b.employee_id IS NULL 
Only those employees are selected who do not have a matching record in the b alias (the left join did not find a corresponding manager for them).

 ORDER BY 1 
This line specifies that the result set should be ordered in ascending order based on the first column (employee_id).

In summary, this query retrieves the employee_id of employees who have a salary less than 15000, have a non-null manager_id,
and do not have a corresponding record in the self-join result for a manager. The result set is ordered by the employee_id.

Scaler solution:
STEP 1: Select column employee_id from the employee’s table.

STEP 2: To filter the records of the employees whose manager left the company, we need to use left join and join the employee’s table with itself with a different alias.
Now, we compare the manager_id from the first employee’s table with the employee_id of the second employee’s table.

STEP 3: To find that particular employee_id, the manager_id should not be null and the employee_id of that manager should be null. We check this condition using is null and is not null on manager_id and employee_id respectively.

STEP 4: To filter the records on whose salary is strictly less than $15000, we use the ‘<’ operator on the salary column and use the ‘and’ operator to satisfy this and the above condition from step 3.

STEP 5: Use the order by clause to order the output in ascending order.

select a.employee_id
from employees as a
left join employees as b
on a.manager_id = b.employee_id
where a.salary < 15000 
and a.manager_id is not null
and b.employee_id is null
order by 1;
*/
/* what also worked */
select employee_id
from employees
where manager_id not in (
    select distinct employee_id from employees
)
order by employee_id
/*
3.
Write a SQL query to find the employee details who handles no customers.

Note:

Use the given customers table.
Return the output ordered by employeeNumber in ascending order.
The salesRepEmployeeNumber column to the employeeNumber who made sales to the customers.

Hints:
STEP 1: Use the SELECT keyword, to indicate that we want to retrieve the E.employeeNumber, E.firstName, and E.lastName columns from the employees.

STEP 2: The FROM keyword specifies the table or tables from which we are retrieving the data. In this case, we’re using two different columns, customers and employees with aliases E and C respectively.

STEP 3: We perform a Right Join operation between the customers and employees tables. A right join returns all the records from the right table (employees table) and the matching records from the left table (customers table).

STEP 4: The join condition that defines how the two tables are linked will be C.salesRepEmployeeNumber = E.employeeNumber.

STEP 5: Then we apply a filter condition that says WHERE C.salesRepEmployeeNumber is NULL.
It restricts the result to only those records where the salesRepEmployeeNumber column in the customers table is NULL. This means we are selecting employees who do not have any corresponding salesRep EmployeeNumber records.

STEP 6: Sort the result table by E.employeeNumber column in ascending order using the ORDER BY clause.

Solution Approach:
Write SQL query that retrieves the employee number, first name, and last name of employees who do not have any associated customer records. It performs a right join between the customers table and the employees table, based on the sales representative employee number. The result set is filtered to include only those employees where the salesRep EmployeeNumber is NULL. The final result is ordered by employee number in ascending order.

Step by step solution appraoch :

SELECT E.employeeNumber, E.firstName, E.lastName: This part of the query specifies the columns we want to retrieve from the tables.
E.employeeNumber: This column represents the employee number.

E.firstName: This column represents the first name of the employee.

E.lastName: This column represents the last name of the employee.

FROM customers C: This clause specifies the first table we want to retrieve data from, which is the customers table. It is given the alias “C”.

RIGHT JOIN employees E ON C.salesRepEmployeeNumber = E.employeeNumber: This clause performs a right join operation between the customers table and the employees table. It joins the two tables based on the sales representative employee number. This join ensures that all records from the employees table are included, and only matching records from the customers table are included.

WHERE C.salesRepEmployeeNumber is NULL: This clause specifies the condition that filters the rows. It selects only those rows where the salesRepEmployeeNumber is NULL. This condition effectively filters out the matching records and retains only the employees who do not have any associated salesRep EmployeeNumber records.

ORDER BY E.employeeNumber: This clause specifies the sorting order of the result set. The result will be ordered by employee number in ascending order.

Scaler solution:
SELECT E.employeeNumber, E.firstName, E.lastName
FROM customers C
RIGHT JOIN employees E 
ON C.salesRepEmployeeNumber = E.employeeNumber
WHERE C.salesRepEmployeeNumber is NULL
ORDER BY E.employeeNumber;
*/
select employeeNumber, firstName, lastName from employees e
left join customers c 
on e.employeeNumber = c.salesRepEmployeeNumber 
where c.salesRepEmployeeNumber  is null 
order by e.employeeNumber

/*
4.
Write a SQL query to get all the possible combinations of employees and offices.

Return the output ordered by employeeNumber and officeCode in ascending order.

Hints:
STEP 1: Apply a CROSS JOIN on the employees and offices tables with aliases ‘e’ & ‘o’ respectively.

STEP 2: Select the columns e.employeeNumber, e.firstName, e.lastName, o.officeCode, o.city from their respective tables.

STEP 3: Sort the data first by the employeeNumber column and then by the officeCode column, both in ascending order, using the ORDER BY clause.

Solution Approach:
Write SQL query that retrieves the employee number, first name, last name, office code, and city for all possible combinations of employees and offices. It performs a cross join to combine every row from the employees table with every row from the offices table. The final result is ordered by employee number and office code in ascending order.

Step by step solution appraoch :

SELECT e.employeeNumber, e.firstName, e.lastName, o.officeCode, o.city: This part of the query specifies the columns we want to retrieve from the tables.
e.employeeNumber: This column represents the employee number.

e.firstName: This column represents the first name of the employee.

e.lastName: This column represents the last name of the employee.

o.officeCode: This column represents the office code.

o.city: This column represents the city of the office.

FROM employees e: This clause specifies the first table we want to retrieve data from, which is the employees table. It is given the alias “e”.

CROSS JOIN offices o: This clause performs a cross join operation between the employees table and the offices table. It combines every row from the employees table with every row from the offices table, resulting in a cartesian product of all possible combinations.

ORDER BY e.employeeNumber, o.officeCode: This clause specifies the sorting order of the result set. The result will be ordered by employee number in ascending order, and within each employee, the offices will be ordered by office code in ascending order.

Scaler solution:
SELECT 
 e.employeeNumber, e.firstName, 
 e.lastName, o.officeCode, o.city
FROM employees e
CROSS JOIN offices o
ORDER BY 
 e.employeeNumber, o.officeCode;
*/
select employeeNumber, firstName, lastName, o.officeCode, o.city 
from employees e, offices o
order by employeeNumber, o.officeCode

/*
6.
Write a query to find the npv of each query of the queries table.

Return the output order by id and year in the ascending order

Explanation:
The npv value of (7, 2018) is not present in the NPV table, we consider it 0.
The npv values of all other queries can be found in the NPV table.

Hints:
STEP 1: Firstly, join the tables queries and npv using LEFT JOIN based on the conditions that the id and year must be equal in both the tables. We use LEFT JOIN here because we want all the rows from queries table and some required rows from the npv table.

STEP 2: SELECT all the columns of queries table along with the npv column of the npv table. Use the IFNULL() function in order to assign 0 value to the instance where npv is NULL after the join.

STEP 3: Finally, sort the table by using the columns id and year in ascending order.

Scaler solution:
STEP 1: Firstly, join the tables queries and npv using LEFT JOIN based on the conditions that the id and year must be equal in both the tables. We use LEFT JOIN here because we want all the rows from queries table and some required rows from the npv table.

STEP 2: SELECT all the columns of queries table along with the npv column of the npv table. Use the IFNULL() function in order to assign 0 value to the instance where npv is NULL after the join.

STEP 3: Finally, sort the table by using the columns id and year in ascending order.

SELECT q.*, IFNULL(npv, 0) AS npv
FROM queries q
LEFT JOIN npv n
ON n.id = q.id 
AND n.year = q.year
ORDER BY id, year;
*/
select q.id, q.year, IFNULL(npv ,0) as npv
from queries q 
left join npv n
on n.year = q.year 
and n.id = q.id 
order by q.id

/*
7.
Write a query to report the name of each employee with a bonus of less than 1000.

Return the bonus as 'NULL' if an employee doesn’t have a bonus of less than 1000.
Return the result table sorted w.r.t. name of the employees in ascending order.

Hints:
Left join employee table with bonus and check if the bonus is less than 1000 or if the bonus is NULL (i.e. it doesn’t exist in the Bonus table).

Scaler solution:
SELECT
    employee.name, Bonus.bonus
FROM
    employee
        LEFT OUTER JOIN
    Bonus ON employee.empid = Bonus.empid
WHERE Bonus.bonus < 1000 or Bonus.bonus is null
order by employee.name;
*/

select  e.name, b.bonus
from employee e 
left join Bonus b 
on e.empId = b.empId 
where b.bonus < 1000
or b.bonus is null
order by e.name;

/*
8.
Write an SQL query to show the unique ID of each user, If a user does not have a unique ID replace just show null.

Return the results ordered by id (not 'unique_id') in ascending

Hints:
Do you know Outer Joins??

Sclaer solution:
select eu.unique_id
from employees e
left join employeeUNI eu
using(id)
order by id;
*/
select eu.unique_id 
from employees e
left join employeeUNI eu 
on e.id = eu.id 
order by e.id

/*
9.
Write a query to report all the sessions that did not get shown any ads.

Return the resultant table ordered by session_id in ascending order.

Sample Explanation:
The ad with ID 1 was shown to user 1 at time 5 while they were in session 1.
The ad with ID 2 was shown to user 2 at time 17 while they were in session 4.
The ad with ID 3 was shown to user 2 at time 20 while they were in session 4.
We can see that sessions 1 and 4 had at least one ad.
Sessions 2, 3, and 5 did not have any ads, so we return them.

Hints :
STEP 1: Select the column session_id from the Playback table.

STEP 2: To get the details of the ads played in each session, we use left join and join the tables Playback and Ads using the customer_id column. (i.e, This will give all the records from the Playback table and the matching records from the Ads table)

STEP 3: To check whether the Ad was shown to any user, the timestamp of the ad has to be between the start_time and end_time of the session, we check the same using the between and ‘and’ operators.

STEP 4: Now, we filter the records of all the sessions that did not get shown any ads using the where clause where the customer_id is null.

STEP 5: Use the order by clause to order the output based on the session_id column in ascending order.

Solution Approach:
SELECT session_id 
This line specifies that we want to select the session_id from the Playback table.

 FROM Playback p 
This line specifies the Playback table and assigns the alias p to it. The alias p will be used to refer to the records from this table in subsequent lines.

 LEFT JOIN Ads a ON a.customer_id = p.customer_id AND a.timestamp BETWEEN p.start_time AND p.end_time 
This line performs a left join between the Playback table (aliased as p) and the Ads table (aliased as a). The join condition specifies that the customer_id of a should match the customer_id of p, and the timestamp of a should be between the start_time and end_time of p. This join associates ads with playback sessions based on the customer ID and the time range.

 WHERE a.customer_id IS NULL 
This line specifies a filter condition to include only those records where the customer_id of a is null. This condition ensures that only playback sessions that do not have a corresponding ad record are selected.

 ORDER BY session_id 
This line specifies that the result set should be ordered in ascending order based on the session_id.

In summary, this query retrieves the session_id of playback sessions that do not have a corresponding ad. It matches records from the Playback table with the Ads table based on the customer ID and the time range. The result set is ordered by the session_id.

Scaler solution:
STEP 1: Select the column session_id from the Playback table.

STEP 2: To get the details of the ads played in each session, we use left join and join the tables Playback and Ads using the customer_id column. (i.e, This will give all the records from the Playback table and the matching records from the Ads table)

STEP 3: To check whether the Ad was shown to any user, the timestamp of the ad has to be between the start_time and end_time of the session, we check the same using the between and ‘and’ operators.

STEP 4: Now, we filter the records of all the sessions that did not get shown any ads using the where clause where the customer_id is null.

STEP 5: Use the order by clause to order the output based on the session_id column in ascending order.

select session_id
from Playback p
left join Ads a 
on a.customer_id = p.customer_id and 
a.timestamp between p.start_time and p.end_time
where a.customer_id is null
order by session_id;

*/
select session_id
from Playback p 
left join Ads a 
on p.customer_id = a.customer_id 
and a.timestamp between p.start_time and p.end_time 
where a.ad_id is null
order by session_id