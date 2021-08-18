'use strict';

{
    //btn省略
    const btn = document.getElementById("btn");
    
    //クリックしたら
    btn.addEventListener("click" , () => {
        //結果
        const kekka = ["大吉","吉","中吉","小吉","末吉","凶","大凶"]
        // ランダム文
        const n = Math.floor(Math.random() * kekka.length);
        //結果表示
        btn.textContent = kekka[n];
　　　　　
        
        
        //結果
        /* switch(n){
            case 0:
                btn.textContent = '大吉'
                bleak;
            case 1:
                btn.textContent = '中吉'
                bleak;
            case 2:
                btn.textContent = '吉'
                bleak;
            case 3:
                btn.textContent = '小吉'
                bleak;
            case 4:
                btn.textContent = '末吉'
                bleak;
            case 5:
                btn.textContent = '凶'
                bleak;
            case 6:
                btn.textContent = '大凶'
                bleak;
        } */
    })
}