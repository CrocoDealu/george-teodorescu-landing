const birthTrigger = document.querySelector(".birth-trigger");
const birthDialog = document.querySelector("#birth-details");

if (birthTrigger && birthDialog) {
  birthTrigger.addEventListener("click", () => birthDialog.showModal());
  birthDialog.addEventListener("click", event => {
    if (event.target === birthDialog) birthDialog.close();
  });
}
