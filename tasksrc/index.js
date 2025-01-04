const add=document.querySelector('.add');
const t1=document.querySelector('.t1');
const t2=document.querySelector('.t2');
const t3=document.querySelector('.t3');
const tasks=document.querySelector('.tasks');
let del=document.querySelectorAll('.delete');
let completed=document.querySelectorAll('.markascompleted');
let edit=document.querySelectorAll('.edit');
const readd=document.querySelector('.readd');
const header=document.querySelector('.header');
let ob1={
    pin:1111
}
let ob2={
    pin:2222
}
let ob3={
    pin:3333
}
let ob4={
    pin:4444
}
let ob5={
    pin:5555
}
let users=[ob1,ob2,ob3,ob4,ob5];
const login=document.querySelector('.loginbtn');
const keyuser=document.querySelector('.user');
const keyvalue=document.querySelector('.key');
let names=document.querySelector('.name');
const mainblock=document.querySelector('.mainblock')
login.addEventListener('click',()=>{
 
    users.forEach(element=>{
        if(element.pin===Number(keyvalue.value)){
            header.classList.remove('headervisible')
            header.classList.add('headerhidden');
            mainblock.classList.remove('mainblockhidden');
            mainblock.classList.add('mainblockvisible');
            
            names.innerText=`welcome Mr ${keyuser.value}`;
            keyuser.value="";
            keyvalue.value="";
        }
    })
})
const logout=document.querySelector('.logout');
logout.addEventListener('click',()=>{
            header.classList.add('headervisible')
            header.classList.remove('headerhidden');
            mainblock.classList.add('mainblockhidden');
            mainblock.classList.remove('mainblockvisible');

})
add.addEventListener('click',()=>{

    let html=`<div class="box">
                <h5 class="names">${t1.value}</h5>
                <p class="description">${t2.value}</p>
                <h5 class="time">deadline ${t3.value}</h5>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
                <button class="markascompleted">Completed</button>
            </div>`;
    tasks.insertAdjacentHTML("beforeend",html);
    del=document.querySelectorAll('.delete');
    completed=document.querySelectorAll(".markascompleted");
    edit=document.querySelectorAll('.edit');
    console.log(del);
    t1.value="";
    t2.value="";
    t3.value="";
    del.forEach(element => {
        element.addEventListener('click',()=>{
            let parent=element.parentElement;
            parent.remove();
    
    
        })
    })
    completed.forEach(element=>{
        element.addEventListener('click',()=>{
            alert("CONGRAGULATIONS UR TASK IS COMPLETED 😍😍");
            let parent=element.parentElement;
            parent.remove();
        })
    })
    edit.forEach(element=>{
        element.addEventListener('click',()=>{
            readd.classList.remove('readdhidden');
            readd.classList.add('readdvisible');
            let parent=element.parentElement;
            console.log(parent.children)
            let h5=parent.children[0];
            let de=parent.children[1];
            console.log(h5);
            console.log(de);
            t1.value=h5.innerText;
            t2.value=de.innerText;
            readd.addEventListener('click',()=>{
                parent.remove();
                let html=`<div class="box">
                <h5 class="names">${t1.value}</h5>
                <p class="description">${t2.value}</p>
                <h5 class="time">deadline ${t3.value}</h5>
                <button class="edit">Edit</button>
                <button class="delete">Delete</button>
                <button class="markascompleted">Completed</button>
            </div>`;
             tasks.insertAdjacentHTML("beforeend",html);
             readd.classList.add('readdhidden');
             readd.classList.remove('readdvisible');
             del=document.querySelectorAll('.delete');
             completed=document.querySelectorAll(".markascompleted");
             edit=document.querySelectorAll('.edit');
             console.log(del);
             t1.value="";
             t2.value="";
             t3.value="";
             del.forEach(element => {
                 element.addEventListener('click',()=>{
                     let parent=element.parentElement;
                     parent.remove();
             
             
                 })
             })
             completed.forEach(element=>{
                 element.addEventListener('click',()=>{
                     alert("CONGRAGULATIONS UR TASK IS COMPLETED 😍😍");
                     let parent=element.parentElement;
                     parent.remove();
                 })
             })
            })
           

            
            

        })
    })

    
   
    
})




