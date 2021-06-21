/* we defined a function called "whatsForBreakFast"(). it takes a day as an argument, and should return a string that represents breakfast. 

My challange is to write a 'switch' statement inside the function so that it returns the breakfast for each day of the week, as defined in the list.

"monday": "ham and eggs";
"tuesday": "sausage and mushrooms";
"wednesday": "pancakes and strawberries";
"thursday": "ceral and milk";
"friday": "bagel and jam";
"saturday": "eggs and beans";
"sunday": "waffles and OJ";
default: "waffles and OJ"

the day will be passed into the function by the test

Challenge: 

1/ write a switch statement inside the 'whatsForBreakFast()' function which uses 'day' as an argument to compare afgainst the cases.

2/ ues the 'return' statement to return the 'breakfast' for each case, rather that the console logging it.

Requirements:

1/ the breakfast returned from the switch statement must match the list above exactly.

2/ the day passed into the fuction will be passed in exactly as shown above. 

*/



function whatsForBreakfast(day) {

  // this function determines whats for breakfast


 //statement goes in the curley brackets, to make the function work

  switch (day) {
    case "monday":
    return "ham and eggs";

    case "tuesday":
    return "sausage and mushrooms";

    case "wednesday":
    return "pancakes and strawberries";

    case "thursday":
    return "ceral and milk";

    case "friday":
    return "bagel and jam";

    case "saturday":
    return "eggs and beans";

    case "sunday":
    return "waffles and OJ";

    default:
    return "waffles and OJ";


  }   
}

let breakfast = whatsForBreakfast ("friday");

console.log(breakfast);

