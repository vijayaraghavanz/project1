const form = document.querySelector("#login-form");

const authUser = async (id, pass) => {
  const requestBody = {
    uid: id,
    pass: pass,
  };
  console.log(requestBody);
  const urlEncodedData = new URLSearchParams(requestBody).toString();

  const response = await fetch("http://localhost:8050/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: urlEncodedData,
  });
  const resData = await response.json();
  console.log(resData);
};

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.querySelector("#uName").value.trim();
  const pass = document.querySelector("#uPass").value.trim();
  console.log(name);
  console.log(pass);
  authUser(name, pass);
});
