const header = document.getElementById('header');
const content = document.getElementById('content');

const tutknife = document.getElementById('tutknife-map');

tutknife.addEventListener("mouseenter", () => {
    header.textContent = "King Tut's Meteorite Dagger";
    content.textContent = "Found in King Tut's Tomb in Egypt";
});
tutknife.addEventListener("mouseleave", () => {
    header.textContent = "Artifact Map";
    content.textContent = "The unknown can be found all across the globe.";
});

const antikythera = document.getElementById('antikythera-map');
antikythera.addEventListener("mouseenter", () => {
    header.textContent = "Antikythera Mechanism";
    content.textContent = "Found in a shipwreck off the coast of Greece";
});
antikythera.addEventListener("mouseleave", () => {
    header.textContent = "Artifact Map";
    content.textContent = "The unknown can be found all across the globe.";
});

const hammer = document.getElementById('hammer-map');
hammer.addEventListener("mouseenter", () => {
    header.textContent = "London Hammer";
    content.textContent = "Found in a rock formation in Texas, USA";
});
hammer.addEventListener("mouseleave", () => {
    header.textContent = "Artifact Map";
    content.textContent = "The unknown can be found all across the globe.";
});

const sabudisk = document.getElementById('sabudisk-map');
sabudisk.addEventListener("mouseenter", () => {
    header.textContent = "Sabu Disk";
    content.textContent = "Found in an ancient Egyptian tomb in Saqqara";
});
sabudisk.addEventListener("mouseleave", () => {
    header.textContent = "Artifact Map";
    content.textContent = "The unknown can be found all across the globe.";
});

const head = document.getElementById('head-map');
head.addEventListener("mouseenter", () => {
    header.textContent = "Tecaxic-Calixtlahuaca Head";
    content.textContent = "Found in a construction site north of Mexico City";
});
head.addEventListener("mouseleave", () => {
    header.textContent = "Artifact Map";
    content.textContent = "The unknown can be found all across the globe.";
});

const complaint = document.getElementById('complaint-map');
complaint.addEventListener("mouseenter", () => {
    header.textContent = "Complaint Tablet to Ea-nāṣir";
    content.textContent = "Found in the ancient city of Ur, Iraq";
});
complaint.addEventListener("mouseleave", () => {
    header.textContent = "Artifact Map";
    content.textContent = "The unknown can be found all across the globe.";
});

const battery = document.getElementById('battery-map');
battery.addEventListener("mouseenter", () => {
    header.textContent = "Baghdad Battery";
    content.textContent = "Found in Khujut Rabu, Iraq";
});
battery.addEventListener("mouseleave", () => {
    header.textContent = "Artifact Map";
    content.textContent = "The unknown can be found all across the globe.";
});

const rongorongo = document.getElementById('rongorongo-map');
rongorongo.addEventListener("mouseenter", () => {
    header.textContent = "Rongorongo";
    content.textContent = "Found on Easter Island, Chile";
});
rongorongo.addEventListener("mouseleave", () => {
    header.textContent = "Artifact Map";
    content.textContent = "The unknown can be found all across the globe.";
});

const pirireis = document.getElementById('pirireis-map');
pirireis.addEventListener("mouseenter", () => {
    header.textContent = "Piri Reis Map";
    content.textContent = "Found in Istanbul, Turkey";
});
pirireis.addEventListener("mouseleave", () => {
    header.textContent = "Artifact Map";
    content.textContent = "The unknown can be found all across the globe.";
});

const phaistos = document.getElementById('phaistos-map');
phaistos.addEventListener("mouseenter", () => {
    header.textContent = "Phaistos Disc";
    content.textContent = "Found in the Minoan palace of Phaistos on Crete, Greece";
});
phaistos.addEventListener("mouseleave", () => {
    header.textContent = "Artifact Map";
    content.textContent = "The unknown can be found all across the globe.";
});

const sphere = document.getElementById('sphere-map');
sphere.addEventListener("mouseenter", () => {
    header.textContent = "Klerksdorp Spheres";
    content.textContent = "Found in rock deposits in South Africa";
});
sphere.addEventListener("mouseleave", () => {
    header.textContent = "Artifact Map";
    content.textContent = "The unknown can be found all across the globe.";
});

const voynich = document.getElementById('voynich-map');
voynich.addEventListener("mouseenter", () => {
    header.textContent = "Voynich Manuscript";
    content.textContent = "Found in a Jesuit College in Italy";
});
voynich.addEventListener("mouseleave", () => {
    header.textContent = "Artifact Map";
    content.textContent = "The unknown can be found all across the globe.";
});

const dodec = document.getElementById('dodec-map');
dodec.addEventListener("mouseenter", () => {
    header.textContent = "Roman Dodecahedra";
    content.textContent = "Found in various locations across Europe";
});
dodec.addEventListener("mouseleave", () => {
    header.textContent = "Artifact Map";
    content.textContent = "The unknown can be found all across the globe.";
});

const betz = document.getElementById('betz-map');
betz.addEventListener("mouseenter", () => {
    header.textContent = "Betz Mystery Sphere";
    content.textContent = "Found in Florida, USA";
});
betz.addEventListener("mouseleave", () => {
    header.textContent = "Artifact Map";
    content.textContent = "The unknown can be found all across the globe.";
});

const flag = document.getElementById('flag');
const flagText = document.querySelector('#flagtext h1');

if (flag && flagText) {
    const defaultText = flagText.textContent;
  flag.addEventListener("mouseenter", () => {
    flagText.textContent = "James Farrington | Web as Medium | RISD 2025";
  });
  flag.addEventListener("mouseleave", () => {
    flagText.textContent = defaultText
  });
}