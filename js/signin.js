import { validObject } from "./validFunction.js";

export const formState = {
  email: {
    emailInput: document.querySelector("#username"),
    checkEmail: function (e) {
      const emailErrorText = e.target.nextElementSibling;
      const errorMsg = [
        "이메일을 입력해주세요.",
        "올바른 이메일 주소가 아닙니다.",
      ];
      if (e.target.value === "") {
        validObject.ifError(e, emailErrorText, errorMsg[0], "email");
      } else if (e.target.value.includes("@") == false) {
        validObject.ifError(e, emailErrorText, errorMsg[1], "email");
      } else {
        validObject.ifOk(e, emailErrorText, "email");
      }
    },
    // isValid: false,
  },
  pw: {
    pwInput: document.querySelector("#password"),
    checkPw: function (e) {
      const pwErrorText = e.target.parentElement.lastElementChild;
      const errorMsg = "비밀번호를 입력해주세요.";
      if (e.target.value === "") {
        validObject.ifError(e, pwErrorText, errorMsg);
      } else {
        validObject.ifOk(e, pwErrorText, "pw");
      }
    },
    // isValid: false,
  },
  form: document.querySelector("form"),
  login: function (e) {
    const emailErrorText = formState.email.emailInput.nextElementSibling;
    const pwErrorText = formState.pw.pwInput.parentElement.lastElementChild;
    const errorMsg = ["이메일을 확인해주세요", "비밀번호를 확인해주세요."];
    const loginMember = {
      email: "test@codeit.com",
      password: "sprint101",
    };

    e.preventDefault();

    // if (!formState.email.isValid && !formState.pw.isValid) {
    //   formState.email.emailInput.classList.add("error");
    //   emailErrorText.classList.add("error");
    //   emailErrorText.innerHTML = errorMsg[0];
    //   formState.pw.pwInput.classList.add("error");
    //   pwErrorText.classList.add("error");
    //   pwErrorText.innerHTML = errorMsg[1];
    // } else
    if (
      formState.email.emailInput.value === loginMember.email &&
      formState.pw.pwInput.value === loginMember.password
    ) {
      fetch("https://bootcamp-api.codeit.kr/api/sign-in", {
        method: "POST",
        body: JSON.stringify(loginMember),
      })
        .then((response) => response.json())
        .then(() => {
          location.href = "./folder";
        })
        .catch((e) => console.log(e));
    } else {
      formState.email.emailInput.classList.add("error");
      emailErrorText.classList.add("error");
      emailErrorText.innerHTML = errorMsg[0];
      formState.pw.pwInput.classList.add("error");
      pwErrorText.classList.add("error");
      pwErrorText.innerHTML = errorMsg[1];
    }
  },
};

formState.email.emailInput.addEventListener(
  "focusout",
  formState.email.checkEmail
);
formState.pw.pwInput.addEventListener("focusout", formState.pw.checkPw);
formState.form.addEventListener("submit", formState.login);
