let obj;

function fetchAndUpdateUserData() {
  let p = fetch("https://randomuser.me/api/");

  p.then((response) => {
    console.log(response.status);
    console.log(response.ok);
    return response.json();
  }).then((value2) => {
    console.log(value2);
    obj = value2;
    // Access the large picture URL from the fetched data
    let largePictureUrl = value2.results[0].picture.large;
    let name = value2.results[0].name.first + " " + value2.results[0].name.last;

    // Set the HTML content with the image URL
    document.getElementById("img").innerHTML = `
      <img src="${largePictureUrl}" alt="Random User Image"></img>
    `;

    document.getElementById("name").innerHTML = `
      ${name}
    `;

    document.getElementById("display").innerHTML = ""; // Clear previous content

  });
}

fetchAndUpdateUserData();

document.querySelector("[data-attr=age]").addEventListener("click", () => {

  if (obj.results[0].registered) {
    let age = obj.results[0].registered.age;
    document.getElementById("display").innerHTML = `
      Age: ${age}
    `;
  } else {
    
  }
});

document.querySelector("[data-attr=email]").addEventListener("click", () => {
  let email = obj.results[0].email;
  document.getElementById("display").innerHTML = `
    Email: ${email}
  `;
});

document.querySelector("[data-attr=phone]").addEventListener("click", () => {
  let phone = obj.results[0].phone;
  document.getElementById("display").innerHTML = `
    Phone: ${phone}
  `;
});

document.getElementById("getUser").addEventListener("click", () => {
  fetchAndUpdateUserData();
});