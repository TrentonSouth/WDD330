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
  },
  {
    label: "Week 5 Notes",
    url: "week5/index.html"
  },
  ,
  {
    label: "Challenge 1",
    url: "challenge1/index.html"
  }
  ,
  {
    label: "Week 7 Notes",
    url: "week7/index.html"
  }
  ,
  {
    label: "Week 8 Examples",
    url: "week8/index.html"
  },
  {
    label: "Week 9 Notes",
    url: "week9/index.html"
  },
  {
    label: "Week 10 Notes",
    url: "week10/index.html"
  }  
 ];

 const linksTeams = [
  {
    label: "No Team Activity",
    url: "./"
  },
  {
    label: "Week 2  Team Activity",
    url: "week2/team.html"
  },
  {
    label: "Week 3  Team Activity",
    url: "week3/team.html"
  },
  {
    label: "Week 4  Team Activity",
    url: "week4/team.html"
  },
  {
    label: "Week 5  Team Activity",
    url: "week5/team.html"
  },
  {
    label: "No Team Activity",
    url: ""
  },
  {
    label: "Week 7 Team Activity",
    url: "week7/team/index.html"
  }
  ,
  {
    label: "Week 8 Team Activity",
    url: "http://trentonsouth.com/wdd330/week8/team/"
  },
  {
    label: "Week 9 Team Activity",
    url: "week9/team/index.html"
  },
  {
    label: "Week 10 Team Activity",
    url: "week10/team/index.html"
  }
 ];

 let tocAssignments = document.getElementById("tocAssignments");
 let tocTeams = document.getElementById("tocTeams");

 links.forEach(function(link) {
   var li = document.createElement("li");
   li.innerHTML = `<a href="${link.url}">${link.label}</a>`;
   tocAssignments.appendChild(li);
 });

 linksTeams.forEach(function(link) {
  var li = document.createElement("li");
  li.innerHTML = `<a href="${link.url}">${link.label}</a>`;
  tocTeams.appendChild(li);
});
