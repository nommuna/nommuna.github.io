google.charts.load('current', {
    packages: ['bar']
});
google.charts.setOnLoadCallback(drawGID);

function drawGID() {
    //var queryString = encodeURIComponent('');

    var query = new google.visualization.Query(
        'https://docs.google.com/spreadsheets/d/1XaefupR5KF99qBrGa9m9iPMaXnwilsabM04j6FjxjzY/edit#gid=0&headers=1'); //+ queryString);
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        alert('Error in query: ' + response.getMessage() + ' ' + response.getDetailedMessage());
        return;
    }

    var data = response.getDataTable();
    var chart = new google.charts.Bar(document.getElementById('chart_div'));
    var options = {
        title: "Stacked Bar Graph of High Score Reviews",
        height: 800,
        isStacked: true,
        colors: ['#e0440e', '#e6693e', '#ec8f6e', '#f3b49f', '#f6c7b6'],
        hAxis: {
            title: "Judge Id"
        },
        vAxis: {
            title: "Scaled Age, Height, Weight, Courses"
        }
    };
    chart.draw(data, google.charts.Bar.convertOptions(options), {
        height: 400
    });
}

//&headers=1&tq=
