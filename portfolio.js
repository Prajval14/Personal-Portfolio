document.addEventListener("DOMContentLoaded", function () {
    // Declaring Variables
    var expDots = document.querySelectorAll("#dot1, #dot2, #dot3");
    var eduDots = document.querySelectorAll("#dot4, #dot5");
    var experiences = document.querySelectorAll("#exp1, #exp2, #exp3");
    var educations = document.querySelectorAll("#edu1, #edu2");
    var currentDateElement = document.getElementById('currentDate');
    var textarea = document.getElementById('message');
    var counterElement = document.getElementById('charCount');
    var submitButton = document.getElementById('submit');
    var textareaMaxLength = 200;

    // Calling functions to handle list behavior
    handleDots(expDots, experiences);
    handleDots(eduDots, educations);

    // Displaying current date in footer
    currentDateElement.innerText = " | " +  new Date().toLocaleDateString('en-GB');

    // Changing string color to enhance UX
    document.getElementById('highlight1').style.color = document.getElementById('highlight2').style.color = '#0183ec';

    //Set initial counter limit
    counterElement.innerText = textareaMaxLength;

    //Will update count based on input
    textarea.addEventListener('input', function() {
        updateCharacterCount(textarea, textareaMaxLength, counterElement);
    });

    //Submit Button on click function
    submitButton.addEventListener('click', function() {
        submitButtonFunction(textarea, textareaMaxLength);
    });
});

// Function to toggle visibility for experience and education sections
function handleDots(dots, sections) {
    dots.forEach(function (dot, index) {
        dot.addEventListener("mouseover", function () {
            sections.forEach(function (section) {
                section.style.display = "none";
            });
            sections[index].style.display = "block";
            dots[index].style.transform = "scale(1.1)";
        });

        dot.addEventListener("mouseout", function () {
            dots.forEach(function (dot) {
                dot.style.transform = "scale(1.0)";
            });
        });
    });
}

// Function to manage counter
function updateCharacterCount(textarea, textareaMaxLength, counterElement) {    
    var maxLength = textareaMaxLength;    
    var currentLength = (textarea.value || '').length;
    var charactersLeft = maxLength - currentLength;

    counterElement.innerText = charactersLeft;

    if(charactersLeft < 0) {
        counterElement.style.color = 'red'
    }
    else {
        counterElement.style.color = ''
    }
}

//Function to validate form on submit
function submitButtonFunction(textarea, textareaMaxLength) {
    if(textarea.value.length != textareaMaxLength) {
        window.alert('Please enter a short message')
    }
}
