const links = [
   {
     label: "Week1 notes",
     url: "week1/index.html"
   }
 ]

 let toc = document.getElementById("toc");

 for(let link in links) {
    toc.append(`<li><a href="${link.url}">${link.label}</a></li>`);
 }