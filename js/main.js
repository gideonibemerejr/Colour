$(document).ready(function () {
    $("body").mousewheel(function (event, delta) {

                 //The "30" represents speed. preventDefault ensures the page won't scroll down.
                 this.scrollLeft -= (delta * 30);
                event.preventDefault();

    });
    setTimeout(function () {
        $('body').addClass('loaded');
    }, 8000);
    
    $("a").hover(function (e)
     {
        var randomClass = getRandomClass();
        $(e.target).attr("class", randomClass);
    });
    function getRandomClass()
    {
        //Store available css classes
        var classes = new Array("green", "yellow", "blue", "red");

        //Give a random number from 0 to 5
        var randomNumber = Math.floor(Math.random() * 6);

        return classes[randomNumber];
    }
});