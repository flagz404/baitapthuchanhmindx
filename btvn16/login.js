// Một form đăng nhập sẽ bao gồm 3 thành phần chính là: ô ElementInternals(username) + ô password + nút button đăng nhập. Vì vậy chúng ta sẽ khai báo cho mỗi thành phần.
const inputUsername = document.getElementById("username");
const inputPassword = document.getElementById("password");
const btnLogin = document.getElementById("btn-log");

//Tiến hành code chức năng chính
//Sự kiện khi bấm vào nút đăng nhập
btnLogin.addEventListener("click", (e) => {
  e.preventDefault();
  //Nếu để trông cả 2 ô username và password thì sẽ hiện lên thông báo "Vui lòng không để trông"
  if (inputUsername.value === "" || inputPassword.value === "") {
    alert("Vui lòng không để trống");
    //Nếu đã nhập dữ liệu vào cả 2 ô username và password thì sẽ tiếp tục lấy dữ liệu từ trong localstorage mà mình vừa luw lúc đăng ký ra
  } else {
    const user = JSON.parse(localStorage.getItem(inputUsername.value));
    //Nếu cả 2 ô username và password trùng dữ liệu trong localstorage thì sẽ hiện lên thông báo "Đăng nhập thành công và tự động nhảy sang trang chủ"
    if (
      user.username === inputUsername.value &&
      user.password === inputPassword.value
    ) {
      alert("Đăng nhập thành công");
      window.location.href = "index.html";
      //Nếu cả 2 ô username và password không trùng dữ liệu trong localstorage thì sẽ hiện lên thông báo "Đăng nhập thất bại"
    } else {
      alert("Đăng nhập thất bại");
    }
  }
});
