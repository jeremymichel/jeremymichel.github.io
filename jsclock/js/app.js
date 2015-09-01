var displayElem;

$(document).ready(function() {
  return setInterval(function() {
    var clock, date, hours, minutes, seconds;
    date = new Date();
    clock = document.getElementById('clock');
    hours = document.getElementsByClassName('hours');
    minutes = document.getElementsByClassName('minutes');
    seconds = document.getElementsByClassName('seconds');
    displayElem(hours, date.getHours());
    displayElem(minutes, date.getMinutes());
    return displayElem(seconds, date.getSeconds());
  }, 1000);
});

displayElem = function(elems, content) {
  var cont_str, i, j, len;
  cont_str = String(content);
  if (cont_str.length < 2) {
    cont_str = "0" + cont_str;
  }
  elems[0].innerHTML = cont_str.split('')[0];
  elems[1].innerHTML = cont_str.split('')[1];
  for (j = 0, len = elems.length; j < len; j++) {
    i = elems[j];
    i.setAttribute('data-text', i.innerHTML);
    $(i).toggleClass('down');
  }
};
