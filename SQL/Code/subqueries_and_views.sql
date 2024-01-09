/*
10.

TA's explanation:
Here's an explanation of the subqueries in your query:
(seat_id+1 IN (SELECT seat_id FROM cinema WHERE free=1)): This part checks if there is a seat with seat_id + 1 that is available (free=1). If the condition is true, it means the current seat and the next one are consecutive available seats.
OR seat_id-1 IN (SELECT seat_id FROM cinema WHERE free=1): This part checks if there is a seat with seat_id - 1 that is available (free=1). If the condition is true, it means the current seat and the previous one are consecutive available seats.
*/
