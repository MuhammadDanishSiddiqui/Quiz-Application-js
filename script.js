function start(){
var user=document.getElementById("name").value
if(user==="" && user.length<3){
    alert("Name must be provided and must contain atleast 3 characters")
}
else{
    localStorage.setItem("user",user)
    location.replace("./quiz/quiz.html")
}
}
