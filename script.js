function validateLoginForm() {
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (email === '') {
    alert('Please enter your email.');
    return false;
  }

  if (password === '') {
    alert('Please enter your password.');
    return false;
  }

  // TODO: Add logic for validating login credentials on the server-side

  return true;
}

function validateRegistrationForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;

  if (name === '') {
    alert('Please enter your name.');
    return false;
  }

  if (email === '') {
    alert('Please enter your email.');
    return false;
  }

  if (password === '') {
    alert('Please enter your password.');
    return false;
  }

  // TODO: Add logic for registering the user on the server-side

  return true;
}
