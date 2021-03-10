function startagain(){
    location.replace("../index.html")
}

var unattempt=document.getElementById("unattempt")
var wrong=document.getElementById("wrong")
var correct=document.getElementById("correct")
var result=document.getElementById("result")
var percentage

var scorefromlocal=localStorage.getItem("scores")
var unattemptfromlocal=localStorage.getItem("unattempted")
var wrongfromlocal=localStorage.getItem("wrong")

percentage=(scorefromlocal*100)/12
percentage=percentage.toFixed(2)

unattempt.innerHTML=unattemptfromlocal;
wrong.innerHTML=wrongfromlocal;
correct.innerHTML=scorefromlocal

result.innerHTML=`${percentage}%`
