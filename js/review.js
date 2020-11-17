let starRating = 0;

function deleteReviews(button) {
  button.parentNode.parentNode.parentNode.remove()
}

function highlight(integer) {
  const stars = document.querySelectorAll('.star-rating');
  for (let i = 0; i < integer; i++) {
    stars[i].style.color = '#FFD700';
  }
}

function unhighlight() {
  const stars = document.querySelectorAll('.star-rating');
  stars.forEach(star => star.style.color = 'gray')
  highlight(starRating)
}

function saveStarRating(integer) {
  starRating = integer
  const stars = document.querySelectorAll('.star-rating');
  for (let i = 0; i < integer; i++) {
    stars[i].style.color = '#FFD700';
  }
}


function submitReview() {
  const form = document.getElementById('inquiryForm')
  console.log(form.elements['review'].value)

  const reviewValue = form.elements['review'].value;

  let starHTML = `<div class='stars'>`;

  for (let i = 0; i < starRating; i++) {
    console.log(i)
    starHTML += `⭐️`
  }

  starHTML+= '</div>'

  const newReview = `
      <div class="cards">
        <div class="review-card">
            <p>${reviewValue}</p>
            <div class="icons">
               ${starHTML}
                <p class="x-button" onclick='deleteReviews(this)'><i class="far fa-times-circle"></i></p>
            </div>
        </div>
    </div>`

    form.insertAdjacentHTML( 'afterend', newReview );
}
