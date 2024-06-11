// setting date i count down to
const targetDate = new Date('July 23 , 2024 00:00:00').getTime();

// setting interval function to do code and set time to 1000

var conter = setInterval(function(){
    // function body to implement the count down timmer

    // Get the current date and time
    let now = new Date().getTime();

    // Calculate  time between now and the target date
    let interval = targetDate - now;

    // html code 
    document.getElementById('days').innerHTML = '0';
    document.getElementById('hours').innerHTML = '0';
    document.getElementById('minutes').innerHTML = '0';
    document.getElementById('seconds').innerHTML = '0';

    //calc interval
     var days = Math.floor(interval / (1000 * 60 * 60 * 24));
     var hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((interval % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((interval  % (1000 * 60)) / 1000);

     // html code 
     document.getElementById('days').innerHTML = days + ' Days';
     document.getElementById('hours').innerHTML = hours + ' Hours';
     document.getElementById('minutes').innerHTML = minutes + ' Minutes';
     document.getElementById('seconds').innerHTML = seconds + ' Seconds'; 

} , 500);
console.log('flasSale')