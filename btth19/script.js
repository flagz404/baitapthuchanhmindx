const file = document.getElementById("file");
const form = document.querySelector("form");
const noti = document.getElementById("noti");
const btnAccess = document.querySelector("access");

form.addEventListener("click", () => {
  file.click();
});

file.addEventListener("change", () => {
  noti.textContent = "CONVERSION COMPLETED";
});

btnAccess.addEventListener("click", () => {
  if (typeof file.files[0] === "null") {
    noti.textContent = "CLICK TO UPLOAD YOUR QR CODE";
    return false;
  } else {
    let formData = new FormData();
    formData.append("file", file.files[0]);
    get_url(formData);
  }
});

function get_url(formData) {
  fetch("http(s)://api.qrserver.com/v1/read-qr-code/", {
    method: "post",
    body: formData,
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
