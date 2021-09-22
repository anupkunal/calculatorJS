var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");
var display1 = document.getElementById("display1");
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        var value = this.getAttribute('data-value');
        if (value == 'ac') {
            display1.innerText = "";
            display.innerText = "";
        } else {
            display1.innerText = value;
        }

        if (value != '=' && value != 'ac')
            display.innerText += value;

        if (value == '=') {
            display1.innerText = eval(display.innerText);
        }
    });
}
document.addEventListener('keydown', (event) => {
    var value = event.key;
    if (value == '1' || value == '2' || value == "Backspace") {

        if (value == "Backspace") {
            display1.innerText = "";
            display.innerText = "";
        } else {
            display1.innerText = value;
        }

        if (value != '=' && value != 'Backspace' && value != 'Enter')
            display.innerText += value;

        if (value == '=' || value == 'Enter') {
            display1.innerText = eval(display.innerText);
        }
    }
});