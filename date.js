function fun(){
    var sec= prompt("enter your number(seconds)");
    sec=parseInt(sec);
    var min,hour;
    hour = sec/3600;
    hour=Math.floor(hour);
    min=(sec%3600)/60;
    min=Math.floor(min);
    sec=(sec%3600)%60;
    sec=Math.floor(sec);
    console.log(hour + ":" + min + ":" + sec );
}
fun(); 
