const form = document.getElementById("contact-form");
const submitButton = form.querySelector("button[type='submit']");

formspree("initForm", {
  formElement: "#contact-form",
  formId: "xnpnvrvy",
});

form.addEventListener("submit", () => {
  formspree("setSubmitButton", submitButton);
});