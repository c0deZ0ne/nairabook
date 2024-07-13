let data = {};
let updataData = {};
let newBook = {};
// console.log(process.env);
let createBook = document.querySelector("#create-book");

let form = document.querySelector("#reg-form");
form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  e.stopPropagation();
  //validate input
  // send to backend

  let urlPath = window.location.pathname;

  if (urlPath == "/auth/login") {
    //login
    try {
      //registration
      let respose = await fetch(urlPath, {
        method: "POST",
        credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      try {
        const { code, message, user } = await respose.json();
        //set cookie / authorisation
        // console.log(code, message, user);

        if (code == 200) {
          localStorage.setItem("user", JSON.stringify(user));
          location.replace("/user/dashboard");
        }
      } catch (error) {
        window.alert(error.message);
        window.location.replace("/auth/login");
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  } else {
    //registration
    let respose = await fetch(urlPath, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    try {
      const { code, message, token } = await respose.json();
      //set cookie / authorisation

      if (code == 201) {
        console.log(token);
        window.localStorage.setItem("token", token);
        window.alert(message);
        window.location.replace("/auth/login");
      } else {
        window.alert(message);
      }
    } catch (error) {
      //window.alert(message);
      console.log(error);
    }
  }
});

function handleChange(e) {
  data[`${e.name}`] = e.value;
  console.log(data);
}

function updateHandlerChange(e, id) {
  updataData[`${e.name}`] = e.value;
  updataData.id = id;
  console.log(updataData);
}

async function handleUpdate(id) {
  console.log(updataData, id);

  if (id == updataData.id) {
    //get the user id and email sored locally
    //make fetch request toupdate
    let respose = await fetch(`/user/book/update/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updataData),
    });
  } else {
    alert("You are updating the wrong book ");
  }
}

async function handleDelete(id) {
  let confirm = window
    .confirm("Are you Sure you want to delete Book")
    .valueOf();
  if (confirm) {
    let respose = await fetch(`/user/book/delete/${id}`, {
      credentials: "include",
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(data),
    });
    let res = await respose.json();
    if (respose.ok) {
      alert(res.message);
      window.location.reload();
    } else {
      alert(res.message);
    }
  } else {
    return null;
  }
}

function handleNewBook(e) {
  newBook[`${e.name}`] = e.value;
  //console.log(newBook);
}

createBook.addEventListener("submit", async (e) => {
  e.preventDefault();
  let confirm = window.confirm("Create this book? ").valueOf();
  if (confirm) {
    let respose = await fetch(`/user/book/create`, {
      credentials: "include",
      body: JSON.stringify(newBook),
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // body: JSON.stringify(data),
    });
    let res = await respose.json();
    console.log(res);
    if (respose.ok) {
      alert("sucessfuly created a book");
      window.location.reload();
    } else {
      alert("error occured");
    }
  } else {
    return null;
  }

  //valideate input
  console.log(newBook);

  //make request toserver to create the book
});

// async function handlecreateBook(e) {
//   e.preventDefault();
//   alert("created book");
// }

function openModal() {
  console.log("clicked modal");
}
