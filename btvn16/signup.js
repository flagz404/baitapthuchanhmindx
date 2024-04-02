// Một form đăng ký sẽ bao gồm 3 thành phần chính là: ô email(username) + ô password + nút button đăng ký. VÌ vậy chũng ta sẽ khai báo cho mỗi thành phần
const inputUsernameRegister = document.getElementById("username");
const inputPasswordRegister = document.getElementById("password");
const inputEmailRegister = document.getElementById("email");
const btnRegister = document.getElementById("btn-reg");

// Tiến hành code chức năng chính
// Sự kiện khi bấm vào nút đăng ký
btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  // Nếu để trống 1 trong 2 ô username và password thì sẽ hiện lên thông báo "Vui lòng không để trống"
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === "" ||
    inputEmailRegister.value === ""
  ) {
    alert("Vui lòng không bỏ trống");
  }
  // Nếu 2 ô username và password đã có giá trị nhập vào thì hiện lên thông báo "Đăng ký thành công" và sau đó lưu dữ liệu vào localStorage
  else {
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
      email: inputEmailRegister.value,
    };
    // Vì dữ liệu lưu vào localStorage dạng Object nên phải dùng JSON.stringify
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng ký thành công");
    // Sau khi đăng ký thành công thì chuyển sang trang đăng nhập
    window.location.href = "login.html";
  }
});
