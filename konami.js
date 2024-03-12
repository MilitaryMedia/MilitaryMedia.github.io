function onKonamiCode(cb) {
  var input = '';
  var key = '3838404037393739666513';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

onKonamiCode(function () {window.location.href = "https://militarymedia.github.io/Hampter.html";})
