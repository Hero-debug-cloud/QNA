// for card-1 

var count1=0;
var adding1=document.querySelector(".add-1");
adding1.addEventListener('click',function(){
    count1++;
    if(count1%2!=0){    
        document.getElementById("changing-1").classList.remove("hidden");
        document.getElementById("changing-1").classList.add("appear");      //addding hidden elements
        document.querySelector(".add-1").innerHTML="-";
        document.querySelector(".card").classList.add("changes");
    }
    else{
        document.getElementById("changing-1").classList.add("hidden");
        document.getElementById("changing-1").classList.remove("appear");     // again hidding that elements
        document.querySelector(".add-1").innerHTML="+";                
        document.querySelector(".card-1").classList.remove("changes");
    }
});



var count2=0;
var adding2=document.querySelector(".add-2");
adding2.addEventListener('click',function(){
    count2++;
    if(count2%2!=0){
        document.getElementById("changing-2").classList.remove("hidden");
        document.getElementById("changing-2").classList.add("appear");
        document.querySelector(".add-2").innerHTML="-";
        document.querySelector(".card-2").classList.add("changes");
    }
    else{
        document.getElementById("changing-2").classList.add("hidden");
        document.getElementById("changing-2").classList.remove("appear");
        document.querySelector(".add-2").innerHTML="+";
        document.querySelector(".card-2").classList.remove("changes");
    }
});






var count3=0;
var adding3=document.querySelector(".add-3");
adding3.addEventListener('click',function(){
    count3++;
    if(count3%2!=0){
        document.getElementById("changing-3").classList.remove("hidden");
        document.getElementById("changing-3").classList.add("appear");
        document.querySelector(".add-3").innerHTML="-";
        document.querySelector(".card-3").classList.add("changes");
    }
    else{
        document.getElementById("changing-3").classList.add("hidden");
        document.getElementById("changing-3").classList.remove("appear");
        document.querySelector(".add-3").innerHTML="+";
        document.querySelector(".card-3").classList.remove("changes");
    }
});


