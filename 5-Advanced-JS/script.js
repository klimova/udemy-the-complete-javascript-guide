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
*/

var Question  = function(quest, answ1, answ2, correct){
    this.quest = quest;
    this.answ1 = answ1;
    this.answ2 = answ2;
    this.correct = correct;
};

var quest1 = new Question('To be or not to be?', 0, 1, 1);
var quest2 = new Question('Black or white?', 0, 1, 0);
var quest3 = new Question('Day or night?', 0, 1, 1);

var quest_arr = [quest1, quest2, quest3];

(function random(arr) {
    var i = Math.floor(Math.random() * 3);
    var answer = prompt(arr[i].quest);
    if (answer == arr[i].correct) {
        console.log("That's correct answer");
    } else {
        console.log("Try more");
    }
})(quest_arr)

//random(quest_arr);

//(function (goodLuck) {
//    var score = Math.random() * 10;
//    console.log(score >= 5 - goodLuck);
//})(5);
