/*
1.

Authors table with fields: AuthorID, FirstName, LastName and DOB.
Books table with fields: BookID, Title, PublicationDate and AuthorID.

Which attribute is the primary key in the Authors table?

Options:
FirstName
LastName
DOB
AuthorID

Ans: 
AuthorID
*/

/*
2.
Authors table with fields: AuthorID, FirstName, LastName and DOB.
Books table with fields: BookID, Title, PublicationDate and AuthorID.

In the Books table, what role does the AuthorID play?

Options:
It serves as the primary key.
It serves as the foreign key linking to the Authors table.
It serves no particular role.
It is a candidate key.

Ans:
It serves as the foreign key linking to the Authors table.
*/

/*
3.
Authors table with fields: AuthorID, FirstName, LastName and DOB.
Books table with fields: BookID, Title, PublicationDate and AuthorID.

If we try to delete a record from the Authors table where the AuthorID matches with AuthorID in the Books table, what will happen?

Options:
The deletion will be successful.
The deletion will be rejected.
The Books table will be deleted.
The Authors table will be emptied.

Ans:
The deletion will be rejected.
*/

/*
4.
In the context of relational databases, what is the primary function of a primary key?

Options:
To link tables together
To uniquely identify each record in a table
To hold information about a particular attribute
To allow fields to be null

Ans:
To uniquely identify each record in a table
*/

/*
5.
Which of the following statements about foreign keys is true?

Options:
A foreign key in a table must always correspond to the primary key in another table.
A foreign key is a column or set of columns in one table that references the primary key or a unique key in another table.
A foreign key cannot be null.
A foreign key always has the same name as the primary key it references.

Ans:
A foreign key is a column or set of columns in one table that references the primary key or a unique key in another table.
*/

/*
6.
Consider three tables in a database:
Student table with fields: StudentID (primary key), FirstName, LastName and DOB
Courses table with fields: CourseID (primary key), CourseName and CreditHours
Enrollment table with fields: EnrollmentID (primary key), StudentID, CourseID and EnrollmentDate

In the Enrollment table, which specific field serves as a foreign key and establishes a relationship with another table by referencing its primary key?

Options:
EnrollmentID
StudentID
CourseID
Both B and C

Ans:
Both B and C
*/

/*
7.
Orders(OrderID, CustomerID, EmployeeID, OrderDate, ShipperID)

If the OrderID is a primary key, which of the following is true?

Options:
OrderID can contain null values.
OrderID can contain duplicate values.
OrderID must be unique and not null.
OrderID can contain either null values or duplicate values, but not both.

Ans:
OrderID must be unique and not null.

*/

/*
8.
If both OrderID and CustomerID together can be used to uniquely identify a record in the Orders table, this combination of keys is known as:

Options:
Composite Key
Candidate Key
Super Key
Primary Key

Ans:
Composite Key
*/

/*
9.
Employees table has fields: EmpID (primary key), FirstName, LastName, Email, Phone, DOB and Address.

Is it possible for two employees to share the same Email in the Employees table, if Email is a candidate key?

Options:
Yes
No

Ans:
No
*/

/*
10.
If there is another table Payroll with a field EmpID which refers to EmpID in Employees, what kind of key is EmpID in the Payroll table?

Options:
Composite Key
Secondary Key
Primary Key
Foreign Key

Ans:
Foreign Key
*/

/*
10.
If there is another table Payroll with a field EmpID which refers to EmpID in Employees, what kind of key is 
EmpID in the Payroll table?

Options:
Composite Key
Secondary Key
Primary Key
Foreign Key

Ans:
Foreign Key
*/

/*
11.

Consider the following scenario

Students Table
id Student_name Branch_id
1   Jay          10
2   Mohit         1
3   Deepak        13

Branch Table
barnch_id    branch_name
10            computer science
13            Electronics
1              Civil

If a foreign key is set with the ON DELETE CASCADE option, what happens when a branch with 
branch_id 10 is deleted from the "Branch" table?

Options:
All Students with branch_id 10 will have their branch_id set to NULL.
All Students with branch_id 10 will be deleted from the "Students" table.
The deletion of the branch with branch_id 10 will not affect the "Students" table.
All Students in the "Students" table will be updated with branch_id 10.

Ans:
All Students with branch_id 10 will be deleted from the "Students" table.
*/

/*
12.
Consider the following scenario

Students Table
id Student_name Branch_id
1   Jay          10
2   Mohit         1
3   Deepak        13

Branch Table
barnch_id    branch_name
10            computer science
13            Electronics
1              Civil

If a foreign key is set with the ON UPDATE SET NULL option, 
what happens when a branch with branch_id 13 is updated from the “Branch” table?

Options:
All Students with branch_id 13 will have their branch_id set to NULL.
All Students with branch_id 13 will be updated in the "Students" table.
The update of the branch with branch_id 13 will not affect the "Students" table.
All Students in the "Students" table will be updated with branch_id 13.

Ans:
All Students with branch_id 13 will have their branch_id set to NULL.
*/

/*
Consider the following scenario

Students Table
id Student_name Branch_id
1   Jay          10
2   Mohit         1
3   Deepak        13

Branch Table
barnch_id    branch_name
10            computer science
13            Electronics
1              Civil

What is the default action taken by the MySQL database when a foreign key is defined without any 
explicit ON DELETE or ON UPDATE options?

Options:
All employees with matching branch_id will be deleted.
The update or deletion of the department will not affect the "Students" table.
All employees with matching branch_id will have their branch_id set to NULL.
All employees with matching branch_id will have their branch_id set to the default value.

Ans:
The update or deletion of the department will not affect the "Students" table.
*/

/*
14.
Consider the following scenario

Students Table
id Student_name Branch_id
1   Jay          10
2   Mohit         1
3   Deepak        13

Branch Table
barnch_id    branch_name
10            computer science
13            Electronics
1              Civil

The ON DELETE SET DEFAULT option is only functional under which circumstances?

Options:
When the branch_id of the "Branch" table is updated, employees with matching branch_id will be set to their default branch_id.
When the branch_id of the "Branch" table is updated, employees with matching branch_id will be updated to NULL.
When the branch_id of the "Branch" table is deleted, employees with matching branch_id will be deleted as well.
When the branch_id of the "Branch" table is deleted, employees with matching branch_id will be set to their default branch_id.

Ans:
When the branch_id of the "Branch" table is deleted, employees with matching branch_id will be set to their default branch_id.

*/