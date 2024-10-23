function animateSkill(skillBarId, percentageId, targetPercentage) {
    let skillBar = document.getElementById(skillBarId);
    let percentageText = document.getElementById(percentageId);
    let currentPercentage = 0;
    
    let interval = setInterval(function() {
        if (currentPercentage >= targetPercentage) {
            clearInterval(interval);
        } else {
            currentPercentage++;
            skillBar.style.width = currentPercentage + '%';
            percentageText.textContent = currentPercentage + '%';
        }
    }, 20);
}

window.onload = function() {
    animateSkill('chinese-bar', 'chinese-percent', 100);
    animateSkill('japanese-bar', 'japanese-percent', 80);
    animateSkill('python-bar', 'python-percent', 70);
    animateSkill('sql-bar', 'sql-percent', 80);
    animateSkill('tableau-bar', 'tableau-percent', 90);
    animateSkill('html-bar', 'html-percent', 60);
};