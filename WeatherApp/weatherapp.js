
$(function (){
    var $temp = $('#numberTemp');
    var $namex = $('#cityName');
    var $description = $('#description');
    var $wind = $('#wind');
    var $cloudiness = $('#cloudiness');
    var $humidity = $('#humidity');
    var $pressure = $('#pressure');
    var $mintemp = $('#mintemp');
    var $maxtemp = $('#maxtemp');
    var $avgname = $('#avgname');

    $('#submitbtn').click(function(event){
        $("#tableinfo").show(1000);
        var location = $('#inputtxt').val();
        $.ajax({
            type: 'GET',
            url: "http://api.openweathermap.org/data/2.5/weather?q="+location+"&units=imperial&APPID=5eea63b2ee3505c58713d9149832d4c5",
            success: function(data){
                $temp.html('<h2>'+data.main.temp+'</h2>');
                $namex.html('<h2>'+data.name+'</h2>');
                $description.html('<p>'+data.weather[0].description+'</p>');
                $wind.html('<td>'+data.wind.speed+'</td>');
                $cloudiness.html('<td>'+data.weather[0].main+'</td>');
                $humidity.html('<td>'+data.main.humidity+'</td>');
                $pressure.html('<td>'+data.main.pressure+'</td>');
                $mintemp.html('<td>'+data.main.temp_min+'</td>');
                $maxtemp.html('<td>'+data.main.temp_max+'</td>');
                $avgname.html('<h2>'+data.name+' Averages</h2>');
            }
        });
        $.ajax({
            type: 'GET',
            url: "http://api.openweathermap.org/data/2.5/forecast?q="+location+",us&mode=json&units=imperial&cnt=20&APPID=5eea63b2ee3505c58713d9149832d4c5",
            dataType: 'json',
            success: function(data){
                //console.log(data.list[].main.temp);
                //trying to parse through data for graph
                var numtemp = [];
                var numdate = [];
                    $.each(data.list,function(index, data){
                        //numtemp = [];
                        numtemp.push(data.main.temp);
                        numdate.push(data.dt_txt);
                    });
                    //console.log(numdate);

                var ctx = document.getElementById("myChart");
                var myChart = new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: numdate,
                        datasets: [{
                            label: 'Average temp',
                            data: numtemp,
                            backgroundColor: [
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',
                                'rgba(255, 206, 86, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                                'rgba(255, 159, 64, 0.2)',
                                'rgba(255, 99, 132, 0.2)',
                                'rgba(54, 162, 235, 0.2)',

                            ],
                            borderColor: [
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',
                                'rgba(255, 206, 86, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                                'rgba(255, 159, 64, 1)',
                                'rgba(255,99,132,1)',
                                'rgba(54, 162, 235, 1)',

                            ],
                            borderWidth: 1
                        }]
                    },
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }]
                        }
                    }
                });
                //
            }
        });
    });
});
