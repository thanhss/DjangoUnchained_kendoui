
function ToggleDiv(id) {
    var tab1 = document.getElementById("play"),
        tab2 = document.getElementById("chapters"),
        tab3 = document.getElementById("features"),
        tab4 = document.getElementById("more");
        
    switch (id) {
        case "play", "close":
            tab2.style.display = "none";
            tab3.style.display = "none";
            tab4.style.display = "none";
            break;
        case "chapters":
            tab2.style.display = "block";
            tab3.style.display = "none";
            tab4.style.display = "none";
            
            break;
        case "features":
            tab2.style.display = "none";
            tab3.style.display = "block";
            tab4.style.display = "none";
            break;
        case "more":
            tab2.style.display = "none";
            tab3.style.display = "none";
            tab4.style.display = "block";
    }

    var slide = kendo.fx($('.tabs')).slideIn("up");
    var visible = true;
    slide.play();
}

var curImgNo = 1;

function chapterClickRight() {
    if (curImgNo >= 28)
        return;
    curImgNo++;
    document.getElementById("chapterImg").src = "images/chapters/chapter_" + curImgNo + ".png";
}

function chapterClickLeft() {
    if (curImgNo <= 1)
        return;
    curImgNo--;
    document.getElementById("chapterImg").src = "images/chapters/chapter_" + curImgNo + ".png";
}
