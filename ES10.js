//ES10
//FLAT()

const array = [1,[2,[3],4],5];
array.flat(2);
[1, 2, 3, 4, 5]

const entries = ["sam","lara","george",,,,,,"michael"]
entries.flat()

The flat() method creates and returns a new array 
with all sub-array elements merging into it recursively 
up to the specified depth.

//FlatMap

flatMap()

The flatMap() method returns a new array formed by 
applying a given callback function to each element of the 
array, and then flattening the result by one level. It is 
identical to a map() followed by a flat() of depth 1, 
but slightly more efficient than calling those two methods separately.

// trimStart and trimEnd

useremail1 = "        eddytheeagle@gmail.com";
useremail2 = "johnnydangerous@hotmail.com";
useremail1.trimStart()
useremail2.trimEnd()


// fromEntries

userProfile = [["georgeTheBeast" , 33],["SandroErBestemmia", 39]]

Object.fromEntries(UserProfile);
{georgeTheBeast: 33, SandroErBestemmia: 39}
SandroErBestemmia: 39
georgeTheBeast: 33

comes from:
Object.entries that does the opposite

The Object. fromEntries() method takes a list of key-value 
pairs and returns a new object whose properties are given 
by those entries. ... fromEntries() performs the reverse of Object.

// try and catch


try {
   bob + "hi"
} catch {
 console.log("you meessed up")
}

you messed up
undefined

The try statement allows you to define a block of code 
to be tested for errors while it is being executed. 
The catch statement allows you to define a block of code 
to be executed, if an error occurs in the try block. 
The JavaScript statements try and catch come in pairs