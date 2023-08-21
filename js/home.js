
$(document).ready(function () {


  var isDarkMode = localStorage.getItem('darkMode') === 'true';

  // Function to apply the selected mode (light/dark)
  function applyMode(isDark) {
    // Toggle the visibility of the buttons
    $('#lightButton').toggle(!isDark);
    $('#darkButton').toggle(isDark);

    // Toggle the dark mode CSS file
    $('#darkModeStyles').prop('disabled', !isDark);

    // Save the user's preference in local storage
    localStorage.setItem('darkMode', isDark);
  }

  // Initial mode application based on the user's preference
  applyMode(isDarkMode);

  // Light mode button click event handler
  $('#lightButton').click(function () {
    applyMode(true);
  });

  // Dark mode button click event handler
  $('#darkButton').click(function () {
    applyMode(false);
  });

});










function showSectionContent(sectionId) {
  // Hide all tab sections
  var tabSections = document.getElementsByClassName("tab-section");// section pai
  for (var i = 0; i < tabSections.length; i++) {
    tabSections[i].classList.remove("active");
  }

  // Show the clicked tab section
  document.getElementById("section" + sectionId).classList.add("active");
}


const prevbtn = document.querySelectorAll(".prev");
const nextbtn = document.querySelectorAll(".next");
const formSteps = document.querySelectorAll(".form-step")
const progressSteps = document.querySelectorAll(".progress-step");

let formStepsNum = 0;

nextbtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum++;
    updateFormSteps();
    updateProgressbar();
  });
});

prevbtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    formStepsNum--;
    updateFormSteps();
    updateProgressbar();
  });
});


function updateFormSteps() {
  formSteps.forEach((formStep) => {
    formStep.classList.contains("active") &&
      formStep.classList.remove("active");
  });

  formSteps[formStepsNum].classList.add("active");
}



function updateProgressbar() {
  progressSteps.forEach((progressStep, idx) => {
    if (idx < formStepsNum + 1) {
      progressStep.classList.add("progress-step-active");
    } else {
      progressStep.classList.remove("progress-step-active");
    }
  })
}


const progressActive = document.querySelectorAll(".progress-step-active");

progress.style.width =
  ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
