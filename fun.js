console.log("Connected");  


var firebaseConfig = {
    apiKey: "AIzaSyB9h_zSWNsHQg1A7WRmx3cQADcVTJz3lyg",
    authDomain: "project-j-38ca8.firebaseapp.com",
    databaseURL: "https://project-j-38ca8-default-rtdb.firebaseio.com",
    projectId: "project-j-38ca8",
    storageBucket: "project-j-38ca8.appspot.com",
    messagingSenderId: "43143293522",
    appId: "1:43143293522:web:c32422e43859fe9e900d8b"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


var user_1,user_2,user_3

var amountz;
var e1,e2,e3;
var stat;

function ready(){
    user_1=document.getElementById("no1").value;
    user_2=document.getElementById("no2").value;
    user_3=document.getElementById("no3").value;
    address_u=document.getElementById("address").value;
} 


document.getElementById("equal").onclick=function(){

    ready();
    var q=document.getElementById("p").value;
    console.log(q);
    e1=(q/3);
    e2=(q/3);
    e3=(q/3);
    stat="no";
    console.log(e1);
    console.log(e2);
    console.log(e3);

    firebase.database().ref("equalq/"+Math.random().toString(36).substr(2, 9)).set({

        User1: user_1,
        User1_a:e1,
        User2:user_2,
        User2_a:e2,
        User3:user_3,
        User3_a:e3,
        Amount:q,
        Address:address_u,
        Status:stat


    });
}




document.getElementById("percent").onclick=function(){

    ready();
    var q=document.getElementById("p").value;
    console.log(q);
    
    var aa= [75,35,55];
    var a = aa[Math.floor(Math.random()*aa.length)];
    console.log(a)
    stat="no"
    if(a==75){
        var b=20
        var c=5
    }
    else if(a==35){
        var b=45
        var c=20
    }
    else if(a==55){
        var b=5
        var c=40
    }
    console.log(b)
    console.log(c)

    e1=(q*(a/100))
    e2=(q*(b/100))
    e3=(q*(c/100))

    firebase.database().ref("splitq/"+Math.random().toString(36).substr(2, 9)).set({

        User1: user_1,
        User1_a:e1,
        User2:user_2,
        User2_a:e2,
        User3:user_3,
        User3_a:e3,
        Amount:q,
        Address:address_u,
        Status:stat


    });
}





document.getElementById("wild").onclick=function(){

    ready();
    var q=document.getElementById("p").value;
    console.log(q);
    
    var aa= ["x","y","z"];
    var a = aa[Math.floor(Math.random()*aa.length)];
    console.log(a)
    stat="no"
    if(a=="x"){
        e1=q
        e2=0
        e3=0
    }
    else if(a=="y"){
        e1=0
        e2=q
        e3=0
    }
    else if(a=="z"){
        e1=0
        e2=0
        e3=q
    }


    firebase.database().ref("zeroq/"+Math.random().toString(36).substr(2, 9)).set({

        User1: user_1,
        User1_a:e1,
        User2:user_2,
        User2_a:e2,
        User3:user_3,
        User3_a:e3,
        Amount:q,
        Address:address_u,
        Status:stat


    });
}































