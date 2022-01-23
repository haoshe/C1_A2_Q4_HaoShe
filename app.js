var dropdown = document.getElementById('dropdown');
var seasons = ['Spring', 'Summer', 'autumn', 'Winter'];
var seasonActivities = ['spring', 'summer', 'autumn', 'winter'];
var seasonIds = ['#spring', '#summer', '#autumn', '#winter'];
// const spring = "seasons/spring.html";
// const summer = "seasons/summer.html";
// const autumn = "seasons/autumn.html";
// const winter = "seasons/winter.html";
// const seasonUrl = [];
// seasonUrl.push(spring);
// seasonUrl.push(summer);
// seasonUrl.push(autumn);
// seasonUrl.push(winter);

for(var i=0; i < seasons.length; i++){
    var season = seasons[i];
    var li = document.createElement('li');
    var a = document.createElement('a');
    a.textContent = season;
    a.className = 'dropdown-item';
    // a.href = seasonUrl[i];
    a.href = seasonIds[i];
    //a.onclick = "show(`${seasonActivities[i]}`)";
    a.value = season;
    li.appendChild(a)
    dropdown.appendChild(li);
}

// function show(seasonActivity){
//     const activity = document.getElementById(seasonActivity);
//     activity.addEventListener('click', () => {
//         activity.classList.toggle('d-block');
//     });
// }