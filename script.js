window.addEventListener('load', function () {
  let startTime = Date.now();

  function frissitSzamlalo() {
    let most = Date.now();
    let eltelt = most - startTime;

    let orak = Math.floor(eltelt / (1000 * 60 * 60));
    let percek = Math.floor((eltelt % (1000 * 60 * 60)) / (1000 * 60));
    let masodpercek = Math.floor((eltelt % (1000 * 60)) / 1000);

    orak = orak.toString().padStart(2, '0');
    percek = percek.toString().padStart(2, '0');
    masodpercek = masodpercek.toString().padStart(2, '0');

    document.getElementById("szamlalo").textContent = `Relax time: ${orak}:${percek}:${masodpercek}`;
  }

  setInterval(frissitSzamlalo, 1000);
});
