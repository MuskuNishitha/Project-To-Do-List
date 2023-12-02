let form = document.getElementById("form")
console.log(form);
let demo =document.getElementById("demo")
console.log(demo);
let data= document.getElementById("data")
console.log(data);
form.addEventListener("click",(e)=>{
    e.preventDefault()
    if(e.target.innerHTML == "Add"){
        console.log(e.target);
        data.innerHTML += `<div id="div">
        <p> ${demo.value}</p>
        <button>Edit</button>
         <button>Delete</button>
        </div>`
        demo.value=""
    }else if(e.target.innerHTML=="Delete"){
        console.log(e.target);
        e.target.parentElement.remove();

    }else if(e.target.innerHTML=="Edit"){
        console.log(e.target);
        console.log(e.target.previousElementSibling.textContent);
        e.target.innerHTML="Update"


    }else if(e.target.innerHTML=="Update"){
        console.log(e.target);
        e.target.previousElementSibling.textContent=demo.value
        e.target.innerHTML="Edit"
        demo.value=""
    }
})