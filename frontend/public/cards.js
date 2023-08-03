(function(document) {
  var card = document.querySelectorAll(".card");

  function isTall(card) {
    if (card.offsetHeight > 170) {
      card.classList.add("tall");
    } else {
      card.classList.remove("tall");
    }
  };

  function isWide(card) {
    if (card.offsetWidth > 400) {
      card.classList.add("wide");
    } else {
      card.classList.remove("wide");
    }
  };

  card.forEach(isTall);
  card.forEach(isWide);
})(document)
