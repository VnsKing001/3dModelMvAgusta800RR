window.addEventListener("load", ()=>{
    const canvas = document.getElementById("paint-layout");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let painting = false;
    function startPosition(e){
        painting = true;
        draw(e);
    }
    function endPosition(){
        painting= false;
        ctx.beginPath();
    }
    function draw(e){
        if(painting == false) return;
        ctx.lineWidth = document.getElementById("penSize").value;
        ctx.lineCap = "round";
         ctx.strokeStyle = document.getElementById("favcolor").value;
        ctx.lineTo(e.clientX, e.clientY);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX, e.clientY);
    }
    canvas.addEventListener("mousedown", startPosition);
    canvas.addEventListener("mouseup", endPosition);
    canvas.addEventListener("mousemove", draw);
})