let main=document.querySelector("main");

let getUser=()=>{
    fetch("https://randomuser.me/api/")
    .then((res)=>res.json())
    .then((data)=>displayUser(data.results[0]))
    .catch((err)=>console.log(err));
}
getUser();

let displayUser = (data)=>{
    console.log(data);
    main.innerHTML="";
    let userDiv=document.createElement("div");
    let img= document.createElement("img");
    img.src=data.picture.large;
    let name=document.createElement("p");
    name.textContent=`${data.name.first} ${data.name.last}`;
    let additionalInfo=document.createElement("p");
    additionalInfo.setAttribute("heading","Additional Info");
    let age=document.createElement("button");
    age.textContent="Age";
    age.setAttribute("data-attr","age");
    let email=document.createElement("button");
    email.textContent="Email";
    email.setAttribute("data-attr","email")
    let phone=document.createElement("button");
    phone.textContent="Phone";
    phone.setAttribute("data-attr","phone")
    let anotherUser=document.createElement("button");
    anotherUser.setAttribute("id","getUser");
    anotherUser.textContent="GET ANOTHER USER";

    userDiv.append(img,name,additionalInfo,age,email,phone,document.createElement("br"),anotherUser);
    main.append(userDiv);

    age.addEventListener("click",()=>{
        additionalInfo.innerHTML=data.dob.age;
    })

    email.addEventListener("click",()=>{
        additionalInfo.innerHTML=data.email;
    })

    phone.addEventListener("click",()=>{
        additionalInfo.innerHTML=data.phone;
    })

    anotherUser.addEventListener("click",()=>{
        getUser();
    })
}