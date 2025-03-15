// JavaScript to show skill details
const skillsList = document.querySelectorAll("#skills-list li");
const skillDetail = document.getElementById("skill-detail");

skillsList.forEach(skill => {
    skill.addEventListener("click", () => {
        // Get the detail from the data-detail attribute
        const detail = skill.getAttribute("data-detail");
        // Display the detail in the skill-detail div
        skillDetail.innerHTML = `<p>${detail}</p>`;
    });
});