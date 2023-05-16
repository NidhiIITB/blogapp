const blogs = [
{
title: "My First Blog Post",
content: "This is my first blog post. I'm excited to start blogging!"
},
{
title: "My Second Blog Post",
content: "This is my second blog post. I'm still excited to be blogging!"
},
{
title: "My Third Blog Post",
content: "This is my third blog post. I'm starting to get the hang of this blogging thing!"
}
];

function getBlogs() {
return blogs;
}

function renderBlogs(blogs) {
const ul = document.querySelector("ul");
blogs.forEach((blog) => {
const li = document.createElement("li");
li.textContent = blog.title;
ul.appendChild(li);
});
}

document.addEventListener("DOMContentLoaded", () => {
renderBlogs(getBlogs());
});
