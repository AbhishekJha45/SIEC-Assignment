function Update(questionNumber) {
    var progressBar = document.getElementById("progress-bar");
    var progress = (questionNumber / 10) * 100;
    progressBar.style.width = progress + '%';
}
