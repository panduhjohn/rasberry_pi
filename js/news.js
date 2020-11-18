function removeCard(button) {
  button.parentNode.parentNode.remove();
}

function addCard() {
  const form = document.querySelector("#inputs");
  const headline = form.elements["headline"].value;
  const subheading = form.elements["subheading"].value;
  const content = form.elements["content"].value;
  let image = form.elements["image"].value;

  if (!headline || !subheading) {
    alert("Don't spam me bitch!")
    return
  }

  if (!image) {
    image = '../assets/homer.jpg'
  }

  const newPost = `
    <div id='news-posts'>
        <div id='news-image'>
            <img src="${image}">
            <i id='close-card' onclick='removeCard(this)' class="far fa-times-circle"></i>
        </div>
        <div id="news-content">
            <h3>${headline}</h3>
            <h4>${subheading}</h4>
            <p>${content}</p>
        </div>
    </div>`;

  document
    .querySelector("#news-posts")
    .insertAdjacentHTML("beforebegin", newPost);

  form.parentNode.style.display = 'none';
  document.getElementById('shareButton').style.display = 'flex'
}

function showForm(button) {
 const formContainer = document.getElementById('formContainer');
 formContainer.style.display = 'block';
 button.style.display = 'none';
}
