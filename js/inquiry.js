function submitForm() {
  const form = document.getElementById("inquiryForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  confirmationMessage.style.display = "block";
  form.style.display = "none";

  sendEmail();
}

function showForm() {
  const form = document.getElementById("inquiryForm");
  const confirmationMessage = document.getElementById("confirmationMessage");

  confirmationMessage.style.display = "none";
  form.style.display = "block";
}

// EXTRA CREDIT: send this as an email
function sendEmail() {
  const form = document.getElementById("inquiryForm");

  const email = form.elements["email"].value;
  const inquiry = form.elements["inquiry"].value;
  const name = form.elements["name"].value;
  const subject = form.elements["subject"].value;

  Email.send(
    "daniel.lee@codeimmersives.com",
    email,
    subject,
    inquiry,
    "smtp.elasticemail.com",
    "daniel.lee@codeimmersives.com",
    "DB19A2C1FBCF7AED85CCE0AE5D133D2CA405"
  );
}
