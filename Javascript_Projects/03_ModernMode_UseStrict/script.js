// "use strict" JavaScript ko strict mode me chalata hai
// Isse code safer ho jata hai aur galtiyan turant error ban jati hain

"use strict"; // hamesha top pe likhna hota hai

// Example 1: bina declare kiye variable use karna
// normal JS me chal jata hai, strict mode me error deta hai
try {
  x = 10; // error
} catch (e) {
  console.log("error:", e.message);
}

// Example 2: sahi tarika
let y = 20;
console.log(y);

// Example 3: duplicate parameters allowed nahi hote
try {
  function test(a, a) {} // error
} catch (e) {
  console.log("duplicate param error");
}

// Example 4: this ka behavior
function check() {
  console.log(this);
}
check(); // strict mode me undefined

// Example 5: function ke andar bhi use kar sakte hain
function demo() {
  "use strict";
  try {
    z = 50; // error
  } catch (e) {
    console.log("local error");
  }
}
demo();

// summary:
// "use strict" use karte hain taaki code clean, safe aur predictable ho

//and in new version of javascript ecma script 6 by default use strict mode no need mentioned specially 