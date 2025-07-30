let btn =document.querySelector("button");
let ul =document.querySelector("ul");
let input =document.querySelector("input");
let del=document.querySelectorAll(".del");

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    let Delete = document.createElement("button");
    Delete.innerText = "Delete";
    Delete.classList.add("del");
    item.innerText = input.value;
    item.appendChild(Delete);
    ul.appendChild(item);
    console.log(input.value);
    input.value="";
})

ul.addEventListener("click",function(e){
    // console.log(e.target.nodeName);
    // console.dir(e);
    // console.log("BUTTON CLICKED");
   
    if(e.target.nodeName === "BUTTON"){
        console.log("Delete");
        let listItem = e.target.parentElement;
        listItem.remove();
    }
    else{
        console.log("Not Delete")
    }
});


// for(delbtn of del){
//     delbtn.addEventListener("click",function(e){
//       let par=this.parentElement;
//       console.log(par);
//         par.remove();
//     })

// }

