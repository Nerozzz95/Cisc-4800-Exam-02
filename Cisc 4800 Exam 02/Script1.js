// JavaScript source code
function fetchData() {
    const getData = Math.floor(Math.random());
    fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data.all[getData]);
            const get = data.all[getData];
            document.getElementById("Year").innerHTML = "#" + getData;
            document.getElementById("Deaths").innerHTML = get.text;
            document.getElementById("Death Rate").innerHTML = getData + "%";
        })
        .catch(error => console.log("ERROR"));
}