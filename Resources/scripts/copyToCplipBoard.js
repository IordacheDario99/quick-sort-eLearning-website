function javaToCopy(){
    var copyText = document.getElementById("javaCode");
    copyText.select();
    copyText.setSelectionRange(0, 99999); 
    document.execCommand("copy");

    
    alert("Text copiat ! (Java)");
}
function pythonToCopy(){
    var copyText = document.getElementById("pythonCode");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Text copiat ! (Python)");

}

function cppToCopy(){
    var copyText = document.getElementById("cppCode");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Text copiat ! (C++)");

}