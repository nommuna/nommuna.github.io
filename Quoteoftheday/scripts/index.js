function getQuote(){
    var quoteSection = document.getElementById('quoteSection');
    var quoteBtn = document.getElementById('newQuotebtn');
    var jumbotron = document.getElementById('jumbotron');
    var colors = ["#4286f4","#bf5bd8", "#d85b87", "#d85b5b", "#76d85b", "#5bd8aa", "#d8b95b", "#d87e5b", "#d85b5b"];
    quoteBtn.addEventListener("click",function(){
        var i = Math.floor((Math.random()*9)+0);
        jumbotron.style.background = colors[i];
        document.body.style.background = colors[i];
        $.ajax({
              type: 'GET',
              url:  'http://quotes.stormconsultancy.co.uk/random.json',
              success: function(resp) {
                quoteSection.innerHTML = resp.quote;
              },
        });

    });

}
getQuote();
