// Import data
var tableData = data;

// Select table body
var tbody = d3.select("#ufo-table>tbody");

// Create function to loop through the data and build the table
function buildTable(data) {
    tableData.forEach(function(record) {
        var row = tbody.append("tr");

        Object.entries(record).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value)
        });
    })
};
// buildTable(tableData);

// Create function to filter table - Only flter Datetime
function filterTable(data) {
    
    // Identify the input element and select the input value
    inputElement = d3.select("#datetime")
    inputValue = inputElement.property("value")
    
    // Filter Data based on input
    var filteredData = tableData.filter(data => 
        data.datetime == inputValue)
    
    // Clear table
    var tbody = d3.select("#ufo-table>tbody");
    tbody.html(" ");

    // Dynamically load filtered data
    filteredData.forEach((record) => {
        var row = tbody.append("tr");

        Object.entries(record).forEach(function([key, value]) {
            var cell = row.append("td");
            cell.text(value);
        })
        
        // var datetime = record.datetime;
        // var city = record.city;
        // var state = record.state;
        // var country = record.country;
        // var shape = record.shape;
        // var duration = record.durationMinutes;
        // var comments = record.comments;

        // var cell = row.append("td");
        // cell.text(datetime);

        // var cell = row.append("td");
        // cell.text(city);

        // var cell = row.append("td");
        // cell.text(state);

        // var cell = row.append("td");
        // cell.text(country);

        // var cell = row.append("td");
        // cell.text(shape);

        // var cell = row.append("td");
        // cell.text(duration);

        // var cell = row.append("td");
        // cell.text(comments);
    })
};

// // Filter multiple fields
// function filterTable() {
//     var filteredData = tableData;

//     var datetime = d3.select("#datetime").property("value");
//     var datetime = d3.select("#city").property("value");
//     var datetime = d3.select("#state").property("value");
//     var datetime = d3.select("#country").property("value");
//     var datetime = d3.select("#shape").property("value");

//     var filterFields = {
//         "datetime": datetime,
//         "city": city,
//         "state": state,
//         "country": country,
//         "shape": shape
//     }

//     Object.entries(filterFields).forEach(([key, val]) => {
//         if (!val) {
//             delete filterFields[key];
//         }
//     });

//     Object.entries(filterFields).forEach(([key, value]) => {
//         filteredData = filteredData.filter(row => row[key] == value);
//     });

//     tbody.html(" ");

//     filteredData.forEach((record) => {
//         var row = tbody.append("tr");

//         Object.entries(record).forEach(function([key, value]) {
//             var cell = row.append("td");
//             cell.text(value);
//         })
//     })
// };



// Select the button and create event handler
var btn = d3.select("#filter-btn")
// datetimefield = d3.select("#datetime");

btn.on("click", filterTable);
// datetimefield.on('change', filterTable);

// btn.on("click", multiFilterTable)
// 3.selectAll('.filter list-group-item').on('change', filterTable);

buildTable(tableData);