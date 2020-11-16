let starRating = 0;

function deleteReviews(button) {
  button.parentNode.parentNode.parentNode.remove()
}

function highlight(integer) {
  const stars = document.querySelectorAll('.star-rating');
  for (let i = 0; i < integer; i++) {
    stars[i].style.background = 'green';
  }
}

function unhighlight() {
  const stars = document.querySelectorAll('.star-rating');
  stars.forEach(star => star.style.background = 'white')
  highlight(starRating)
}

function saveStarRating(integer) {
  console.log(integer, starRating)
  starRating = integer
  const stars = document.querySelectorAll('.star-rating');
  for (let i = 0; i < integer; i++) {
    stars[i].style.background = 'green';
  }
}
