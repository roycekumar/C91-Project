player1_name=localStorage.getItem("Player 1");
player2_name=localStorage.getItem("Player 2");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name+" : ";
document.getElementById("player2_name").innerHTML=player2_name+" : ";
document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;
document.getElementById("player_question").innerHTML="Question Turn - "+player1_name;
document.getElementById("player_answer").innerHTML="Answer Turn - "+player2_name;

all_operation="+-÷X"
var spe_operation=0;
function send(){
    var spe_operation=all_operation.charAt(Math.floor(Math.random() * 4));
    if(spe_operation=="+"){
        num1=document.getElementById("number_1").value;
        num2=document.getElementById("number_2").value;
        document.getElementById("ques").innerHTML="Q."+num1+spe_operation+num2;
        answer=parseInt(num1)+parseInt(num2);
        document.getElementById("output_span").style.display="inline-block";
        document.getElementById("answer_input").style.display="inline-block";
        document.getElementById("checking").style.display="inline-block";
        document.getElementById("ques").style.display="inline-block";
        console.log(answer);
        document.getElementById("number_1").value="";
        document.getElementById("number_2").value="";
    }
    if(spe_operation=="-"){
        num1=document.getElementById("number_1").value;
        num2=document.getElementById("number_2").value;
        document.getElementById("ques").innerHTML="Q."+num1+spe_operation+num2;
        answer=parseInt(num1)-parseInt(num2);
        document.getElementById("output_span").style.display="inline-block";
        document.getElementById("answer_input").style.display="inline-block";
        document.getElementById("checking").style.display="inline-block";
        document.getElementById("ques").style.display="inline-block";
        console.log(answer);
        document.getElementById("number_1").value="";
        document.getElementById("number_2").value="";
    }
    if(spe_operation=="X"){
        num1=document.getElementById("number_1").value;
        num2=document.getElementById("number_2").value;
        document.getElementById("ques").innerHTML="Q."+num1+spe_operation+num2;
        answer=parseInt(num1)*parseInt(num2);
        document.getElementById("output_span").style.display="inline-block";
        document.getElementById("answer_input").style.display="inline-block";
        document.getElementById("checking").style.display="inline-block";
        document.getElementById("ques").style.display="inline-block";
        console.log(answer);
        document.getElementById("number_1").value="";
        document.getElementById("number_2").value="";
    }
    if(spe_operation=="÷"){
        num1=document.getElementById("number_1").value;
        num2=document.getElementById("number_2").value;
        document.getElementById("ques").innerHTML="Q."+num1+spe_operation+num2;
        answer=parseInt(num1)/parseInt(num2);
        document.getElementById("output_span").style.display="inline-block";
        document.getElementById("answer_input").style.display="inline-block";
        document.getElementById("checking").style.display="inline-block";
        document.getElementById("ques").style.display="inline-block";
        console.log(answer);
        document.getElementById("number_1").value="";
        document.getElementById("number_2").value="";
    }
    final_answer=answer;
}