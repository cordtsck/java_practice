function ready(){
    console.log("page ready");
    let favs = document.forms.favs;
    let colorEL = favs.elements.color;
    console.log(colorEL.value);
    colorEL.onChange = function(){
        console.log(colorEl.value);


    colorEl.onchange= function(){
        console.log(colorEl.value);
        let el = document.createElement('p');
        el.innerHTML = "you typed" + coloeEl.value;
        today.append(el);

    };
    go.onclick = function(){
        alert("Please don't go");

    };
    weekend.onclick = function(){}




}
document.addEventListener("DOMContentLoaded", ready);


// function ready(){
//     consule.log("page ready");

//     today.innerHTML = "Tommorow";

//     let elem = document.createElement('div');
//     elem.innerHTML = "<p>Hi<strong>There<strong></p>";
//     elem.className = "special important";

//     today.prepend(elem);

//     //today.style.color = "purple";
//     //today.style.textAlign = "center";
//     today.classList.add("highlighted");
//     today.classList.remove("normal");



// }
// document.addEventListener("DOMContentLoaded", ready);








//cs.innerHTML = "Changes";
//console.log("Script.log");
//console.log(cs);
//cs.innerHTML = "<p>Now a paragraph</p>";
//cs.append("New");

//setTimeout(() => {
    //cs.append("Later");
//}, 2000);

//let x = 0;
//setInterval(() => {
    //empty.innerHTML = x + "Secounds";
    //x++;
    //if (x > 5) {
        //cs.innerHTML = "Done Counting";
    //}else{
        //cs.innerHTML = "Not Done Counting";
    //}

//}, 1000);

//let say = function(word){
    //cs.append("Saying" + word)
//};

//say("hi");
//say("see u");
//say("bye");

//let list = [1,2,3];

//let i = 0;
//while(i<list.length){
    //console.log("Logging"+ list[i]);
    //i++;


//}