const form = document.querySelector('.login-form');



form.addEventListener('submit', event => {
  event.preventDefault();

  const {
    email: emailInput,
    password: passwordInput
  } = form.elements;

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === '' || password === '') {
    alert('All form fields must be filled in');
    return;
  }

  const formData = {
    email,
    password
  };

  console.log(formData);
  form.reset();
});

