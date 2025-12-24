document.getElementById("check").addEventListener("click", () => {
  const input = document.querySelector("#inputText").value.trim();
  const result = document.getElementById("result");

  let norm = input.replace(/[^a-zA-Z0-9]/g,"").toLowerCase();
  let reversed = norm.split("").reverse().join("");

  if(norm == reversed){
    result.textContent = `"${input}" is a palindrome!`;
    result.style.color = "green";
  } else {
    result.textContent = `"${input}" is not a palindrome.`;
    result.style.color = "red";
  }
})

  