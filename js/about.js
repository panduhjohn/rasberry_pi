function subscribe() {
  const email = document.getElementById('email').value;
  if(!email || !email.includes('@')) {
    return
  }

  alert(`${email} will now recieve our newsletter`);

  Email.send(
    "daniel.lee@codeimmersives.com",
    email,
    'Newsletter Subscription',
    'Thanks for joining',
    "smtp.elasticemail.com",
    "daniel.lee@codeimmersives.com",
    "DB19A2C1FBCF7AED85CCE0AE5D133D2CA405"
  );
}
