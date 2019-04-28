// from data.js
var tableData = data;

// YOUR CODE HERE!
var filterTable = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"]

var getData = (userInput) => {
    userInput.forEach(ufo_sightings => {
        let row = tbody.append("tr")
        columns.forEach(column => row.append("td").text(ufo_sightings[column])
        )
    })
}

getData(tableData)

// filterTable.on("click", function(){

// })