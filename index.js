
function razzle() {
    return "razzle";
}
function greet() {
    console.log("Hello, world!");
}

// Named function
function razzle(lawyer = "Billy", target = "'em") {
    console.log(`${lawyer} razzle-dazzles ${target}!`);
  }
  razzle(); //=> Billy razzle-dazzles 'em!
  razzle("Methuselah", "T'challah"); //=> Methuselah razzle-dazzles T'challah!

  // Function expression
    function saturdayFun(activity="roller-skate") {
        return `This Saturday, I want to ${activity}!`
    }
    console.log(saturdayFun()); //=> This Saturday, I want to roller-skate!
    console.log(saturdayFun("bathe my dog")); //=> This Saturday, I want to bathe my dog!
    console.log(saturdayFun("go to the office")); //=> This Saturday, I will go to the office
// Named function
    sayHello(); // Output: "Hello"
    function sayHello() {
        console.log("Hello");
    }
    sayHello(); // Output: "Hello"

    // Anonymous function
    const greet = function() {
        console.log("Hello, world!");
    };
    greet(); // Output: "Hello, world!"

    // Named function
    const razzle = function(lawyer = "Billy", target = "'em") {
        console.log(`${lawyer} razzle-dazzles ${target}!`);
    };
    razzle(); //=> Billy razzle-dazzles 'em!
    razzle("Methuselah", "T'challah"); //=> Methuselah razzle-dazzles T'challah!

    // default parameters
    function razzle(lawyer = "Billy", target = "'em") {
        console.log(`${lawyer} razzle-dazzles ${target}!`);
      }
      razzle(); //=> Billy razzle-dazzles 'em!
        razzle("Methuselah", "T'challah"); //=> Methuselah razzle-dazzles T'challah!

        //

