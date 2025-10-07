const switchImg = document.getElementById('switch');
const message = document.getElementById('message');
const monster = document.getElementById('monster');
let power = false;

switchImg.addEventListener('click', function() {
    if (power) {
        switchImg.src = 'img/offswitch.png';
        power = false;

        document.body.style.backgroundImage = "url('img/dark-bg.png')";
        message.textContent = 'Find the power switch!';
        message.style.mixBlendMode = 'difference';
        message.style.color = 'rgb(23, 61, 100)';

        monster.style.display = 'none';

    } else {
        switchImg.src = 'img/onswitch.png';
        power = true;

        document.body.style.backgroundImage = "url('img/bg.jpeg')";
        message.innerHTML = 'Phew! <br>But what is that in the corner...?';
        message.style.mixBlendMode = 'hard-light';
        message.style.color = 'rgb(114, 0, 0)';

        monster.style.display = 'block';
        monster.style.position = 'absolute';
        monster.style.bottom = '450px';
        monster.style.right = '310px';
        monster.style.width = '100px';
        monster.style.height = '100px';


    }
});