function removeCard(button) {
    button.parentNode.remove();
}

function addCard() {
    const form = document.querySelector("#inputs");
    const headline = form.elements["headline"].value;
    const subheading = form.elements["subheading"].value;
    const content = form.elements["content"].value;
    const image = form.elements["image"].value;

    const newPost = `<div id='news-posts'>
    <div id='news-image'>
    <img src="${image}" alt="homer">
    </div>
    <div id="news-content">
    <h3>${headline}</h3>
    <h4>${subheading}</h4>
    <p>${content}</p>
    </div>
    <i id='close-card' onclick='removeCard(this)' class="far fa-times-circle"></i>
    </div>`;

    document
        .querySelector("#news-posts")
        .insertAdjacentHTML("beforebegin", newPost);
}
