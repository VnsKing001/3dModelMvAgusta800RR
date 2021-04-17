process.on('', function(code){
    setTimeout(function(){
        console.log("ahihi");
    }, 1000);
    console.log(code);
});
