var loveScore = Math.random();
loveScore = loveScore * 100
loveScore = Math.floor(loveScore);

if(loveScore > 70){
    console.log("Your love score is " + loveScore + "%. You love each other like Kayne loves Kayne!");
}else if(loveScore < 40){
    console.log("Your love score is " + loveScore + "%. Y'all suck!");
}else{
    console.log("Your love score is " + loveScore + "%");
}