
alert('hello')
document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    // Memeriksa apakah data username dan password terdapat dalam array datas
    const datas = [
      { user: 'yusup', pw: 'yusup123' },
      { user: 'alwi', pw: 'alwi123' },
      { user: 'dapet', pw: 'dapet123' },
      { user: 'ikhsan', pw: 'ikhsan123' },
    ];

    const foundUser = datas.find(data => data.user === username && data.pw === password);

    if (foundUser) {
      window.location.href= "/index.html";
      ;
    } else {
      alert("Login gagal. Mohon periksa kembali username dan password Anda.");
    }
  });
