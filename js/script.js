$(document).ready(function () {

    for (var i = 1; i < 51; i++) {
        var s = '<div class="image-container fadeInlast">' +
            '<div>' +
            '<img src="img/photo (' + i + ').jpg">'
        '</div>' +
            '</div>';
        $('.container').append(s);
    }
  const scrollButton = document.getElementById('scrollButton');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      scrollButton.style.display = 'flex';
    } else {
      scrollButton.style.display = 'none';
    }
  });

  scrollButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // faz o scroll suave
    });
  });
});