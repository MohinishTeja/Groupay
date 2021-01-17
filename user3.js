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




    let reference = firebase.database().ref("equalq");
    let reference1=firebase.database().ref("splitq");
    let reference2=firebase.database().ref("zeroq");
    reference.on("value",gotData);
    reference1.on("value",gotData1);
    reference2.on("value",gotData2);

    
function gotData(data){
    let expens = data.val();
    let keys = Object.keys(expens);
    console.log(keys.length);
    for( let i=0;i<keys.length;i++){

    let a =keys[i];

    let am = expens[a].User3_a;
    let address=expens[a].Address;
    console.log(am)
    am=Math.round(am * 100) / 100
    console.log(am)

    console.log(am,address);

    console.log(am,address);
    
    let expense=document.querySelector(".box");
    
    expense.innerHTML+= `
        
    <div class="cards">
        <h1 id="h11">To</h1>
        <p id="p11">${address}</p>
        <h3 id="h33">$${am}</h3>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    `
    }
    
}

function gotData1(data){
    let expens = data.val();
    let keys = Object.keys(expens);
    console.log(keys.length);
    for( let i=0;i<keys.length;i++){

    let a =keys[i];

    let am = expens[a].User3_a;
    let address=expens[a].Address;
    console.log(am)
    am=Math.round(am * 100) / 100
    console.log(am)

    console.log(am,address);

    console.log(am,address);
    
    let expense=document.querySelector(".box");
    
    expense.innerHTML+= `
        
    <div class="cards">
        <h1 id="h11">To</h1>
        <p id="p11">${address}</p>
        <h3 id="h33">$${am}</h3>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>

    `
    }
    
}

function gotData2(data){
    let expens = data.val();
    let keys = Object.keys(expens);
    console.log(keys.length);
    for( let i=0;i<keys.length;i++){

    let a =keys[i];

    let am = expens[a].User3_a;
    let address=expens[a].Address;
    console.log(am)
    am=Math.round(am * 100) / 100
    console.log(am)

    console.log(am,address);

    console.log(am,address);
    
    let expense=document.querySelector(".box");
    
    expense.innerHTML+= `
        
    <div class="cards">
        <h1 id="h11">To</h1>
        <p id="p11">${address}</p>
        <h3 id="h33">$${am}</h3>
    </div>
    <br>
    `
    }
    
    
}
