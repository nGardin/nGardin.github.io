
    $(window).scroll(function(){
        $("#bigLogo").css("opacity", 1 - $(window).scrollTop() / 200);
        $("#bigText").css("opacity", 1 - $(window).scrollTop() / 400)
        $("#projectBox").css("opacity", 1 - $(window).scrollTop() / 400)
      });
    // Sliding Projects Script
    var cont = document.getElementsByClassName("scrollingDiv");
    var boxes = document.getElementsByClassName("projectBox");

    var lB = document.getElementById("leftButton");
    var rB = document.getElementById("rightButton");

    var pos1 = document.getElementById("one1");
    var pos2 = document.getElementById("two2");
    var pos3 = document.getElementById("three3");
    var pos4 = document.getElementById("four4");
    var pos5 = document.getElementById("five5");

    var moves = 0;
    function moveBoxesLeft(){
        if(moves > 0){
            for(var i=0; i<boxes.length; i++){
                
                if($(window).width()<600){
                    boxes[i].style.transform += "translateX(205%)";
                    boxes[i].style.transition = "1s";
                }
                else{
                    boxes[i].style.transform += "translateX(104%)";
                    boxes[i].style.transition = "1s";
                }	
            }
            moves--;
        }

        if(moves==0){
            pos1.classList.add("col");
            pos2.classList.add("col");
            pos3.classList.add("col");
            pos4.classList.remove("col")
            pos5.classList.remove("col")
            lB.style.display = "none"
            rB.style.display = "block"
        }
        else if(moves==1){
            pos1.classList.remove("col");
            pos2.classList.add("col");
            pos3.classList.add("col");
            pos4.classList.add("col")
            pos5.classList.remove("col")
            lB.style.display = "block"
            rB.style.display = "block"
        }
        else{
            pos1.classList.remove("col");
            pos2.classList.remove("col");
            pos3.classList.add("col");
            pos4.classList.add("col")
            pos5.classList.add("col")
            lB.style.display = "block"
            rB.style.display = "none"
        }
    }

    function moveBoxesRight(){
        if(moves <= 1){
            for(var i=0; i<boxes.length; i++){

                if($(window).width()<600){
                    boxes[i].style.transform += "translateX(-205%)";
                    boxes[i].style.transition = "1s";
                }
                else{
                    boxes[i].style.transform += "translateX(-104%)";
                    boxes[i].style.transition = "1s";
                }

            }
            moves++;
        }

        if(moves==0){
            pos1.classList.add("col");
            pos2.classList.add("col");
            pos3.classList.add("col");
            pos4.classList.remove("col")
            pos5.classList.remove("col")
            lB.style.display = "none"
            rB.style.display = "block"
        }
        else if(moves==1){
            pos1.classList.remove("col");
            pos2.classList.add("col");
            pos3.classList.add("col");
            pos4.classList.add("col")
            pos5.classList.remove("col")
            lB.style.display = "block"
            rB.style.display = "block"
        }
        else{
            pos1.classList.remove("col");
            pos2.classList.remove("col");
            pos3.classList.add("col");
            pos4.classList.add("col")
            pos5.classList.add("col")
            lB.style.display = "block"
            rB.style.display = "none"
        }

    }

//Typewritter Effect
// document.addEventListener('DOMContentLoaded',function(event){

//     var dataText = [""];
//     var whereToWrite = [""]
    
//     // type one text in the typwriter
//     // keeps calling itself until the text is finished
//     function typeWriter(headingNum, text, i, fnCallback) {
//       // check if text isn't finished yet
//       if (i < (text.length)) {
//         // add next character to h1
//         document.querySelector(whereToWrite[headingNum]).innerHTML = text.substring(0, i+1);
//         setTimeout(
//           function() {typeWriter(headingNum, text, i + 1, fnCallback)}, 150);
//     }

//       // text finished, call callback if there is a callback function
//       else if (typeof fnCallback == 'function') {
//         // call callback after timeout
//         setTimeout(fnCallback, 120000);
//       }
//     }

//       // start a typewriter animation for a text in the dataText array
//       function StartTextAnimation(i) {

//       //if list element does not exist, wait 10s before repeating (aka: dont repeat)
//       if (typeof dataText[i] == 'undefined'){
//           setTimeout(function() {
//             StartTextAnimation(0);
//           }, 5000);
//        }
//       // check if dataText[i] exists
//       if (i < dataText[i].length) {
//         // text exists! start typewriter animation
//         typeWriter(i, dataText[i], 0, function(){
//          // after callback (and whole text has been animated), start next text
//          StartTextAnimation(i + 1);
//        });
//       }
//     }
//     // start the text animation
//     setTimeout(
//       function() {StartTextAnimation(0)}, 0000 )
//     });