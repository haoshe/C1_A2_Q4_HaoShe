/* create an object of navbar's dropdown menu */
var dropdown = document.getElementById("dropdown");
/* create an array to store all of season names for the dropdown menu */
var seasons = ["Spring", "Summer", "Autumn", "Winter"];
/* create an array to store all the class names for different seasons, so I get get that season's element by its class name */
var seasonActivities = ["SpringActivity", "SummerActivity", "AutumnActivity", "WinterActivity"];
/* create an array to store all the season ids, so when I click the dropdown menu's link, the link can direct me to that season carousel */
var seasonIds = ["#spring", "#summer", "#autumn", "#winter"];

/* this loop is to create dropdown menu link, i wil be 0, 1, 2 adn 3 */
for (var i = 0; i < seasons.length; i++) {
  /* get season name inside seasons array */
  var season = seasons[i];
  /* create li element(list) */
  var li = document.createElement("li");
  /* create a element(link) */
  var a = document.createElement("a");
  /* make link's text as season name(spring, summer, autumn and winter) */
  a.textContent = season;
  /* give the link a bootstrap "dropdown-item" class */
  a.className = "dropdown-item";
  /* give each link an id (SpringActivity, SummerActivity, AutumnActivity and WinterActivity) */
  a.id = seasonActivities[i]
  /* give each link an onclick attribute, associate with a show function. this.id is whichever the clicked link's id,  */
  a.setAttribute("onclick", "show(this.id)");
  /* set each link's href to corresponding season's id, so it can direct us to that season carousel when it is clicked */
  a.href = seasonIds[i];
  /* give each link a value */
  //a.value = season;

  /* append each a link to the created li element */
  li.appendChild(a);
  /* then append each li element to the dropdown object */
  dropdown.appendChild(li);
}

// activity = this.id = seasonActivities[i] = SpringAcivity, SummerAcitvity, AutumnActivity and WinterActivity
function show(activity) {
    // acts is an arry contains all elements which have activity(SpringAcivity, SummerAcitvity, AutumnActivity and WinterActivity) class
    const acts = document.getElementsByClassName(activity);
   // in this case, there is only one element in the acts array, which will be the div with the id spring, summer, autumn or winter
   // so I just chose acts[0], the first also the last value inside acts array
    switch (acts[0]) {
      // when acts[0] is spring
      case spring:
        // I remove the "d-none" class from that div, so the spring carousel can be seen
        acts[0].classList.remove("d-none");
        // then add "d-none" class to the rest carousel divs, so they can not be seen.
        // summer carousel
        document.getElementsByClassName(seasonActivities[1])[0].classList.add("d-none");
        // autumn carousel
        document.getElementsByClassName(seasonActivities[2])[0].classList.add("d-none");
        // winter carousel
        document.getElementsByClassName(seasonActivities[3])[0].classList.add("d-none");
        break;
      case summer:
        acts[0].classList.remove("d-none");
        document.getElementsByClassName(seasonActivities[0])[0].classList.add("d-none");
        document.getElementsByClassName(seasonActivities[2])[0].classList.add("d-none");
        document.getElementsByClassName(seasonActivities[3])[0].classList.add("d-none");
        break;
      case autumn:
        acts[0].classList.remove("d-none");
        document.getElementsByClassName(seasonActivities[0])[0].classList.add("d-none");
        document.getElementsByClassName(seasonActivities[1])[0].classList.add("d-none");
        document.getElementsByClassName(seasonActivities[3])[0].classList.add("d-none");
        break;
      case winter:
        acts[0].classList.remove("d-none");
        document.getElementsByClassName(seasonActivities[0])[0].classList.add("d-none");
        document.getElementsByClassName(seasonActivities[1])[0].classList.add("d-none");
        document.getElementsByClassName(seasonActivities[2])[0].classList.add("d-none");
        break;
    }
 
}
