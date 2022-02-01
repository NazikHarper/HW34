// Switch-case

//if else if
// let lang = prompt("На каком языке вы хотите просматривать контент?")

// if (lang == "русский") {
//     alert("Вы выбрали язык 'русский', добро пожаловать")
// } else if (lang == "английский"){
//     alert("Вы выбрали язык 'английский', welcome")
// } else if (lang == "французкий") {
//     alert("Вы выбрали язык 'французкий', Bienvenue")
// } else {
//     alert("Такого языка в системе нет)")
// }

//switch-case
// let lang = prompt("На каком языке вы хотите просматривать контент?")

// switch(lang) {
//     case 'русский':
//         alert("Вы выбрали язык 'русский', добро пожаловать");
//         break;
//         case 'английский':
//         alert("Вы выбрали язык 'английский', welcome");
//         break;
//         case 'французкий':
//         alert("Вы выбрали язык 'французкий', Bienvenue");
//         break;
//         default:
//             alert("Такого языка в системе нет)")
// }

// switch (переменная) {
//     case значение1:
//         инструкция1
//         break;
//     case значение2:
//         инструкция2
//         break;
//     case значение3:
//         инструкция3
//         break;
//     default:
//         break;
// }

let a = document.getElementById('selector')
let paragraf =  document.getElementById('paragraf')
a.addEventListener('change', function(){
    let option = a.value
    if(option == 'krick'){
        paragraf.innerHTML = `<div class="box">
                                    <img class="img1" src="./img/square_320_87ffaccedb95f0908adfe4871173a79e.jpg" alt="">
                                    <h1>Крик 5</h1>
                                    <p>Спустя 25 лет осле серии жестоких убийств, потрясших тихий городок Вудсборо, очередной маньяк примерит маску Призрачного лица и начнет преследовать группу подростков, раскрывая опасные секреты прошлого…</p>
                                    <div class="ancher">
                                        <a href="https://www.kino-teatr.ru/kino/movie/hollywood/150520/annot/">Смотреть онлайн</a>
                                    </div>
                                </div>`
    } else if(option == 'astral'){
        paragraf.innerHTML = `<div class="box2">
                                    <img class="img2" src="./img/film_uzhasy_svecha_15421.jpg" alt="">
                                    <h1>Astral</h1>
                                    <p>Семейство ищет способ противостоять злым духам, которые захватили их сына. Мальчик непостижимым образом после переезда в новый дом впал в кому, и никто не может ему помочь.</p>
                                    <div class="ancher2">
                                        <a href="https://www.kino-teatr.ru/kino/movie/hollywood/92073/annot/">Смотреть онлайн</a>
                                    </div>
                                </div>`
    } else if(option == 'annabelle'){
        paragraf.innerHTML = `<div class="box3">
                                    <img class="img3" src="./img/x1000.jpg" alt="">
                                    <h1>Annabelle</h1>
                                    <p>История таинственной куклы по имени Аннабель - своеобразном вместилище для страшной демонической силы. Демон, поселившийся внутри нее, с ее же помощью вселял всепоглощающий ужас в души людей, которые имели несчастье столкнуться с ней...</p>
                                    <div class="ancher3">
                                        <a href="https://www.kino-teatr.ru/kino/movie/hollywood/111353/annot/">Смотреть онлайн</a>
                                    </div>
                                </div>`
    } else {
        paragraf.innerHTML = ""
    }
})

