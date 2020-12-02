// JavaScript source code
function fetchData() {
    return fetch('https://data.cityofnewyork.us/resource/jb7j-dtam.json')
        .then(response => response.json())
        .then(json => renderDatas(json))
        .catch(error => console.log("ERROR"))
}

function renderDatas(json){
    const main = document.creatElement('p')
    json.forEach(data => {
    p.innerHTML = <strong>Year:</strong> ${data.year}
    p.innerHTML = <strong>Deaths:</strong> ${data.death}
    p.innerHTML = <strong>Death Rate:</strong> ${data.death_rate}
    main.appendData(p)
   })
}

document.addEventListener('DOMContentLoaded', function(){
    fetchData()
})
