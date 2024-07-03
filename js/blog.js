const themeSwitcher = document.getElementById("theme");
const page = document.querySelector("body");
const backBtn = document.getElementById("back");

const container = document.querySelector(".containerBlog");

const userObj = [];
let mode = "light";
init();

backBtn.addEventListener("click", () => {
   localStorage.setItem("userObj", JSON.stringify(userObj));
    window.history.back();
});

themeSwitcher.addEventListener("click",  () => { 
  
    if (mode === "light") {
      mode = "dark";
      page.setAttribute("class", "dark");
  } else {
      mode = "light";
      page.setAttribute("class", "light");
  }
  })

  function init() {
    const store = JSON.parse(localStorage.getItem("userObj"));
    store.forEach((element) => {
      const blog = document.createElement("div");
      blog.setAttribute("class", "blog");
      blog.style.border = "1px solid black";
      const user = document.createElement("h4");
      user.textContent = "Username: " + element.user;
      const title = document.createElement("h3");
      title.textContent = "Title: " + element.title;
      const content = document.createElement("p");
      content.textContent = element.content;
      content.style.fontSize = "1.5em";
      blog.appendChild(title);
      blog.appendChild(content);
      blog.appendChild(user);
      container.appendChild(blog);
      
    });
  }