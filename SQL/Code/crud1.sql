/*
1.
Write an SQL query to fetch the names of the customer that are not referred by the customer with id = 102.

Customer:
Col_name     Type
id           int
name         varchar
refree-Id    int

Sample Input:
id          name           refree_id
100        Geneovera        133
101        Melodie          101
102        Teddie           195
103       Gwenneth          102
104        Karolina         191
105        Pearline         159
106        Daryl            102

Sample Output:
Name
Geneovera
Melodie
Teddie
Karolina
Pearline

Explanation: Only customers Gwenneth and Daryl are referred with id=102
*/

select name from customer where referee_id != 102;

/*
2.
Write an SQL query to report the unique customers with postive revenue in the year 2021.

Customers:

column_name   type
customer_id    int
year           int
revenue        int

Sample input
customer_id     year     revenue
108             2021      -1
106             2019      15
102             2019      -2
100             2021      4

Sample output:
customer_id
100

Explanation: Only customer_id 100 has positive revenue in the year 2021

Hint:
Check for a positive revenue in the year 2021
Any operator to check unique customers??
*/
SELECT distinct customer_id from customers where revenue > 0 and year=2021;

/*
3.
Write a query to calculate the salary of all employees after an increment of 20%. Save the newly calculated salary column as 'New_salary'

Emplyees:
column_name    type
emp_id         int
name           varchar
salary         int

Return the columns emp_id, name, salary, and 'New_salary'.
Order the output by the emp_id in ascending order.
Steps to calculate the salary increment:

Multiply the current salary by the percentage of the increment.
Divide the result by 100.
Then add the result to the current salary.
Name the column as 'New_Salary'
Round off the 'New_salary'.

Sample Input:
Employees:
emp_id     name       salary
1          Luis        6142
2          Den         11259
3          Alexander   5374
4          Shelli      12572
5          Sigal       6897

Sample output:
emp_id     name        salary      New_salary
1          Luis         6142       7370
2          Den          11259      13511
3          Alexander    5374       6449
4          Shelli       12572      15086
5          Sigal        6897       8276

Explanation: The New salary for Luis can be calculated as 6142+(0.2*6142) = 7370. 
In a similar manner, the New_salary is calculated for each employee.
*/
select emp_id, name, salary, salary + round((salary * 20)/100) as New_salary from employees;
/*
4.
Write a query to calculate the sub_total for each order, return the details of the orderNumber, productCode, and sub_total.

orderDetails:
column_name         type
orderNumber         int
productCode         varchar
quantityOrdered     int
priceEach           int
orderLineNumber     int

Note:

Round off the sub_total up to two decimal places.
Order the output by the orderNumber in ascending order and then by sub_total in descending order

Sample input:
orderNumber     productCode     quantityOrdered     priceEach       orderLineNumber
10100           S18_1749        30                  136.00          3
10100           S18_2248        50                  55.09           2
10101           S18_2345        25                  108.06          4

Sample Output:
orderNumber     productCode     sub_total
10100           S18_1749        4080.00
10100           S18_2248        2754.50
10101           S18_2345        4343.56

Sample Explanation:
To get the sub_total for each orderNumber, we must multiply the quantityOrdered column with the PriceEach column.
*/
Select orderNumber, productCode, Round((quantityOrdered * priceEach),2) as sub_total 
from orderdetails
order by orderNumber asc, sub_total desc;

/*
5.
Write a query to get all the details of all the employees from job_history except for the employee with id 101

Return all the fields.
Return the result ordered by employee_id and job_id in ascending order.

job_history:
column_name         type
emplyee_id          int
start_date          DATE
end_date            DATE
job_id              varchar
department_id       int

Sample input:
employee_id     start_date      end_date        job_id      department_id
101             1989-09-21      1993-10-27      AC_ACCOUNT  110
101             1993-10-28      1997-03-15      AC_MGR      110
102             1993-01-13      1998-07-24      IT_PROG     60
114             1998-03-24      1999-12-31      ST_CLERK    50
122             1999-01-01      1999-12-31      ST_CLERK    50

Sample output:
employee_id     start_date      end_date        job_id      department_id
102             1993-01-13      1998-07-24      IT_PROG     60
114             1998-03-24      1999-12-31      ST_CLERK    50
122             1999-01-01      1999-12-3       ST_CLERK    50
*/
select * from job_history where employee_id != 101 
order by employee_id,job_id

/*
6.
Write a query to display the titles of the movies that are released (i.e., release_year) after 2014 and have an average vote rating (i.e.,vote_average) greater than 7.

Return the column 'original_title'.
Return the result ordered by original_title in ascending order.
Dataset description for movies table:

1) id - tmdb movie id

2) imdb_id - imdb movie id

3) popularity -A numeric quantity specifying the movie's popularity.

4) budget -The budget in which the movie was made.

5) revenue - The worldwide revenue generated by the movie.

6) original_title- The title of the movie

7) cast - The name of the lead and supporting actors.

8) homepage - A link to the homepage of the movie.

9) director - The name of the director of the movie

10) tagline - Movie's tagline.

11) keywords -The keywords or tags related to the movie.

12) overview -A brief description of the movie.

13) runtime -The running time of the movie in minutes.

14) genres -The genres of the movies

15) production_companies-The production house of the movie.

16) release_date -the date on which it was released.

17) vote_count -the count of votes received.

18) vote_average - average ratings the movie received.

19) release_year - the year on which it was released.

Sample Output:
original_title:
Amy
Brroklyn
Carrol
*/
select original_title 
from movies 
where release_year > 2014 
and vote_average > 7
order by original_title;

/*
7.
Write a query to find the details of those employees who work in the departments with numbers included in 30, 40, or 90.

Return the result ordered by employee_id in ascending order.

Sample output:
employee_id     first_name      job_id      department_id
100             Steven          AD_PRES         90
116             Shelli          PU_CLERK        30
Explanation: The above employees have department_id included in 30, 40, or 90.
*/
select employee_id, first_name, job_id, department_id 
from employees
where department_id in (30,40,90)

/*
8.
Write a query to find the employees whose officeCodes are not included in 4,6,7.
Return the result ordered by firstName and lastName in ascending order.

Sample Output:
firstName       lastName        jobTitle
Diane           Murphy          President
Foon yue        Tseng           Sales Rep                        

Explanation: The above table shows the employees whose office codes are not 4,6 or 7.
*/
select firstName, lastName, jobTitle from employees
where officeCode not in (4,6,7)
order by firstName, lastName;

/*
9.
Display the details of the movies which belong to the 'Horror' genre.

Return the columns 'original_title', and 'popularity'.
Return the result ordered by the popularity in descending order.
Dataset description for movies table:

1) id - tmdb movie id

2) imdb_id - imdb movie id

3) popularity -A numeric quantity specifying the movie's popularity.

4) budget -The budget in which the movie was made.

5) revenue - The worldwide revenue generated by the movie.

6) original_title- The title of the movie

7) cast - The name of the lead and supporting actors.

8) homepage - A link to the homepage of the movie.

9) director - The name of the director of the movie

10) tagline - Movie's tagline.

11) keywords -The keywords or tags related to the movie.

12) overview -A brief description of the movie.

13) runtime -The running time of the movie in minutes.

14) genres -The genres of the movies

15) production_companies-The production house of the movie.

16) release_date -the date on which it was released.

17) vote_count -the count of votes received.

18) vote_average - average ratings the movie received.

19) release_year - the year on which it was released.

Sample output:
original_title      popularity
Ex MAchina          6.11885
Taken 3             5.74976
*/
select original_title , popularity from movies
where genres = 'Horror'
order by popularity desc;