

//CLOCK_________________________________________________________

function updateClock() {
    const clocktext = document.getElementById('clockText');
    if (!clocktext) return;
    const now = new Date();
    const datePart = now.toLocaleDateString(undefined, {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        secondary: 'numeric'
    });
    const timePart = now.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second : '2-digit'
    });
    clocktext.textContent = datePart + '  ' + timePart;
}

updateClock();
setInterval(updateClock, 1000);

//WEEKDAY MAPPING_________________________________________________________

const states = [
    "near-death",
    "newborn",
    "child",
    "teen",
    "young adult",
    "adult",
    "elderly"
];

const descriptions = {
    "near-death": "You are in the near-death state, scraping by with the dysfunctional, bare-bones proto-net. [1980–1993]",
    "newborn": "You are in the newborn state, existing in the efficiency and mundanity of corporate brutality. (2018–Now)",
    "child": "You are in the child state, experiencing the bright colors, simple shapes, minimal shadows, and playful visual clarity of flat design. (2013–2017)",
    "teen": "You are in the teen state, marked by classic Web 2.0 aesthetics: rounded corners, gradients, soft shadows, and shiny interface elements. (2008–2013)",
    "young adult": "You are in the young adult state, where the web shifts to cleaner layouts, bigger images, and early responsive design patterns. (2003–2007)",
    "adult": "You are in the adult state, where sites rely on tables, serif headers, and straightforward navigation. (1998–2002)",
    "elderly": "You are in the elderly state, shaped by basic HTML, grey backgrounds, default fonts, and minimal layout control. (1993–1997)"
};


const taglines = {
    "near-death": "[proto-net v0.0.3-prealpha]",
    "newborn": "A guided experience that explores how the web evolves through distinct stages of development and deterioration.",
    "child": "An interactive journey that explores how the web changes over time, from its early days to its final moments.",
    "teen": "An interactive experience of life, death, and the web.",
    "young adult": "your guide to understanding how the internet grows and shifts across its many stages",
    "adult": "A simple site that shows each stage of the web’s lifecycle",
    "elderly": "The Mortal Web is a collection of pages about the life of the web"
};

function applyState(state) {
    document.body.setAttribute('data-state', state);
    document.getElementById('currentState').textContent = state;
    document.getElementById('stateDescription').textContent = descriptions[state];

    const taglineEl = document.querySelector('.tagline');
    if (taglineEl && taglines[state]) {
        taglineEl.textContent = taglines[state];
    }
}
function setState(state) {
    const gifOverlay = document.getElementById("gifOverlay");
  
    if (!gifOverlay) {
      applyState(state);
      return;
    }
  
    gifOverlay.classList.add("visible");
  
    setTimeout(() => {
      applyState(state);
    }, 100);
  
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    setTimeout(() => {
      gifOverlay.classList.remove("visible");
    }, 500);
  }

document.addEventListener('DOMContentLoaded', () => {
    const weekday = new Date().getDay();
    const state = states[weekday];
    setState(state);

    const childButton = document.getElementById('childButton');
if (childButton) {
  childButton.addEventListener('click', (event) => {
    event.preventDefault();

    const currentState = document.body.getAttribute('data-state');
    const currentIndex = states.indexOf(currentState);
    const nextIndex = (currentIndex + 1) % states.length;
    const nextState = states[nextIndex];

    setState(nextState);
  });
}

const calendarButton = document.getElementById('stateButton');
if (calendarButton) {
  calendarButton.addEventListener('click', (event) => {
    event.preventDefault();
    const currentState = document.body.getAttribute('data-state');
    const currentIndex = states.indexOf(currentState);
    const nextIndex = (currentIndex + 1) % states.length;
    const nextState = states[nextIndex];
    setState(nextState);
  });
}

const sidebarCalendar = document.getElementById('sidebarCalendar');
if (sidebarCalendar) {
  sidebarCalendar.addEventListener('click', (event) => {
    event.preventDefault();
    const currentState = document.body.getAttribute('data-state');
    const currentIndex = states.indexOf(currentState);
    const nextIndex = (currentIndex + 1) % states.length;
    const nextState = states[nextIndex];
    setState(nextState);
  });
}
});










function startCountdownToMidnight() {
    const el = document.getElementById("countdownText");
    if (!el) return;
  
    function tick() {
      const now = new Date();
  
      // next midnight (local time)
      const nextMidnight = new Date(now);
      nextMidnight.setHours(24, 0, 0, 0);  // today at 24:00 == tomorrow 00:00
  
      const diffMs = nextMidnight - now;
      let totalSeconds = Math.max(0, Math.floor(diffMs / 1000));
  
      const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
      totalSeconds %= 3600;
      const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
      const seconds = String(totalSeconds % 60).padStart(2, "0");
  
      el.textContent = `${hours}:${minutes}:${seconds}`;
    }
  
    tick();
    setInterval(tick, 1000);
  }

  startCountdownToMidnight();