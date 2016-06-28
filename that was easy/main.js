function sayThatWasEasy() {
    var thatWasEasy = new Audio("that_was_easy.mp3");
    thatWasEasy.play();
}

$("#easy").on("click", sayThatWasEasy);

$(document).keypress(delegateKeypress);

function delegateKeypress(event) {
    if (event.keycode ==32) {
        $("easy").trigger("click"); 
    }
}
public static void main(String args[]){

        Scanner alex = new Scanner(System.in);
        Double test;
        while(true) {
            test = alex.nextDouble();
            if (test == 9){
                System.out.println("eat");
            }else{
                System.out.println("do not eat");
            }
        }
    }
}
