const fullName = $("#fullName");
const phone = $("#phone");
const email = $("#email");
const username = $("#username");
const password = $("#password");
const fullNameErr = $("#error-fullName");
const phoneErr = $("#error-phone");
const emailErr = $("#error-email");
const usernameErr = $("#error-username");
const passwordErr = $("#error-password");
const emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
const phoneRex = /'^(\\+98|0)?9\\d{9}$'/;


// fullName validation
fullName.keyup(function () {
  if (fullName.val() == "") {
    fullNameErr.text("Enter your name");
    fullName.addClass("box_error");
    error = true;
  } else {
    fullNameErr.text("");
    error = false;
    fullName.removeClass("box_error");
  }
});

// phone validation
phone.keyup(function () {
  if (phone.val() == "") {
    phoneErr.text("Enter your phone number");
    phone.addClass("box_error");
    error = true;
  } else {
    phoneErr.text("");
    error = false;
    phone.removeClass("box_error");
  }
  if (!phoneRex.test(phone.val())) {
    phoneErr.text("phone number is not valid");
    error = true;
  } else {
    phoneErr.text("");
    error = false;
    phone.removeClass("box_error");
  }
  if (phone.val().length != 11) {
    phoneErr.text("phone number must have 11 numeric characters");
    phone.addClass("box_error");
    error = true;
  } else {
    phoneErr.text("");
    error = false;
    phone.removeClass("box_error");
  }
});

// email validation
email.keyup(function () {
  if (!emailReg.test(email.val())) {
    emailErr.text("ايميل خود را وارد كنيد");
    email.addClass("box_error");
    error = true;
  } else {
    if (!emailReg.test(email.val())) {
      emailErr.text("آدرس ايميل معتبر نيست");
      error = true;
    } else {
      emailErr.text("");
      error = false;
      email.removeClass("box_error");
    }
  }
});

// registerForm, first step validation
$(".next-btn").click(function () {
  // first name
  if (fullName.val() == "") {
    fullNameErr.text("Enter your name");
    fullName.addClass("box_error");
    error = true;
  } else {
    fullNameErr.text("");
    error = false;
    fullName.removeClass("box_error");
  }
  // phone
  if (phone.val() == "") {
    phoneErr.text("Enter your phone number");
    phone.addClass("box_error");
    error = true;
  } else {
    if (phone.val().length != 11) {
      phoneErr.text("phone number must have 11 numeric characters");
      error = true;
    } else {
      phoneErr.text("");
      error = false;
      phone.removeClass("box_error");
    }
  }
  //change first tab to second tab
  if (!error) {
    $(".first-tab").hide();
    $(".second-tab").show();
  }
});

// registerForm, last step validation, submit button
$("#registerForm").submit(function (e) {
  e.preventDefault();
  // email
  if (email.val() == "") {
    emailErr.text("Enter youe email");
    email.addClass("box_error");
    error = true;
  } else {
    if (!emailReg.test(email.val())) {
      emailErr.text("email is not valid");
      error = true;
    } else {
      emailErr.text("");
      error = false;
      email.removeClass("box_error");
    }
    if (!error) {
      alert("submit success")
    }
  }

  const data = {
    fullname: fullName.val(),
    phone: phone.val(),
    email: email.val(),
    phone: phone.val(),
  };
  $.ajax({
    type: "POST",
    url: "http://localhost/harmony-landing/user-store.php",
    data: data,
    success: (res) => {
      console.log(res);
    },
    error: (err) => {
      console.log(err);
    },
  });

});
