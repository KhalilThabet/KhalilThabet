var w = window.innerWidth;
var h = window.innerHeight;
if(w <= 1100){
    document.getElementById("topnav").style.display = "none";
    document.getElementById("sidenav").style.display = "block";
    document.getElementById("myname").style.textTransform = "uppercase";
}
else{
    document.getElementById("topnav").style.display = "block";
    document.getElementById("sidenav").style.display = "none";
}
function appearVideo(PATH,element1,element2){
    var block_to_insert ;
        var container_block ;
        
        block_to_insert = document.createElement( 'div' );
        block_to_insert.innerHTML = "<video style=''width='320' height='240' autoplay muted><source src='"+PATH+"' type='video/mp4' ></video>" ;
        
        container_block = document.getElementById(element1);
        container_block.appendChild( block_to_insert );
        document.getElementById(element2).remove();
}