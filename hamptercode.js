function onHampterCode(cb) {
  var input = '';
  var key = '72657780846982';
  document.addEventListener('keydown', function (e) {
    input += ("" + e.keyCode);
    if (input === key) {
      return cb();
    }
    if (!key.indexOf(input)) return;
    input = ("" + e.keyCode);
  });
}

onHampterCode(function () {window.location.href = "Hamster2.jpg";})
