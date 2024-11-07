$(document).ready(function () {
	$('.karusetulava').slick({
	slidesToShow: 2,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 10000,
	responsive: [{
	breakpoint: 850,
	settings: {
	slidesToShow: 1,
	slidesToScroll: 1,
	infinite: true,
	}
	}]
	});
	// Код для системы рейтинга
    let stars = document.getElementsByClassName("star");
    let output = document.getElementById("output");

    function gfg(n) {
        remove();
        for (let i = 0; i < n; i++) {
            let cls = "";
            if (n == 1) cls = "one";
            else if (n == 2) cls = "two";
            else if (n == 3) cls = "three";
            else if (n == 4) cls = "four";
            else if (n == 5) cls = "five";
            stars[i].className = "star " + cls;
        }
        output.innerText = "Rating is: " + n + "/5";
    }

    function remove() {
        for (let i = 0; i < 5; i++) {
            stars[i].className = "star";
        }
    }

    // Пример добавления обработчиков событий для звезд
    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener('click', function() {
            gfg(i + 1); // Передаем рейтинг от 1 до 5
        });
    }
});

// переключение темы
const tema = document.getElementById('theme-toggle');

// Проверяем, есть ли сохраненная тема в localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    document.querySelector('header').classList.add('dark-theme');
}

// Обработчик события для кнопки переключения темы
const themeToggleButton = document.getElementById('theme-toggle');

// Проверяем, есть ли сохраненная тема в localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
    document.querySelector('header').classList.add('dark-theme');
}

// Обработчик события для кнопки переключения темы
themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.querySelector('header').classList.toggle('dark-theme');

    // Сохраняем выбранную тему в localStorage
    if (document.body.classList.contains('dark-theme')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
