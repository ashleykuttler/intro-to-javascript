// from data.js
const tableData = data;

// create variables 
const filterTable = d3.select("#filter-btn");
const reset_table = d3.select("#reset-btn");
const inputDate = d3.select("#datetime");
const tbody = d3.select("tbody");
const columns = ["datetime", "city", "state", "country", "shape", "durationMinutes", "comments"];
// function to retrieve data and append to table form in tbody of html 
const getData = (userInput) => {
    userInput.forEach(ufo_sightings => {
        let row = tbody.append("tr");
        columns.forEach(column => row.append("td").text(ufo_sightings[column])
        )
    });
}

getData(tableData)

filterTable.on("click", function(){
    // Prevent the page from refreshing
    d3.event.preventDefault();
    //assign value of inputdate to userDate variable
    const userDate = inputDate.property("value").trim();
    //filter datatable for dates equal to user input
    const filterDate = tableData.filter(tableData => tableData.datetime === userDate);
    console.log(filterDate)
    //add filtered data to table
    tbody.html("");
    //if response length is not equal to zero run getData function to retrieve results
    if (filterDate.length !== 0) {
        getData(filterDate);
    }   
    //Otherwise return error message
        else {
            tbody.append("tr").append("td").text("No Results");
        }
    });