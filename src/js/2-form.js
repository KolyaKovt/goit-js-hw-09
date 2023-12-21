const form = document.querySelector(".feedback-form");
const input = form.elements.email;
const textarea = form.elements.message;

const feedbackFormState = JSON.parse(
  localStorage.getItem("feedback-form-state")
);

if (feedbackFormState) {
  input.value = feedbackFormState.email;
  textarea.value = feedbackFormState.message;
}

form.addEventListener("input", () => {
  const feedbackFormState = {
    email: input.value,
    message: textarea.value,
  };

  localStorage.setItem(
    "feedback-form-state",
    JSON.stringify(feedbackFormState)
  );
});

form.addEventListener("submit", evt => {
  evt.preventDefault();

  if (!input.value.trim() || !textarea.value.trim()) return;

  console.log(JSON.parse(localStorage.getItem("feedback-form-state")));
  localStorage.removeItem("feedback-form-state");

  form.reset();
});
