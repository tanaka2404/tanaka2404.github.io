// Pure JS Load XHR 【 --要変更--  変数:7箇所  ID:1箇所 元URL:1箇所 】
var myXml = new XMLHttpRequest();
myXml.onreadystatechange = function() {
    if ((myXml.readyState === 4) && (myXml.status === 200)) {
        document.getElementById("headerSidebar").innerHTML = myXml.responseText; // 挿入先ID
        // ロード後の処理を記述
    }
}
myXml.open("GET", "https://raw.githubusercontent.com/tanaka2404/tanaka2404.github.io/refs/heads/main/header/header.html", true);  // 元URL 
myXml.send(null);