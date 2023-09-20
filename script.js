const hei =document.getElementById("height");
const wei =document.getElementById("weight");
const submit =document.querySelector(".submit");

submit.addEventListener("click" , ()=>{
    if (hei.value.trim()=== "" || wei.value.trim()=== ""){
        document.querySelector(".error").innerHTML="fill both field";
        
   }
   else if(isNaN(hei.value) || isNaN(wei.value)){
    
    document.querySelector(".error").innerHTML="enter a number";
    
   }
   else{
    document.querySelector(".error").style.display="none"
    var a=parseFloat(hei.value);
    var b=parseFloat(wei.value);
    var sum =b/(a * a);
    var total=Math.round(sum*100)/100;
    document.querySelector(".bmi").innerText=total;
     console.log(total);
     if(sum>=30)
     {
        document.querySelector(".status").innerText="OBESITY";
     }
     else if(sum >= 25){
        document.querySelector(".status").innerText="Over Weight";
     }
     else if(sum >=18.6){
        document.querySelector(".status").innerText="Nomal Weight";
     }
     else if(sum <= 18.6){
        document.querySelector(".status").innerText="Uder-Weight";
     }
     else{
        document.querySelector(".status").innerText="";
     }  
   }
});

//display questionCount

countdown();
var countdownDate = new Date("sept 14,2023 16:37:52").getTime();
var  countdown= setInterval(function(){
var now =new Date().getTime();
var timeleft = countdownDate-now;

var days= Math.floor(timeleft/(1000*60*60*24))

document.querySelector(".days").innerHTML=days+"d"
},1000)
