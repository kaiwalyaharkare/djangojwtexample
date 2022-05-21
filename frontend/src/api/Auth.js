let registerUser = async (e) => {
  e.preventDefault();
  let response =  fetch("http://127.0.0.1:8000/api/regsiter/", {
      
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: e.target.username.value,
      password: e.target.password.value,
      password2: e.target.password2.value,
      email: e.target.email.value,
      first_name: e.target.first_name.value,
      last_name: e.target.last_name.value,
    }),
  });
  if (response.status === 200) {
    alert("user created succesfully");
  } else {
    alert("somthing went wrong");
  }
};
export default registerUser