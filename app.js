const resultBox = document.getElementById("result");
const birthdayInput = document.getElementById("birthday");

document.getElementById("calcBtn").addEventListener("click", function () {
  const birthday = birthdayInput.value;

  if (!birthday) {
    alert("請先輸入妙麗的生日！");
    return;
  }

  const birthDate = new Date(birthday);
  const today = new Date();

  // 未來日期警告
  if (birthDate > today) {
    alert("生日不能是未來的日期！請重新輸入。");
    birthdayInput.value = "";
    return;
  }

  const diffTime = today - birthDate;
  const dogAge = diffTime / (1000 * 60 * 60 * 24 * 365);

  const dogAgeRounded = dogAge.toFixed(1);

  // 人類年齡換算
  let humanAge = 0;

  if (dogAge <= 1) {
    humanAge = dogAge * 15;
  } else if (dogAge <= 2) {
    humanAge = 24;
  } else {
    humanAge = 24 + (dogAge - 2) * 4;
  }

  const humanAgeRounded = humanAge.toFixed(1);

  // 顯示結果
  resultBox.innerHTML = `
    妙麗現在大約 <strong>${dogAgeRounded}</strong> 歲狗齡，
    換算成人類年齡大約是 <strong>${humanAgeRounded}</strong> 歲。
  `;

  resultBox.classList.add("show");
});
