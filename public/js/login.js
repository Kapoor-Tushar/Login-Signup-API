const form = document.querySelector(".login-form");
const login = async function (email, password) {
  try {
    // We are using axios library for sending request to the server
    // This will help us to send the login request to our desired path.
    //   This res variable will give us promise which will contain jwt token
    const res = await axios({
      method: "POST",
      url: "/api/v1/users/login",
      data: {
        email: email,
        password: password,
      },
    });
    if (res.data.status === "success") {
      document
        .querySelector(".login-success-section")
        .classList.remove("hidden");
      document.querySelector(".error_show-section").classList.add("hidden");
    }
    // console.log(res);
  } catch (err) {
    document.querySelector(".error_show-section").classList.remove("hidden");
    document.querySelector(".err-message").innerText =
      err.response.data.message;
  }
};

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.querySelector(".email-input").value;
  const password = document.querySelector(".password-input").value;
  login(email, password);
});
