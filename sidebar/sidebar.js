fetch('https://raw.githubusercontent.com/tanaka2404/tanaka2404.github.io/refs/heads/main/sidebar/sidebar.html')
.then(response => response.text())
    .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const targetElement = doc.querySelector('#fetchContent');
        const resultContainer = document.getElementById('headerSidebar');
        if (targetElement) {
        resultContainer.innerHTML = '';
        resultContainer.appendChild(targetElement.cloneNode(true));
        } else {
        resultContainer.textContent = '要素が見つかりません';
        }
    })
    .catch(error => {
        document.getElementById('headerSidebar').textContent = 'エラー: ' + error.message;
    });