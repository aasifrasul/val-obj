# val-obj
A simple tool to validate an actual Object.
Optionally it can check whether a key exists on the specified Object.
Also it can check against the value of the key with a specified value.

So lets say we have an object
const user = {
	name: 'John Doe',
};

and we want to check whther the variable is an actual object

valObj(user) // returns true;

Lets say we want to also check if this particular object contains the key 'name'

valObj(user, 'name') // returns true;

Also we wnat to check that the value of the key is 'John Doe'

valObj(user, 'name', 'John Doe') // returns true;


valObj(null) // returns false;

valObj([]) // returns false;

valObj(234) // returns false;

valObj('234') // returns false;

valObj(undefined) // returns false;
