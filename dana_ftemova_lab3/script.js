let arr = [
    {
        name: "sunglasses",
        link: "media/2.jpg",
        description: "ОКУЛЯРИ ВІД СОНЦЯ OVERSIZE 557грн",
        category: 1
    },
    {
        name: "sunglasses",
        link: "media/3.jpg",
        description: "ОКУЛЯРИ СОНЦЕЗАХИСНІ КВАДРАТНІ З ГРАДІЄНТНИМИ ЛІНЗАМИ 980грн ",  
        category: 1
    },
    {
        name: "sunglasses",
        link: "media/4.jpg",
        description: "ОКУЛЯРИ СОНЦЕЗАХИСНІ CAT EYE 655грн",
        category: 1
    },
    {
        name: "sunglasses",
        link: "media/5.jpg",
        description: "ОКУЛЯРИ ВІД СОНЦЯ ВУЗЬКІ 245грн",  
        category: 1
    },
    {
        name: "sunglasses",
        link: "media/6.jpg",
        description: " ОКУЛЯРИ ВІД СОНЦЯ З ЛЕОПАРДОВИМ ПРИНТОМ 300грн",
        category: 1
    },
    {
        name: "sunglasses",
        link: "media/7.jpg",
        description: "СОНЦЕЗАХИСНІ ОКУЛЯРИ З ЛЕОПАРДОВОЮ ОПРАВОЮ (вузькі) 350грн ",
        category: 1
    },
    {
        name: "earrings",
        link: "media/8.jpg",
        description: "СЕРЕЖКИ ПЕРЛИНА 469грн",
        category: 5
    },
    {
        name: "earrings",
        link: "media/9.jpg",
        description: "СЕРЕЖКИ З ЗЕЛЕНИМ СМАРАГДОМ 779грн",
        category: 5
    },
    {
        name: "earrings",
        link: "media/11.jpg",
        description: "СЕРЕЖКИ З БІЛИМ КАМІННЯМ 575грн",
        category: 5
    },
    {
        name: "earrings",
        link: "media/12.jpg",
        description: "СЕРЕЖКИ З БАНТИКОМ ТА МАЛЕНЬКИМИ ПЕРЛАМИ 400грн",
        category: 5
    },
    {
        name: "earrings",
        link: "media/13.jpg",
        description: "СЕРЕЖКИ З ПЕРЛАМИ 620грн",
        category: 5
    },
    {
        name: "rings",
        link: "media/14.jpg",
        description: "КІЛЬЦЕ ПЕРЕПЛЕТІННЯ 490грн",
        category: 2
    },
    {
        name: "bracelets",
        link: "media/15.jpg",
        description: "НАБІР ЗОЛОТИХ БРАСЛЕТІВ 1300грн",
        category: 4
    },
    {
        name: "rings",
        link: "media/16.jpg",
        description: "НАБІР КІЛЕЦЬ З МАЛЕНЬКИМ КАМІННЯМ 299грн",
        category: 2
    },
    {
        name: "rings",
        link: "media/17.jpg",
        description: "КІЛЬЦЕ ЗІРКА 400грн",
        category: 2
    },
    {
        name: "rings",
        link: "media/18.jpg",
        description: " ЗОЛОТЕ КІЛЬЦЕ З СЕРЦЯМИ 780грн",
        category: 2
    },
    {
        name: "pendants",
        link: "media/19.jpg",
        description: "ПІДВІСКА КАМІНЧИКИ 470грн",
        category: 3
    },
    {
        name: "pendants",
        link: "media/20.jpg",
        description: "ЗОЛОТА ПІДВІСКА З БІЛИМ КАМІННЯМ 700грн",
        category: 3
    },
    {
        name: "earrings",
        link: "media/21.jpg",
        description: "СЕРЕЖКИ З ПЕРЛАМИ 550грн",
        category: 5
    },
    {
        name: "bracelets",
        link: "media/22.jpg",
        description: "НАБІР ЗОЛОТИХ БРАСЛЕТІВ(4ШТ) 600грн",
        category: 4
    },
    {
        name: "bracelets",
        link: "media/23.jpg",
        description: "БРАСЛЕТИ З РОЖЕВИХ БУСИН 300грн",
        category: 4
    },
    {
        name: "bracelets",
        link: "media/24.jpg",
        description: "БРАСЛЕТИ ЛАНЦЮГИ 899грн",
        category: 4
    },
    {
        name: "pendants",
        link: "media/25.jpg",
        description: "ПІДВІСКИ БУКВА  500грн",
        category: 3
    },
    {
        name: "pendants",
        link: "media/26.jpg",
        description: "ПІДВІСКИ З БІЛИМ КВАРЦОМ 670грн",
        category: 3
    },
    {
        name: "bracelets",
        link: "media/27.jpg",
        description: "ЗОЛОТІ БРАСЛЕТИ З СМАРАГДОМ 1200грн",
        category: 4
    },
    {
        name: "earrings",
        link: "media/28.jpg",
        description: "НАБІР СЕРЕЖОК (8ШТ) 999грн",
        category: 5
    },
    {
        name: "rings",
        link: "media/29.jpg",
        description: "НАБІР КІЛЕЦЬ (5ШТ) 440грн ",
        category: 2
    },
    {
        name: "rings",
        link: "media/30.jpg",
        description: "НАБІР КІЛЕЦЬ (6ШТ) 890грн ",
        category: 2
    },
    {
        name: "sunglasses",
        link: "media/31.jpg",
        description: "ОКУЛЯРИ З БІЛОЮ ОПРАВОЮ(ВУЗЬКІ) 700грн",
        category: 1
    },
    {
        name: "bracelets",
        link: "media/32.jpg",
        description: "НАБІР ПОЗОЛОЧЕНИХ БРАСЛЕТІВ 600грн",
        category: 4
    },];
    let barColors = [
        "rgba(0,0,255,0.5)",
        "rgba(255,0,255,0.5)",
        "rgba(255,0,0,0.5)",
        "rgba(0,255,255,0.5)",
        "rgba(0,255,0,0.5)",
        "rgba(0,0,255,0.5)",
        "rgba(255,0,255,0.5)",
        "rgba(125,0,125,0.5)",
        "rgba(0,255,255,0.5)",
        "rgba(0,255,0,125.5)",
        "rgba(0,125,255,125)",
        "rgba(255,0,125,125)",
        "rgba(255,125,125,0.5)",
        "rgba(125,255,255,125)",
        "rgba(0,125,125,125)",
        "rgba(125,0,255,0.5)",
        "rgba(125,125,255,0.5)",
        "rgba(255,125,0,0.5)",
        "rgba(0,255,255,0.6)",
        "rgba(0,255,0,0.5)",
        "rgba(0,0,255,0.5)",
        "rgba(255,0,255,0.5)",
        "rgba(125,0,125,0.5)",
        "rgba(0,255,255,0.5)",
        "rgba(0,255,0,125.5)",
        "rgba(0,125,255,125)",
        "rgba(255,0,125,125)",
        "rgba(255,125,125,0.5)",
        "rgba(125,255,255,125)",
        "rgba(0,125,125,125)",
    ];
