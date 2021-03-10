
questDb=[
{question:"What is the product of 2 and 4?",
 answers:["2","8","10","15"],
 correct_answer:"8"
},
{question:"Who is the founder of Pakistan?",
 answers:["Allama Iqal","Liaqat Ali khan","Quaid e Azam","Faiz Ahmed"],
 correct_answer:"Quaid e Azam"
},
{question:"MS-Word is an example of _____",
 answers:["An operating system","A processing device","An input device","Application software"],
 correct_answer:"Application software"
},
{question:"Ctrl, Shift and Alt are called .......... keys.",
 answers:["modifier","function"," alphanumeric","adjustment"],
 correct_answer:"modifier"
},
{question:"Please don't laugh ________ those beggars.",
 answers:["for","against","at","from"],
 correct_answer:"at"
},

{question:"The rain comes ______ the clouds",
 answers:["in","near","from","under"],
 correct_answer:"from"
},
{question:"|–4| + |4| – 4 + 4 = ?",
 answers:["0","2","4","8"],
 correct_answer:"0"
},
{question:"Allama Muhammad Iqbal delivered his famous Allahabad Address in?",
 answers:["1929","1930","1931","1932"],
 correct_answer:"1930"
},
{question:"Which pass connects Pakistan with Afghanistan?",
 answers:["Khunjerab Pass","Tochi Pass","Gomal Pass","Khyber Pass"],
 correct_answer:"Khyber Pass"
},
{question:"Pakistan Steel Mills is located in?",
 answers:["Karachi","Lahore","Gawadar","none"],
 correct_answer:"Karachi"
},
{question:"If David’s age is 27 years old in 2011. What was his age in 2003?",
 answers:["17 years","37 years","20 years","19 years"],
 correct_answer:"19 years"
},

{question:"What is the square of 15?",
 answers:["15","30","225","252"],
 correct_answer:"225"
},
]

var unattempted=12
var wrong=0
var min=2;
var sec=59
var qusetion_count=0
var score=0

var minutes=document.getElementById("minutes")
var seconds=document.getElementById("seconds")
var user=document.getElementById("username")
userfromlocal=localStorage.getItem('user')
var question=document.getElementById("question")
var ans1=document.getElementById("ans1")
var ans2=document.getElementById("ans2")
var ans3=document.getElementById("ans3")
var ans4=document.getElementById("ans4")
var option1=document.getElementById("option1")
var option2=document.getElementById("option2")
var option3=document.getElementById("option3")
var option4=document.getElementById("option4")


minutes.innerHTML=min
seconds.innerHTML=sec
user.innerHTML=userfromlocal

quiz()

setInterval(function(){
    sec--
    if(sec<10)
    seconds.innerHTML=`0${sec}`
    else
    seconds.innerHTML=sec
    if(sec==0 && min!=0){
        min--
        sec=60
        minutes.innerHTML=`0${min}`
    }
    else if(sec==0 && min==0){
        localStorage.setItem("scores",score)
        localStorage.setItem("unattempted",unattempted)
        localStorage.setItem("wrong",wrong)
        location.replace("../score/score.html")
    }
    },1000)

function quiz(){

    if(qusetion_count>questDb.length-1){
        localStorage.setItem("scores",score)
        localStorage.setItem("unattempted",unattempted)
        localStorage.setItem("wrong",wrong)
        location.replace("../score/score.html")
    }   
    var answers=document.quiz_questions.answer
    for(i=0;i<answers.length;i++){
        if(answers[i].checked)
        answers[i].checked=false
    }   

question.innerHTML=questDb[qusetion_count].question

ans1.value=questDb[qusetion_count].answers[0]
ans2.value=questDb[qusetion_count].answers[1]
ans3.value=questDb[qusetion_count].answers[2]
ans4.value=questDb[qusetion_count].answers[3]

option1.innerHTML=questDb[qusetion_count].answers[0]
option2.innerHTML=questDb[qusetion_count].answers[1]
option3.innerHTML=questDb[qusetion_count].answers[2]
option4.innerHTML=questDb[qusetion_count].answers[3]


}

function check_answer(){
    var answers=document.quiz_questions.answer
    for(i=0;i<answers.length;i++){
        if(answers[i].checked && answers[i].value===questDb[qusetion_count].correct_answer){
            score++
            break
        }else if(answers[i].checked && answers[i].value!==questDb[qusetion_count].correct_answer){
            wrong++
            break
        }
        
    }
    for(i=0;i<answers.length;i++){
        if(answers[i].checked){
            unattempted--
        }      
    }
    qusetion_count++
    quiz()
}