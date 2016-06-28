function sayThatWasEasy1() {
    var thatWasEasy1 = new Audio("c_hat_was_easy.mp3");
    thatWasEasy1.play();
}

function sayThatWasEasy2() {
    var thatWasEasy2 = new Audio("d_hat_was_easy.mp3");
    thatWasEasy2.play();
}

function sayThatWasEasy3() {
    var thatWasEasy3 = new Audio("e_hat_was_easy.mp3");
    thatWasEasy3.play();
}

function sayThatWasEasy4() {
    var thatWasEasy4 = new Audio("f_hat_was_easy.mp3");
    thatWasEasy4.play();
}

function sayThatWasEasy5() {
    var thatWasEasy5 = new Audio("g_hat_was_easy.mp3");
    thatWasEasy5.play();
}

function sayThatWasEasy6() {
    var thatWasEasy6 = new Audio("a_hat_was_easy.mp3");
    thatWasEasy6.play();
}

function sayThatWasEasy7() {
    var thatWasEasy7 = new Audio("b_hat_was_easy.mp3");
    thatWasEasy7.play();
}
$("#easy1").on("click", sayThatWasEasy1);
$("#easy2").on("click", sayThatWasEasy2);
$("#easy3").on("click", sayThatWasEasy3);
$("#easy4").on("click", sayThatWasEasy4);
$("#easy5").on("click", sayThatWasEasy5);
$("#easy6").on("click", sayThatWasEasy6);
$("#easy7").on("click", sayThatWasEasy7);

$(document).keypress(delegateKeypress);

    function delegateKeypress(event) {
        console.log(event.keyCode)
        if (event.keyCode ==97) {
           $("#easy1").trigger("click");
        }
        
        if (event.keyCode ==115) {
           $("#easy2").trigger("click");
        }
        if (event.keyCode ==100) {
           $("#easy3").trigger("click");
        }
        if (event.keyCode ==102) {
           $("#easy4").trigger("click");
        }
        if (event.keyCode ==106) {
           $("#easy5").trigger("click");
        }
        if (event.keyCode ==107) {
           $("#easy6").trigger("click");
        }
        if (event.keyCode ==108) {
           $("#easy7").trigger("click");
        }
    }