let cookie = "user subscribed";

function getElements(category) {
    let cont = document.querySelector("#container");
    let out = "<div class='row'>";
    let i = 0;
    arr.forEach(elem => {
        if (category == null || elem.category == category) {
            out += "<div class='col-sm-4'><img class='img-fluid' src=" + elem.link + " alt=" + elem.name + " ><b class='colorful-text'>" + elem.description + "</b></div>"
            i++;
        }
        if (i % 3 == 0 && 1) {
            out += "</div><div class='row'>";
        }
    });
    out += "</div>";
    cont.innerHTML = out;
}

let modal = document.getElementById("myModal");
let closeBtn = document.querySelector("#closeBtn");

function close() {
    modal.style.display = "none";
}

setTimeout(() => {
    if (document.cookie != cookie) {
        modal.style.display = "block";

    }
}, 3000)

let closeTime = 5;

setInterval(() => {
    if (modal.style.display == "block" && closeTime > 0) {
        closeTime -= 1;
        closeBtn.innerHTML = closeTime + " seconds";
    } else if(closeTime <= 0){
        closeBtn.innerHTML = "&times;";
        closeBtn.addEventListener("click", close);
    }
}, 1000)


function subscribe() {
    document.cookie = cookie;
    close();
}


new Chart("productsChart", {
    type: "pie",
    data: {
        labels: arr.map(e => e.name),
        datasets: [{
            backgroundColor: barColors,
            data: arr.map(e => e.category)
        }]
    },
    options: {
        title: {
            display: true,
            text: "Acсessories"
        }
    }
});