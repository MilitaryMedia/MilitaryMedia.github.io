function onHampterCode(cb) {
  var input = '';
  var key = '//insert here';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

onHampterCode(function () {window.location.href = "https://militarymedia.github.io/Hampter.html";})
