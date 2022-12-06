var container = document.querySelector(".container");

/* for (var x = 1; x <= 100;x++) {
    
    if (x % 3 == 0 && x % 5 == 0) {
        console.log("FIZZBUZZ");
    } else if (x % 3 == 0) {
        console.log("FIZZ");
    } else if (x % 5 == 0) {
        console.log("BUZZ");
    } else {
        console.log(x); 
    }

}; */

for (var x = 1; x <= 100;x++) {
    
    if (x % 3 == 0 && x % 5 == 0) {
        var li1 = document.createElement("li");
        li1.innerHTML = "FIZZBUZZ";
        container.appendChild(li1);
    } else if (x % 3 == 0) {
        var li2 = document.createElement("li");
        li2.innerHTML = "FIZZ";
        container.appendChild(li2);
    } else if (x % 5 == 0) {
        var li3 = document.createElement("li");
        li3.innerHTML = "BUZZ";
        container.appendChild(li3);
    } else {
        var liE = document.createElement("li");
        liE.innerHTML = x;
        container.appendChild(liE); 
    }

};
