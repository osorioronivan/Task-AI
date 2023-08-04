// async function logMovies() {
//     const response = await fetch("http://dog.ceo/api/breeds/image/random");
//     const movies = await response.json();
//     console.log(movies);
//   }

var btnSearch = document.getElementById("btn-search")

btnSearch.addEventListener('click',()=>{
    fetch("https:/apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            var activityName = document.getElementById("activity-name")
            activityName.textContent = `"${data.activity}"`
    })
})
