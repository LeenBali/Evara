let pop=document.getElementById('pop');
let dis=document.querySelector('.displa');
let iteams=document.querySelector('.iteams');
let iteams1=document.querySelector('.iteams1');
let fea=document.getElementById('fea');
let display=document.querySelector('.display');
let displays=document.querySelector('.displays');
let displas=document.querySelector('.displas');
let added=document.querySelector('.added');
let add=document.querySelectorAll('.add')
 let i1=document.querySelector('.i1');
pop.onclick=function(){
    dis.style.display='block';
    display.style.display='block';
   iteams.style.display='none';
   iteams1.style.display='none';
   displays.style.display='none';
    displas.style.display='none';
   pop.style.background='hsl(34, 94%, 87%';
   pop.style.borderColor='hsl(34, 94%, 87%';
   fea.style.background="hsl(129, 36%, 85%)";
   fea.style.borderColor="hsl(129, 36%, 85%)";
   fea.style.color='black';
   added.style.background="hsl(129, 36%, 85%)";
   added.style.borderColor="hsl(129, 36%, 85%)";
   added.style.color='black';
}
fea.onclick=function(){
    iteams.style.display='block';
    iteams1.style.display='block';
    dis.style.display='none';
    display.style.display='none';
    displays.style.display='none';
    displas.style.display='none';
    fea.style.background='hsl(34, 94%, 87%';
    fea.style.borderColor='hsl(34, 94%, 87%';
    pop.style.background="hsl(129, 36%, 85%)";
    pop.style.borderColor="hsl(129, 36%, 85%)";
    added.style.background="hsl(129, 36%, 85%)";
    added.style.borderColor="hsl(129, 36%, 85%)";
    pop.style.color='black';
}
added.onclick=function(){
    iteams.style.display='none';
    iteams1.style.display='none';
    dis.style.display='none';
    display.style.display='none';
    displays.style.display='block';
    displas.style.display='block';
    added.style.background='hsl(34, 94%, 87%';
    added.style.borderColor='hsl(34, 94%, 87%';
    fea.style.background="hsl(129, 36%, 85%)";
    fea.style.borderColor="hsl(129, 36%, 85%)";
    fea.style.color='black';
    pop.style.background="hsl(129, 36%, 85%)";
    pop.style.borderColor="hsl(129, 36%, 85%)";
    pop.style.color='black';
}



let slids=document.querySelector('.slids');

slids.onclick=function(){
document.getElementById('w1').src='category-6.jpg';
document.querySelector('.hats').innerHTML='powerfull';
document.getElementById('w2').src='product-10-1.jpg';
document.querySelector('.t-shirt').innerHTML='sandal';
document.getElementById('w3').src='product-7-1.jpg';
document.querySelector('.bags').innerHTML='T-Shirt';
document.getElementById('w4').src='showcase-img-1.jpg';
document.querySelector('.sandal').innerHTML='Bags';
document.getElementById('w5').src='product-13-1.jpg';
document.querySelector('.scarf').innerHTML='Small bags';
document.getElementById('w6').src='showcase-img-5.jpg';
document.querySelector('.shoes').innerHTML='T-shirt';
}

let slidss=document.querySelector('.slidss');
slidss.onclick=function(){
document.getElementById('w7').src='category-6.jpg';
document.querySelector('.hats').innerHTML='powerfull';
document.getElementById('w8').src='product-10-1.jpg';
document.querySelector('.t-shirt').innerHTML='sandal';
document.getElementById('w9').src='product-7-1.jpg';
document.querySelector('.bags').innerHTML='T-Shirt';
document.getElementById('w10').src='showcase-img-1.jpg';
document.querySelector('.sandal').innerHTML='Bags';
document.getElementById('w11').src='product-13-1.jpg';
document.querySelector('.scarf').innerHTML='Small bags';
document.getElementById('w12').src='showcase-img-5.jpg';
document.querySelector('.shoes').innerHTML='T-shirt';

}

let slis=document.querySelector('.slis');
slis.onclick=function(){
document.getElementById('w1').src='category-8.jpg';
document.querySelector('.hats').innerHTML='Hats';
document.getElementById('w2').src='category-1.jpg';
document.querySelector('.t-shirt').innerHTML='T-Shirt';
document.getElementById('w3').src='product-13-2.jpg';
document.querySelector('.bags').innerHTML='Bags';
document.getElementById('w4').src='product-10-1.jpg';
document.querySelector('.sandal').innerHTML='Sandal';
document.getElementById('w5').src='category-4.jpg';
document.querySelector('.scarf').innerHTML='Scarf Cap';
document.getElementById('w6').src='category-5.jpg';
document.querySelector('.shoes').innerHTML='Shoes';
}

    let sliss=document.querySelector('.sliss');
    sliss.onclick=function(){
    document.getElementById('w7').src='category-8.jpg';
    document.querySelector('.hats').innerHTML='Hats';
    document.getElementById('w8').src='category-1.jpg';
    document.querySelector('.t-shirt').innerHTML='T-Shirt';
    document.getElementById('w9').src='product-13-2.jpg';
    document.querySelector('.bags').innerHTML='Bags';
    document.getElementById('w10').src='product-10-1.jpg';
    document.querySelector('.sandal').innerHTML='Sandal';
    document.getElementById('w11').src='category-4.jpg';
    document.querySelector('.scarf').innerHTML='Scarf Cap';
    document.getElementById('w12').src='category-5.jpg';
    document.querySelector('.shoes').innerHTML='Shoes';

    }
    let images = document.querySelectorAll('.images'); // تحديد جميع الصور
    let count = 0; // العداد
    let cart = []; // مصفوفة لتخزين الصور
    let di = document.querySelector('.di'); // تحديد عنصر عرض الصور
    add.forEach(e => {
        e.onclick = function () {
            count++;
            let o = document.querySelector('.o'); 
            o.textContent = `${count}`; 
            e.style.background='hsl(176, 88%, 27%)';
            o.style.background='hsl(176, 88%, 27%)';
            o.style.color='white';
            i1.style.transform='translate(-94px, -20px)';
            o.style.transform='translate(-74px, 7px)';
            o.style.borderRadius='50%';
            o.style.width='25px';
            o.style.textAlign='center';
            i1.onclick=function(){
            cart.push(images.src);
            di.innerHTML='';
            cart.forEach(src=>{
            if(e.target==='active')
                di.innerHTML=`<img src=${src}>`;
})
        };
    }
    });








let coun=0;
let i2=document.querySelector('.i2');
let heart=document.querySelectorAll('.heart');
let u=document.querySelector('.u');
heart.forEach(el=>{
    el.onclick=function(){
        coun++;
        let i2=document.querySelector('.i2');
        u.textContent=`${coun}`;
        el.style.background='hsl(176, 88%, 27%)';
        u.style.background='hsl(176, 88%, 27%)';
        u.style.color='white';
        u.style.transform='translate(-123px, -3px)';
        u.style.borderRadius='50%';
        u.style.width='50px';
        u.style.textAlign='center';
    }
})
