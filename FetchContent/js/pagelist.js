var myXml = new XMLHttpRequest();
myXml.onreadystatechange = function() {
    if ((myXml.readyState === 4) && (myXml.status === 200)) {
        document.getElementById("pageList").innerHTML = myXml.responseText;
        // ロード後の処理を記述
    }
}
myXml.open("GET", "https://raw.githubusercontent.com/tanaka2404/tanaka2404.github.io/refs/heads/main/FetchContent/header.html", true);  // 元URL 
myXml.send(null);