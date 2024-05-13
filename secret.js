function onSecretCode(cb) {
  var input = '';
  var key = '84189515213';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

onSecretCode(function () {window.location.href = "https://militarymedia.github.io/derp.html";})
