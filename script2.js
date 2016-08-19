$(document).ready(function() {
  $("section#results").hide();
  var questions = [
  { "toAsk": "Which of the following options shows data displayed in a string format?",
  "choices": ["bear", "bear()", "\"bear\"", "true"],
  "correct": "\"bear\""
  },
  { "toAsk": "Write one is not equal to two in JavaScript.",
  "choices": ["\"1\" != \"2\"", "1 =! 2", "\"1\" =! \"2\"", "1 != 2"],
  "correct": "1 != 2"
  },
  { "toAsk": "Which option correctly displays popup boxes?",
  "choices": ["alert:<br>\"There's someone behind you.\"", "alert(There is someone behind you.);","var catQuestion = prompt(\"Are you a feline fanatic?\")", "popup(\"Are you a feline fanatic?\")"] ,
  "correct": "var catQuestion = prompt(\"Are you a feline fanatic?\")"
  },
  { "toAsk": "Before you use a variable in JavaScript, you must:",
  "choices": ["declare it with the var keyword (ex: var cat = \"spotted\");","declare it with the variable keyword (ex: variable cat = \"spotted\");","Find the pre-existing keyword for the variable you wish to use","declare it with the declare keyword (ex: declare cat = \"spotted\")"],
  "correct": "declare it with the var keyword (ex: var cat = \"spotted\");"
  },
  { "toAsk": "All of the following statements are true except:",
  "choices": ["variable names can contain digits, underscores, letters and dollar signs","variable names are case sensitive, meaning bear and Bear are two different variables","variable names are chosen by the programmer","reserved JavaScript words can also be used as variable names"],
  "correct": "reserved JavaScript words can also be used as variable names"
  },
  { "toAsk": "Which of the following correctly identifies the string and the variable in a concactenation that is logged to the console?",
  "choices": ["console.log(catNum + \" are sleeping!\"); the variable is catNum and the string is \" are sleeping!\"","console.log(\"catNum\" + \" are sleeping!\"); the variable is \"catNum\" and the string is \" are sleeping!\"","console.log(catNum + are sleeping!); the string is catNum and the variable is + are sleeping","console.log(catNum + are sleeping); catNum + are sleeping all represent variables since they are within console.log();"],
  "correct": "console.log(catNum + \" are sleeping!\"); the variable is catNum and the string is \" are sleeping!\""
  },
  { "toAsk": "Your want to write code that displays \"Condition x is TRUE!\" if condition x is true. Otherwise, in all other conditions, you want to display \"Nothing to see here.\" Which option below displays your target code correctly?",
  "choices": ["if {condition x = true} (alert(\"Condition x is TRUE!\")) else {alert(\"Nothing to see here.\")}","if (condiiton x = true) {alert(\"Condition x is TRUE!\")} else {alert(\"Nothing to see here.\")}","if {condition x == true} (alert(\"Condiiton x is TRUE!\")) else (alert(\"Nothing to see here.\"))","if (condition x == true) {alert(\"Condition x is TRUE!\")} else {alert(\"nothing to see here.\")}"],
  "correct": "if (condition x == true) {alert(\"Condition x is TRUE!\")} else {alert(\"nothing to see here.\")}"
  },
  { "toAsk": "You want to write out all of the dog breeds in the array var dogs = [\"Poodle\", \"Bulldog\", \"Beagle\", \"Chihuahua\", \"Pug\"] in a continuous series of alerts that say \"Congratulations, your fur baby is a __________!\" Which code below displays the most efficient way to accomplish this?",
  "choices": ["if (dogs[0]) <br> {alert(\"Congratulations, your fur baby is a \" = dogs)","alert(\"Congratulations, your fur baby is a \" + dogs[0]); <br> alert(\"Congratulations, your fur baby is a \" + dogs[1]); <br> alert(\"Congratulations, your fur baby is a \" + dogs[2]); <br> alert(\"Congratulations, your fur baby is a \" + dogs[3]); <br> alert(\"Congratulations, your fur baby is a \" + dogs[4]);","do { <br> alert(\"Congratulations, your fur baby is a \" + dogs[i]\") <br> while (i < 5); }","for (i = 0; i < dogs.length; i++) { <br> alert(\"Congratulations, your fur baby is a \" + dogs[i]);}"],
  "correct": "for (i = 0; i < dogs.length; i++) { <br> alert(\"Congratulations, your fur baby is a \" + dogs[i]);}"
  },
  { "toAsk": "You want to write out the dog breed in the array var dog = [\"Poodle\", \"Bulldog\", \"Beagle\", \"Chihuahua\", \"Pug\"] that corresponds to var fur = \"curly\" in an alert that says \"Congratulations, your fur baby is a Poodle!\" Which code below displays a method to accomplish this?",
  "choices": ["if (dogs[0] = \"curly\") {alert(\"Congratulations, your fur baby is a \" = dogs)","alert(\"Congratulations, your fur baby is a \" + dogs[0]);","do {alert(\"Congratulations, your fur baby is a \" + dogs[0]);} while (var fur = \"curly\")","for (i = 0; i < 0; i++) { alert(\"Congratulations, your fur baby is a \" + dogs[i]);}"],
  "correct": "do {alert(\"Congratulations, your fur baby is a \" + dogs[0]);} while (var fur = \"curly\")"
  },
  { "toAsk": "You want to define a function that prompts the user to provide their name, and then you want to call that function. Which code below displays a method to accomplish this?",
  "choices": ["function identify() { <br> var ask = prompt(\"Please enter your name below.\");}","function identify (var ask = prompt{\"Please enter your name below.\")};)","function { var ask = prompt(\"Please enter your name below.\");} <br> identify{};","function identify() { <br> var ask = prompt(\"Please enter your name below.\");} <br> identify();"],
  "correct": "function identify() { <br> var ask = prompt(\"Please enter your name below.\");} <br> identify();"
  },

  { "toAsk": "Which of the following correctly identifies the difference between parameters and arguments?",
  "choices": ["function(greeting) // greeting is the parameter <br> greeting(\"Hi!\"); // \"Hi\" is the argument","function(greeting) {};// greeting is the argument <br> greeting(\"Hi!\"); // \"Hi\" is the parameter","There is no difference between parameters and arguments.","arguments are properties of a function, while parameters are properties of a particular call to a function."],
  "correct": "function(greeting) // greeting is the parameter <br> greeting(\"Hi!\"); // \"Hi\" is the argument"
  },

  { "toAsk": "Choose the option below that correctly defines the use of a global and local variable within a function in the commented segments.",
  "choices": ["var number = 3; <br> function animal() { var species = \"bear\" // global variable <br> number; // local variable","number = 3; <br> function animal() { species = \"bear\" // local variable <br> number; // global variable","var number = 3; <br> function { var species = \"bear\" // local variable <br> number; // global variable <br>","var number = 3; <br> function animal() { var species = \"bear\" // local variable <br> number; // global variable }</br>"],
  "correct": "number = 3; <br> function animal() { species = \"bear\" // local variable <br> number; // global variable"
  },

  { "toAsk": "What is the keyword \"this\" used for?",
  "choices": ["it refers to and identifies the object you\'re currently working with","it refers to and identifies the scope of the variables you\'re currently working with","it creates a new object","it establishes inheritance within a newly created object"],
  "correct": "it refers to and identifies the object you\'re currently working with"
  },
  { "toAsk": "Which option below uses an object constructor to create a new object?",
  "choices": ["var bear = {type:\"Polar\", coat:\"white\", habitat:\"North Pole\", drink:\"Cola\"}","var bear = new Object();<br> bear.type=\"Polar\";<br>bear.coat=\"white\";<br>bear.habitat=\"North Pole\";<br>bear.drink=\"Cola\";","function bear(type, coat, habitat, drink) { <br> this.type =\"polar\";<br>this.coat=\"white\";<br>this.habitat=\"North Pole\";<br>this.drink=\"Cola\";}","new Object(bear) = this.polar;<br>this.white;<br> this.NorthPole<br>this.Cola"],
  "correct": "function bear(type, coat, habitat, drink) { <br> this.type =\"polar\";<br>this.coat=\"white\";<br>this.habitat=\"North Pole\";<br>this.drink=\"Cola\";}"
  },
  { "toAsk": "You want the object cat to inherit all the properties of the object mammal. What is one way to accomplish this?",
  "choices": ["var mammal = { fur: true } <br> var cat = mammal.proto","var mammal = { fur: true }<br> cat.proto = mammal","var cat = Object.create(mammal, fur)","var mammal = { fur: true } <br> cat = Object.create(mammal)"],
  "correct": "var mammal = { fur: true } <br> cat = Object.create(mammal)"
  },
  { "toAsk": "Choose the words that accurately complete the following statement: <br> Elements, attributes and text represent _____________ of a tree in a document. These document components are ____________ in JavaScript.",
  "choices": ["nodes; objects","branches; functions","nodes; functions","branches; objects"],
  "correct": "nodes; objects"
  },
  { "toAsk": "You want to change < p id=\"ratDiet\">The rat only eats Wisconsin cheddar cheese.< / p ><br> to <br> < p id=\"ratDiet\">The rat only eats Vermont cheddar cheese.< / p > when a user mouses over the text. What is one way to accomplish this?",
  "choices": ["document.getElementById(\"ratDiet\").onMouseOver.innerHTML = \"The rat only eats Vermont cheddar cheese.\"","document.getElementById(\"ratDiet\").addEventListener = onMouseover.innerHTML(\"The rat only eats Vermont cheddar cheese.\");","document.getElementByTagName(\"ratDiet\").innerHTML.onMouseover = \"The rat only eats Vermont cheddar cheese.\"","document.getElementById(\"ratDiet\").addEventListener(\"mouseover\", function() { <br> this.innerHTML = \"The rat only eats Vermont cheddar cheese.\" })"],
  "correct": "document.getElementById(\"ratDiet\").addEventListener(\"mouseover\", function() { <br> this.innerHTML = \"The rat only eats Vermont cheddar cheese.\" })"
  },
  { "toAsk": "You want to select and change the contents of <br> < p >The rat only eats Wisconsin cheddar cheese< /p >.<br> Which method should you use?",
  "choices": ["getElementById","getElementByClassName","getElementByParagraph","getElementByTagName"],
  "correct": "getElementByTagName"
  }
]
var correct = 0;
var currentQuestion = 0;
var questionsRemaining = 17;
var basicstructure = 0;
var variables = 0;
var statements = 0;
var functions = 0;
var objects = 0;
var dom = 0;
function createReport() {
  $("#basicstructure").append("<br>"+(Math.round(basicstructure*100/3))+'%')
  $("#variables").append("<br>"+(Math.round(variables*100/3))+'%')
  $("#statements").append("<br>"+(Math.round(statements*100/3))+'%')
  $("#functions").append("<br>"+(Math.round(functions*100/3))+'%')
  $("#objects").append("<br>"+(Math.round(objects*100/3))+'%')
  $("#dom").append("<br>"+(Math.round(dom*100/3))+'%')
  if(basicstructure <= 1) {
    $("#basicstructure").append("<br>"+"Focus Area! You should consider re-learning basic structure.")
  }
  if(basicstructure == 2) {
    $("#basicstructure").append("<br>"+"Not bad! Some review of overall js structure may be helpful.")
  }
  if(basicstructure ==3) {
    $("#basicstructure").append("<br>"+"Perfect score! The structure knowledge is strong in this one.")
  }
  if(variables <= 1) {
    $("#variables").append("<br>"+"Focus Area! You should consider re-learning variables.")
  }
  if(variables == 2) {
    $("#variables").append("<br>"+"Not bad! Some review of variables may be helpful.")
  }
  if(variables ==3) {
    $("#variables").append("<br>"+"Perfect score! VARI good!")
  }
  if(statements <= 1) {
    $("#statements").append("<br>"+"Focus Area! You should consider re-learning statements.")
  }
  if(statements == 2) {
    $("#statements").append("<br>"+"Not bad! Some review of statements may be helpful.")
  }
  if(statements ==3) {
    $("#statements").append("<br>"+"Perfect score! Eureka!")
  }
  if(functions <= 1) {
    $("#functions").append("<br>"+"Focus Area! You should consider re-learning functions.")
  }
  if(functions == 2) {
    $("#functions").append("<br>"+"Not bad! Some review of functions may be helpful.")
  }
  if(functions ==3) {
    $("#functions").append("<br>"+"Perfect score! FUNC-tastic!")
  }
  if(objects <= 1) {
    $("#objects").append("<br>"+"Focus Area! You should consider re-learning objects.")
  }
  if(objects == 2) {
    $("#objects").append("<br>"+"Not bad! Some review of objects may be helpful.")
  }
  if(objects ==3) {
    $("#objects").append("<br>"+"Perfect score! Your score is the OBJECT of everyone's admiration.")
  }
  if(dom <= 1) {
    $("#dom").append("<br>"+"Focus Area! You should consider re-learning the document object model.")
  }
  if(dom == 2) {
    $("#dom").append("<br>"+"Not bad! Some review of the document object model may be helpful.")
  }
  if(dom ==3) {
    $("#dom").append("<br>"+"Perfect score! Yeehaw!")
  }
  $('#container').highcharts({
         chart: {
             type: 'bar'
         },
         title: {
             text: 'Questions Correct by Category'
         },
         xAxis: {
             categories: ['Basic Structure', 'Variables', 'Statements', 'Functions', 'Objects', 'Document Object Model']
         },
         yAxis: {
             title: {
                 text: 'Score'
             }
         },
         series: [{
             name: 'Correct',
             data: [basicstructure, variables, statements, functions, objects, dom]
         }]
     });
  /*$("button.option").on("click", function(){
    var userChoice = $(this).text();
    for(i=0; i<questions[3]; i++)
    if(userChoice == questions[0].correct && userChoice == questions[1].correct && userChoice == questions[2].correct) {
      console.log("all correct");
      $("section")
    }
    else {
      console.log("wrong");
    }
}) */
}
function askQuestion() {
  $("section#structure").append("<div class='singleQuestion'>"+questions[currentQuestion].toAsk +"</div>")
  for(i=0; i<questions[currentQuestion].choices.length; i++) {
    $(".singleQuestion").append("<button class='option'>"+questions[currentQuestion].choices[i]+"</button>")
  }
  $("button.option").on("click", function(){
    $(this).parent(".singleQuestion").hide();
    var userChoice = $(this).text();
    if(questionsRemaining < 1){
      $("section#structure").html("<h1 class='score'>Total Score: "+(Math.round(correct*100/18))+'%'+"</h1>");
      $(".status").hide();
      $("section#results").show();
      createReport();
    }
    if(userChoice == questions[currentQuestion].correct) {
      if(currentQuestion <= 2) {
        basicstructure++;
      }
      else if(currentQuestion > 2 && currentQuestion <= 5) {
        variables++;
      }
      else if(currentQuestion > 5 && currentQuestion <=8) {
        statements++;
      }
      else if(currentQuestion > 8 && currentQuestion <=11) {
        functions++;
      }
      else if(currentQuestion > 11 && currentQuestion <=14) {
        objects++;
      }
      else if(currentQuestion > 14 && currentQuestion <=17) {
        dom++;
      }
      correct++;
      currentQuestion++;
      questionsRemaining--;
    $("span.questionnumber").html(currentQuestion + 1);
    $("span.questionsremaining").html(questionsRemaining);
    $("span.correct").html(correct);
    }
    else {
      currentQuestion++;
      questionsRemaining--;
      $("span.questionnumber").html(currentQuestion + 1);
      $("span.questionsremaining").html(questionsRemaining);
      $("span.correct").html(correct);
    }
    askQuestion();
  })
};
$(".startQuiz").click(function() {
  askQuestion();
  $(".question").hide();
  $(".startQuiz").hide();
  $("section#results").hide();
})
})
