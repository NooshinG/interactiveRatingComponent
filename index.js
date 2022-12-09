const submitBtn = document.querySelector(".submitBtn");
const rating = document.getElementsByName("rating");
const card = document.querySelector(".card");
const template = document.querySelector("#submitTemplate");

submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
  let rateValue = rateCheck();
  if (rateValue === "0") {
    console.log("Please Rate!");
    return;
  }
  replaceAllChildren(rateValue);
}

function rateCheck(){
    let r = "0";
    rating.forEach((rateEl) => {
      if (rateEl.checked) {
        r = rateEl.value;
      }
    });
    return r;
}

function replaceAllChildren(rateVal) {
  const resultclone = template.content.cloneNode(true);
  const result = resultclone.querySelector(".result");
//   const containers = resultclone.querySelectorAll("div");
//   containers.classlist.add("anim");
  result.textContent = `You selected ${rateVal} out of 5`;
  card.replaceChildren(resultclone);
//   console.log("Card is empty!");
}

