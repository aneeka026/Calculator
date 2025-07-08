let input = document.querySelector("#inputPl");
let btn = document.querySelectorAll("button");

let string = "";
let btnsArray = Array.from(btn); // converts the NodeList of buttons into a real JavaScript array

btnsArray.forEach(button => {
    button.addEventListener('click' ,(e) => {

        if(e.target.innerHTML == "DEL"){
            string = string.substring(0,string.length-1);  
            input.value = string; //update input box to show the new string (after deleting)
        }
        else if(e.target.innerHTML == "AC"){
            string = ""; 
            input.value = string;
        }
        else if(e.target.innerHTML == "="){
            string = eval(string);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
})

