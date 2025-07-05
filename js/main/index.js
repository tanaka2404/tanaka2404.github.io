document.addEventListener('DOMContentLoaded', function(){
    let sideBar  = document.getElementById('sidebarMenu');     //サイドバーメニュー
    let SBButton = document.getElementById('openSidebarMenu'); //サイドバーを表示するチェックボックス
    if(sideBar && SBButton){
        SBButton.addEventListener('change', function(){
            if(SBButton.checked){
                sideBar.style.transform = 'translateX(0)';
            }else {
                sideBar.style.transform = 'translateX(252px)';
            }
        });
    }else {
        console.error('Element with ID example not found');
    }
});