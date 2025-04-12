var index=0;
function carousel(){
    var i;
    var x=document.getElementsByClassName("myslides");
    for(i=0; i<x.length; i++){
        x[i].style.display="none"
    }
    index++;
    if(index>x.length){
index=0
    }
    setTimeout(carousel,2000)
}
carousel();