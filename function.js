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
    let stars = document.getElementsByClassName("star_r");
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
            stars[i].className = "star_r " + cls;
        }
        output.innerText = "Rating is: " + n + "/5";
    }

    function remove() {
        for (let i = 0; i < 5; i++) {
            stars[i].className = "star_r";
        }
    }

    // Пример добавления обработчиков событий для звезд
    for (let i = 0; i < stars.length; i++) {
        stars[i].addEventListener('click', function() {
            gfg(i + 1); // Передаем рейтинг от 1 до 5
        });
    }
});

//Кнопка навигации для телефона
const navbutton = document.getElementById("navbutton");
const navItems = document.querySelectorAll("#right");
navbutton.addEventListener("click", (event) => {
    const isOpen = navbutton.dataset.active === "true" ? true : false; 
    if(isOpen){
        navbutton.dataset.active = "false";
        navItems.forEach(item => item.classList.add("hidden"));
        navbutton.classList.remove("bi-x-lg");
        navbutton.classList.add("bi-list");
    } else{
        navbutton.dataset.active = "true";
        navItems.forEach(item => item.classList.remove("hidden"));
        navbutton.classList.add("bi-x-lg");
        navbutton.classList.remove("bi-list");
    }
});

// themes
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('theme', 'dark');
    }
    else {
        document.documentElement.setAttribute('theme', 'light');
    }    
}

toggleSwitch.addEventListener('change', switchTheme, false);

if (e.target.checked) {
    document.documentElement.setAttribute('theme', 'dark');
    localStorage.setItem('theme', 'dark'); //this will be set to dark
  }
else {
    document.documentElement.setAttribute('theme', 'light');
    localStorage.setItem('theme', 'light'); //this will be set to light
}


