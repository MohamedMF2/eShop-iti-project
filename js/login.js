$(function() {
  // if (sessionStorage.getItem("LoginUser") != "") {
  //   window.location.href = "index.html";
  // }

  $("#regForm").on("submit", function(e) {
    var status = false;
    e.preventDefault();
    var email = $("#email");
    var pwd = $("#pwd");

    //email
    var pattern = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!pattern.test(email.val())) {
      email.addClass("border-danger");
      $("#emailHelp").html("<span class='text-denger'> Please enter email today</span>" );
      status = false;
      email.focus();
      return false;
    } else {
      email.removeClass("border-danger");
      $("#emailHelp").html("");
      status = true;
    }
    var patternPass = /^[a-zA-Z0-9_-]{5,15}$/; // /^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/;
    //pwd
    if (pwd.val() == "") {
      pwd.addClass("border-danger");
      $("#pwdHelp").html("<span class='text-denger'> Please enter password</span>");

      status = false;
      pwd.focus();
      return false;
    } else {
      if (patternPass.test(pwd.val())) {
        pwd.removeClass("border-danger");
        $("#pwdHelp").html("");
        status = true;
      } else {
        pwd.addClass("border-danger");
        $("#pwdHelp").html("<span class='text-denger'> Please enter Correct format password ");
        status = false;
        pwd.focus();
        return false;
      }
    }

    // JSON.parse(localStorage.getItem("Users"))[1].Email

    var flagExist = JSON.parse(localStorage.getItem("Users")).some(function(
      arr
    ) {
      return arr.Email == $("#email").val() && arr.Password == $("#pwd").val();
    });

    if (flagExist == true) {
      if (sessionStorage.getItem("LoginUser") == null) {
        sessionStorage.setItem("LoginUser", "");
      }
      sessionStorage.setItem("LoginUser", $("#email").val());
        window.location.href = "index.html";
    } else {
      $("#pwdHelp").text("Please Make Sure Your Email and Password").css("color", "red");
      status = false;
      return false;
    }

    $("#regForm").submit();
  });
});
