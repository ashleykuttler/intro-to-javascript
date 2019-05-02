// from data.js
var tableData = data;

// create variables 
var filterTable = d3.select("#filter-btn");
var inputDate = d3.select("#datetime");
var tbody = d3.select("tbody");
var columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];
// function to retrieve data and append to table form in tbody of html 
const getData = (userInput) => {
    userInput.forEach(ufo_sightings => {
        let row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_sightings[column])
        )
    });
}
//populate table
getData(tableData)

filterTable.on("click", function(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    //assign value of user input date to userDate variable, remove spaces
    var userDate = inputDate.property("value").trim();
    //filter datatable for dates equal to user input
    var filterDate = tableData.filter(tableData => Date.parse(tableData.datetime) === Date.parse(userDate));
    console.log(filterDate)
    //add filtered data to table
    tbody.html("");
    //if response length is not equal to zero run getData function to retrieve filtered results
    if (filterDate.length !== 0) {
        getData(filterDate);
    }   
    //Otherwise return  message
        else {
            tbody.append("tr").append("td").text("No Results");
        }
    });