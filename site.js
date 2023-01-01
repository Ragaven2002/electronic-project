let index=0;
showslide();
function showslide(){
    let i;
    let slide=document.getElementsByClassName("slide");
    for(i=0;i<slide.length;i++)
    {
        slide[i].style.display="none";
    }
    index++;
    if(index>slide.length)
    {
        index=1;
    }
    slide[index-1].style.display="block";
    setTimeout(showslide,4000);
}

const search=()=>{
    const searchbox= document.getElementById("searchinput").value.toUpperCase();
    const productlist=document.getElementsByClassName(".center");
    const product = document.querySelectorAll(".box");
    const pname = document.getElementById("p");

    for(var i=0;i< pname.length;i++){
        let match=product[i].getElementsById("p")[0];
        if(match){
            let textvalue=match.textContent||match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchbox)>-1){
                product[i].style.display="";
            }else{
                product[i].style.display="none";
            }
        }
    }

}