var myclass1 = document.getElementById("myclass1");
var myclass2 = document.getElementById("myclass2");
var myclass3 = document.getElementById("myclass3");
var myclass4 = document.getElementById("myclass4");
var iTag1 = document.getElementById("iTag1");
var iTag2 = document.getElementById("iTag2");
var iTag3 = document.getElementById("iTag3");
var iTag4 = document.getElementById("iTag4");

myclass1.addEventListener("click", function() {
    if(iTag1.classList) {
    iTag1.classList.toggle("fa-chevron-up")
    iTag1.classList.toggle("fa-chevron-down")
    }
})

myclass2.addEventListener("click", function() {
    if(iTag2.classList) {
    iTag2.classList.toggle("fa-chevron-up")
    iTag2.classList.toggle("fa-chevron-down")
    }
})

myclass3.addEventListener("click", function() {
    if(iTag3.classList) {
    iTag3.classList.toggle("fa-chevron-up")
    iTag3.classList.toggle("fa-chevron-down")
    }
})

myclass4.addEventListener("click", function() {
    if(iTag4.classList) {
    iTag4.classList.toggle("fa-chevron-up")
    iTag4.classList.toggle("fa-chevron-down")
    }
})

function validate() {
    if (document.getElementById('check').checked) {
        alert("checked");
    } else {
        alert("You didn't check it! Let me check it for you.");
    }
}

// <div class="row">
//     <div class="col">
//         <div class="rangeslider">
//             <input class="min" name="age" type="range" min="16" max="75" value="16" />
//             <input class="max" name="age" type="range" min="16" max="75" value="75" />
//             <span class="range_min light left">16</span>
//             <span class="range_max light right">75</span>
//         </div>
//     </div>
// </div>
