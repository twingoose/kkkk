function send()
{
number_1 = document.getElementById("number_1").value;
number_2 = document.getElementById("number_2").value;
actual_answer = parseInt(number_1) * parseInt(number_2);
question_number="<h4>" + number1 + "X" + number2  + "</h4>";
input_box="<br>Answer : <input type='text' id='input check_box'>"
check_button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
row =  question_number + input_box + check_button

dcument.goetElementById("output").innerHTML = row;
dcument.goetElementById("number1").value = "";
    dcument.goetElementById("number2").value ="";

















}