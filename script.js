

let display = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let string = "";
let buttonArray = Array.from(buttons);

buttonArray.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Access the innerHTML of the clicked button
        if(e.target.innerHTML== 'DEL'){
            string = string.substring(0,string.length-1)
            display.value = string;

        }else if(e.target.innerHTML== 'AC'){
            string = "";
            display.value = string;
        
        }else if(e.target.innerHTML== '='){
            string = eval(string)
            display.value = string;

        }else if(e.target.innerHTML== '^2'){
            string = (Math.pow(parseFloat(string), 2)).toString();
            display.value = string;
        }
        
        else{
            let buttonValue = e.target.innerHTML;
        string += e.target.innerHTML;
        display.value = string;
        
        }
        
    });
});        


