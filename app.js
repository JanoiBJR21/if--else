let score = prompt("คะแนนของคุณ")
document.getElementById("scores").innerHTML = score
if (score >= 80) {
    document.getElementById("gerd").innerHTML = "A"
}else if(score >= 70){
    document.getElementById("gerd").innerHTML = "B"
}else if(score >=60){
    document.getElementById("gerd").innerHTML = "C"
}else if(score >= 50){
    document.getElementById("gerd").innerHTML = "D"
}else{
    document.getElementById("gerd").innerHTML = "F"
}