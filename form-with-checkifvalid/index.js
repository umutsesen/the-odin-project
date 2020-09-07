const countries = [
    {
      country: "USA",
      zipcode: "1",
    },
    {
      country: "TR",
      zipcode: "2",
    },
    {
      country: "ENGLAND",
      zipcode: "3",
    },
    {
      country: "SPAIN",
      zipcode: "4",
    },
    {
      country: "FRANCE",
      zipcode: "5",
    },
  ];
  const form = document.getElementsByTagName("form")[0];
  const email = document.getElementById("email");
  const emailError = document.querySelector("#email + span.error");
  const country = document.getElementById("country");
  const zipcode = document.getElementById("zipcode");
  const zipcodeError = document.querySelector("#zipcode + span.error");
  const password = document.getElementById("password");
  const passwordError = document.querySelector("#password + span.error");
  const passwordconfirm = document.getElementById("passwordconfirm");
  const passwordconfirmError = document.querySelector("#passwordconfirm + span.error");
  const list = document.getElementById("countries");
  
  function createcountries() {
    countries.forEach((x) => {
      const country = document.createElement("option");
      country.value = x.country;
      list.appendChild(country);
    });
  }
  createcountries();
  CheckValues();
  
  function CheckValues() {
      // i should use all special chars array.
    const symbols = [
      "~",
      "`",
      "@",
      "#",
      `$`,
      `%`,
      `%`,
      `^`,
      `*`,
      `)`,
      `(`,
      `_`,
      `{`,
      '"',
    ];
    email.addEventListener("input", function (event) {
      if (email.validity.valid) {
        // In case there is an error message visible, if the field
        // is valid, we remove the error message.
        emailError.innerHTML = ""; // Reset the content of the message
        emailError.className = "error"; // Reset the visual state of the message
      } else {
        // If there is still an error, show the correct error
        showError("email");
      }
    });
    form.addEventListener("submit", function (event) {
      let numbermatch = password.value.match(/\d+/g);
      // if the email field is valid, we let the form submit
  
      if (!email.validity.valid) {
        // If it isn't, we display an appropriate error message
        showError("email");
        // Then we prevent the form from being sent by canceling the event
        event.preventDefault();
      }
      if (
        !countries.some(
          (result) =>
            result.country === country.value && result.zipcode === zipcode.value
        )
      ) {
        showError("zipcode");
        event.preventDefault();
      }
      if (
        !symbols.some((x) => password.value.includes(x)) ||
        numbermatch == null
      ) {
        showError("dunnopassword");
        event.preventDefault();
      }
      if (passwordconfirm.value !== password.value) {
        showError("donotmatch");
        event.preventDefault();
      }
    });
    zipcode.addEventListener("input", function () {
      CheckZipNCountry();
  
      country.addEventListener("input", function () {
        CheckZipNCountry();
      });
      function CheckZipNCountry() {
        if (
          !countries.some(
            (result) =>
              result.country === country.value && result.zipcode === zipcode.value
          )
        ) {
          showError("zipcode");
        } else {
          zipcodeError.innerHTML = ""; // Reset the content of the message
          zipcodeError.className = "error";
        }
      }
    });
    password.addEventListener("input", function (event) {
      if (symbols.some((x) => password.value.includes(x))) {
        let numbermatch = password.value.match(/\d+/g);
        if (numbermatch != null) {
          passwordError.innerHTML = ""; // Reset the content of the message
          passwordError.className = "error";
        } else showError("nonumber");
      } else showError("nosymbols");
    });
    passwordconfirm.addEventListener("input", function (event) {
      if (passwordconfirm.value !== password.value) {
        showError("donotmatch");
      } else {
        passwordconfirmError.innerHTML = ""; // Reset the content of the message
        passwordconfirmError.className = "error";
      }
    });
  
    function showError(mail) {
      if (mail === "email") {
        if (email.validity.valueMissing) {
          emailError.textContent = "You need to enter an e-mail address.";
        } else if (email.validity.typeMismatch) {
          emailError.textContent = "Entered value needs to be an e-mail address.";
        } else if (email.validity.tooShort) {
          emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
        }
        emailError.className = "error active";
      }
      if (mail === "zipcode") {
        zipcodeError.textContent = "Zipcode and Country do  not match!";
        zipcodeError.className = "error active";
      }
      if (mail === "nosymbols") {
        passwordError.textContent = "Your password must include symbols!";
        passwordError.className = "error active";
      }
      if (mail === "nonumber") {
        passwordError.textContent = "Your password must include numbers!";
        passwordError.className = "error active";
      }
      if (mail === "dunnopassword") {
        passwordError.textContent =
          "Your password must include numbers and symbols!";
        passwordError.className = "error active";
      }
  
      if (password.validity.tooShort) {
        passwordError.textContent = `Password should be at least ${password.minLength} characters; you entered ${password.value.length}.`;
      }
      if (password.validity.valueMissing) {
        passwordError.textContent = "You need to write a password";
      }
      if (mail === "donotmatch") {
        passwordconfirmError.textContent = "Your password must match!";
        passwordconfirmError.className = "error active";
      }
    }
  }
  