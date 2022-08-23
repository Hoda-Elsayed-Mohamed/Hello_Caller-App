const show = document.querySelector(".show_more_div");
const more = document.getElementById("more");
const less = document.getElementById("less");
const animated2 = document.querySelector(".animated-cards2");

const hamburger = document.querySelector(".hamburger");
const wrapper = document.querySelector(".mob_wrapper");
const mobNav = document.getElementById("navClicked");
const closeBtn = document.querySelector(".close");

if (more) {
  more.addEventListener("click", () => {
    show.classList.add("appear");
    animated2.classList.add("appear");
    more.style.display='none';
    less.classList.add("appear");
  });
  less.addEventListener("click", () => {
    show.classList.remove("appear");
    animated2.classList.remove("appear");
    more.style.display='block';
    less.classList.remove("appear");
  });
}

if (hamburger) {
  hamburger.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.style.display = "block";
    var body = document.body;

body.classList.add("overlay");
   
    // document.getElementsByTagName("body")[0].style.backgroundColor='purple';
  });
}

if (closeBtn) {
  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    wrapper.style.display = "none";
document.body.classList.remove("overlay");

  });
   
 
}
window.onclick = function (event) {
  console.log(event);
  if (event.target.matches(".close")) {
    console.log('success')
    const mobWrapper = document.querySelector(".mob_wrapper");
    mobWrapper.style.display= 'none';
    
  }
};

// var input = document.querySelector("#phone");
// intlTelInput(input, {
//   utilsScript: "js/utils.js",
// });

// language_toggler btn

function myFunction(id) {
  document.getElementById(id).classList.toggle("show");
}

document.querySelector(".dropdown-content .arabic").onclick = function () {
  document.getElementById("dropbtn").innerHTML = `
  <img src="imgs/SA.svg" />
  Arabic
  <img src="imgs/downArrow.svg" alt="downArrow" />
`;
  this.classList.add("active");
  document
    .querySelector(".dropdown-content .english")
    .classList.remove("active");
};
document.querySelector(".dropdown-content .english").onclick = function () {
  document.getElementById("dropbtn").innerHTML = `
  <img src="imgs/US-flag.svg" />
  English
  <img src="imgs/downArrow.svg" alt="downArrow" />
`;
  this.classList.add("active");
  document
    .querySelector(".dropdown-content .arabic")
    .classList.remove("active");
};

document.querySelector(".second .arabic").onclick = function () {
  document.getElementById("dropbtnLg").innerHTML = `
  <img src="imgs/SA.svg" />
  Arabic
  <img src="imgs/downArrow.svg" alt="downArrow" />
`;
  this.classList.add("active");
  document
    .querySelector(".second .english")
    .classList.remove("active");
};
document.querySelector(".second .english").onclick = function () {
  document.getElementById("dropbtnLg").innerHTML = `
  <img src="imgs/US-flag.svg" />
  English
  <img src="imgs/downArrow.svg" alt="downArrow" />
`;
  this.classList.add("active");
  document
    .querySelector(".second .arabic")
    .classList.remove("active");
};




document.querySelector(".dropdown-content .arabic").onclick = function () {
  document.getElementById("dropbtnMob").innerHTML = `
  <div class="la">language</div>
                
                  <div class="lo">
                    <img src="imgs/SA.svg" />
                    Arabic
                    <img src="imgs/downArrow.svg" alt="downArrow" />
                  </div>
`;
  this.classList.add("active");
  document
    .querySelector(".dropdown-content .english")
    .classList.remove("active");
};
document.querySelector(".dropdown-content .english").onclick = function () {
  document.getElementById("dropbtnMob").innerHTML = `
  <div class="la">language</div>
                
                  <div class="lo">
                    <img src="imgs/US-flag.svg" />
                    English
                    <img src="imgs/downArrow.svg" alt="downArrow" />
                  </div>
`;
  this.classList.add("active");
  document
    .querySelector(".dropdown-content .arabic")
    .classList.remove("active");
};

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    const dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

