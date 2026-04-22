//alert("gift that showed us her jamb result")
//console.log("g
//function



/** 
 *  CHALLENGE - CREATE GRADE CHECKER FUNCTION
 * 
 * the function should request for a score and then give 
 * the corresponding grade
 * 
 * GRADE
 * A - 70 and above 
 * B - 60 TO 69
 * C - 50 to 59
 * D - 40 To 49
 * F - 0  to 39
 * 
 * 
 * STEPS
 * 1 get score from user
 * 2 check if score entyered is valid 
 * 3 grade based on score
 * 
 * 
 
*/
function checker(){
// 1 get score from user
    let score = prompt("please enter a score  between 0 and 100")
    score = parsefloat(score)

    //2 check if score entered is valid 
let isValid;
if (score >= 0 && score <= 100) {
    isValid = true
}
    else{ isValid = false
    }
    console.log(`validity of + score:`,isValid)
}

//3 grade based on score

checker()

if (isValid) {
    if (score >=70){alert("congratulations, you got an A")

    } else if (score >=60 && score > 70){
        alert("you got a B. WELLDONE")
    } else if (score >= 40 && score < 50)
     alert("you got a C")
} else if (score >= 40 && score < 50){alert("you escaped - D")
    
 } else if alert
("you don fail o")
    ("you entered an invalid number")

    }

    
    


    function checkerWithScwitch(){
        // 1 get score from user 
        let score = prompt("please enter a score between 0 and 100")
        score = parsefloat(score)
        
        //2 check if score  entered is valid
        let isValid;
        if (score >= 0 && score <= 100){}
        
    }

let number = prompt("enter a number between 1 and 5")
number = parsefloat(number)

switch (number) {
    case 1:
        alert("you pressed 1")
        break;

        case 2: 
        alert("you pressed 2")
        break;

        case 3:
            alert("you pressed 3")
            break;
            case 4:
            alert("you pressed 4")
            break;
            

           
           
     case 5:
                alert("you pressed 5")
                break;


}









