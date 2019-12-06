$(function() {
  // constructor Func

  function User(_Name, _email, _phone, _password) {
    this.Name = _Name;
    this.Email = _email;
    this.Phone = _phone;
    this.Password = _password;
    //  Password; // private

    // // set function Password
    // this.setPassword = function (_value) {
    //     Password = _value;
    // }
    // // get function Password
    // this.getPassword = function () {
    //     return Password;
    // }
  }
  // if (sessionStorage.getItem("LoginUser") != "") {
  //   window.location.href = "index.html";
  // }
  $("#regForm").on("submit", function(e) {
    e.preventDefault();
    status = false;
    username = $("#username");
    email = $("#email");
    pwd = $("#pwd");
    phone = $("#phone");
    users = [];

    //full name

    var userpattern = /^[a-zA-Z]{6,10}$/;
    if (!userpattern.test(username.val())) {
      username.addClass("border-danger");
      $("#usernameHelp").html(
        "<span class='text-denger'>  enter valid username 6-10 characters</span>"
      );
      status = false;
      username.focus();
      return false;
    } else {
      username.removeClass("border-danger");
      $("#usernameHelp").html("");
      status = true;
    }
    //email
    emailpattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailpattern.test(email.val())) {
      email.addClass("border-danger");
      $("#emailHelp").html(
        "<span class='text-denger'> Please enter email valid</span>"
      );

      status = false;
      email.focus();
      return false;
    } else {
      if (localStorage.getItem("Users") == null) {
        localStorage.setItem("Users", "[]");
      }
      // var allusers = JSON.parse(localStorage.getItem("Users"));
      var flagExist = JSON.parse(localStorage.getItem("Users")).some(function(
        arr
      ) {
        return arr.Email == $("#email").val();
      });

      // console.log(tf);
      if (flagExist == true) {
        email.addClass("border-danger");
        $("#emailHelp").html(
          "<span class='text-denger'> Can not register this Email Please Register by another One</span>"
        );

        status = false;
        email.focus();
        return false;
      } else {
        email.removeClass("border-danger");
        $("#emailHelp").html("");
        status = true;
      }
    }

    passwordpattern = /^[a-zA-Z0-9_-]{5,15}$/; // /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
    //pwd

    if (!passwordpattern.test(pwd.val())) {
      pwd.addClass("border-danger");
      $("#pwdHelp").html(
        "<span class='text-denger'> Please enter Correct format password "
      );

      status = false;
      pwd.focus();
      return false;
    } else {
      pwd.removeClass("border-danger");
      $("#pwdHelp").html("");
      status = true;
    }

    //phone
    phonepattern = /^[0-9-+]+$/;

    if (!phonepattern.test(phone.val())) {
      phone.addClass("border-danger");
      $("#phoneHelp").html(
        "<span class='text-denger'> Please Enter Your Phone Number correct</span>"
      );

      status = false;
      phone.focus();
      return false;
    } else {
      phone.removeClass("border-danger");
      $("#phoneHelp").html("");
      status = true;
    }

    // if (status == true) {
      // if (localStorage.getItem("Users") == null) {
      //   localStorage.setItem("Users", "[]");
      // }
      old = JSON.parse(localStorage.getItem("Users"));
      user = new User(
        username.val(),
        email.val(),
        parseInt(phone.val()),
        parseInt(pwd.val())
      );
      // console.log(user);
      old.push(user);
      users = old.concat(
        JSON.parse(window.localStorage.getItem("users") || "[]")
      );

      localStorage.setItem("Users", JSON.stringify(old));
      window.location.href = "login.html";
      });
});
