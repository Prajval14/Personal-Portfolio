document.addEventListener("DOMContentLoaded", function () {
    var expDots = document.querySelectorAll("#dot1, #dot2, #dot3");
    var eduDots = document.querySelectorAll("#dot4, #dot5");
    var experiences = document.querySelectorAll("#exp1, #exp2, #exp3");
    var educations = document.querySelectorAll("#edu1, #edu2");

    handleDots(expDots, experiences);
    handleDots(eduDots, educations);
});

function scrollToSection(sectionId) {
    var section = document.querySelector("." + sectionId);

    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}

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