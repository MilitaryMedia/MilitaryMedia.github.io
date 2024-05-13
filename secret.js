function onSecretCode(cb) {
  var input = '75865013';
  var key = '';
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
