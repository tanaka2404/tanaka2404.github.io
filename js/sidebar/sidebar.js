fetch('https://raw.githubusercontent.com/tanaka2404/tanaka2404.github.io/refs/heads/main/sidebar/sidebar.html') // 取得したい外部ページのURLに置き換え
    .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // id="fetchContent"の要素を取得
            const targetElement = doc.querySelector('#fetchContent');

            // 取得した要素をページの結果部分に表示
            const resultContainer = document.getElementById('headerSidebar');
            if (targetElement) {
            resultContainer.innerHTML = '';
            // cloneして挿入
            resultContainer.appendChild(targetElement.cloneNode(true));
            } else {
            resultContainer.textContent = '要素が見つかりません';
            }
        })
        .catch(error => {
            document.getElementById('headerSidebar').textContent = 'エラー: ' + error.message;
        });