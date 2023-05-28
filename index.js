function swapPic(){
    document.getElementById("before").src= "download.jfif";
    document.getElementById("before1").src= "download (1).jfif";
    document.getElementById("before2").src= "download (2).jfif";
}
function peekAtContent() {
    let Values = document.getElementById("textInput1").value;
    let Values1 = document.getElementById("textInput2").value;
    let Values2 = document.getElementById("country").value;
    document.getElementById("output").innerHTML = Values + "" + Values1 +"" + Values2;
}