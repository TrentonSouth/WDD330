const links = [
  {
    label: "Week 1 Notes",
    url: "week1/index.html"
  },
  {
    label: "Week 2 Notes",
    url: "week2/index.html"
  },
  {
    label: "Week 3 Notes",
    url: "week3/index.html"
  },
  {
    label: "Week 4 Example",
    url: "week4/index.html"
  }
 ];

 let toc = document.getElementById("toc");

 links.forEach(function(link) {
   var li = document.createElement("li");
   li.innerHTML = `<a href="${link.url}">${link.label}</a>`;
   toc.appendChild(li);
 });
