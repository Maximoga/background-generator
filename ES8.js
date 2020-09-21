
 ///ES 8

 //padStart() and padEnd()
 "turtle".padStart(10)
"    turtle"
"turtle.padEnd(10)

"turtle".padEnd(10)
"turtle    "

turtle.trim().padEnd(9, '=')
"🐢======="


Object.values
Object.entries
Object.keys

let obj = {
    username0 :"santa",
    username1 : "Rudolph",
    username2 : "mr Grinch"
}

Object.keys(obj).forEach((key, index) =>{
    console.log(key, obj[key]);
})

username0 santa
username1 Rudolph
username2 mr Grinch

Object.values(obj).forEach(value =>{
    console.log(value)
})

santa
Rudolph
mr Grinch

Object.entries(obj).forEach(value =>{
    console.log(value)
}) 

["username0", "santa"]
["username1", "Rudolph"]
["username2", "mr Grinch"]

Object.entries(obj).map((value)=>{
    return value[1] + value[0].replace("username", " ")
})

 ["santa 0", "Rudolph 1", "mr Grinch 2"]