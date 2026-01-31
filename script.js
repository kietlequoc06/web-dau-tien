document.getElementById("btn").addEventListener("click", () => {
  const now = new Date();
  const time = now.toLocaleTimeString("vi-VN");
  alert(`Bạn vừa bấm nút lúc ${time}! Chúc bạn học vui 😄`);
});
