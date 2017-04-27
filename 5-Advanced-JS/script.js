/////////////////////////////
// CODING CHALLENGE


/*
--- Let's build a fun quiz game in the console! ---

1. Build a function constructor called Question to describe a question. A question should include:
a) question itself
b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
c) correct answer (I would use a number for this)

2. Create a couple of questions using the constructor

3. Store them all inside an array

4. Select one random question and log it on the console, together with the possible answers (each question should have a number) (Hint: write a method for the Question objects for this task).

5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.

6. Check if the answer is correct and print to the console whether the answer is correct ot nor (Hint: write another method for this).

7. Suppose this code would be a plugin for other programmers to use in their code. So make sure that all your code is private and doesn't interfere with the other programmers code (Hint: we learned a special technique to do exactly that).

--- Expert level ---

8. After you display the result, display the next random question, so that the game never ends (Hint: write a function for this and call it right after displaying the result)

9. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.

10. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Hint: I'm going to use the power of closures for this, but you don't have to, just do this with the tools you feel more comfortable at this point).

11. Display the score in the console. Use yet another method for this.
*/

(function random(arr) {
    var Question  = function(quest, answ, correct){
        this.quest = quest;
        this.answ = answ;
        this.correct = correct;
    };

    var quest1 = new Question('To be or not to be?',
                              ['To be','Not to be', 'I dont\' know'],
                              1);
    var quest2 = new Question('Black or white?',
                              ['Black', 'White', 'Red'],
                              2);
    var quest3 = new Question('Day or night?',
                              ['Day', 'Night', 'Something else'],
                              0);

    var quest_arr = [quest1, quest2, quest3];

    Question.prototype.displayQuestion = function(){
        console.log(this.quest);

        for (i=0; i < this.answ.length; i++){
            console.log(i+'. '+this.answ[i]);
        }
    }

    var sc = 0;

    Question.prototype.checkAnswer = function(useransw) {
        if (useransw == this.correct) {
            console.log("That's correct answer");
            sc++;
        } else {
            console.log("Wrong answer");
        }
        console.log('--------------');
        console.log('Current score is '+ sc);
    }


//    var sc = 0;
//
//
//    Question.prototype.checkScore = function(useransw) {
//        if (useransw == this.correct) {
//            sc++;
//        }
//        console.log('--------------');
//        console.log('Current score is '+ sc);
//    }



    function nextQuest() {
        var n = Math.floor(Math.random() * quest_arr.length);
        quest_arr[n].displayQuestion();
        var useransw = prompt('Please enter your answer');

        if (useransw!=='exit'){
          quest_arr[n].checkAnswer(useransw);
          //quest_arr[n].checkScore(useransw);
          nextQuest();
        }
    }

    nextQuest();



})()

