
let add=document.querySelectorAll('.add');
add.forEach(elemnt=>{
elemnt.onclick=function(){
  window.open('add.html','_blank');
}
})
let product1=document.querySelector('.product1');
let product2=document.querySelector('.product2');
let product3=document.querySelector('.product3');
let product=document.querySelector('.products');
product1.onclick=function(){
document.querySelector('.products').src='product-1-2.jpg';
product.style.width='440px'
}
product2.onclick=function(){
  document.querySelector('.products').src='product-1-1.jpg';
  product.style.width='440px'
  }
  product3.onclick=function(){
    document.querySelector('.products').src='product-1-2.jpg';
    product.style.width='440px'
    }
    let m=document.querySelector('.m');
    let l=document.querySelector('.l');
    let xl=document.querySelector('.xl');
    let xxl=document.querySelector('.xxl');
    l.onclick=function(){
      l.style.background='hsl(176, 88%, 27%)';
     l.style.padding='7px';
     l.style.transform='translateY(-6px)';
     l.style.color='white';
    m.style.background='none';
    m.style.color='black';
    xl.style.background='none';
    xl.style.color='black';
    xxl.style.background='none';
    xxl.style.color='black';
    }
    xl.onclick=function(){
      xl.style.background='hsl(176, 88%, 27%)';
     xl.style.padding='7px';
     xl.style.transform='translateY(-6px)';
     xl.style.color='white';
    m.style.background='none';
    m.style.color='black';
    l.style.background='none';
    l.style.color='black';
    xxl.style.background='none';
    xxl.style.color='black';
    }
    xxl.onclick=function(){
      xxl.style.background='hsl(176, 88%, 27%)';
     xxl.style.padding='7px';
     xxl.style.transform='translateY(-6px)';
     xxl.style.color='white';
    m.style.background='none';
    m.style.color='black';
    l.style.background='none';
    l.style.color='black';
    xl.style.background='none';
    xl.style.color='black';
    }
    m.onclick=function(){
      m.style.background='hsl(176, 88%, 27%)';
     m.style.padding='7px';
     m.style.transform='translateY(-6px)';
     m.style.color='white';
    l.style.background='none';
    l.style.color='black';
    xl.style.background='none';
    xl.style.color='black';
    xxl.style.background='none';
    xxl.style.color='black';
    }

    let count=0;
    let adds=document.querySelectorAll('.adds');
    adds.forEach(e=>{
    e.onclick=function (){
        count++;
        let cart=document.getElementById('cart');
        let i1=document.querySelector('.i1');
        let o=document.querySelector('.o');
        o.textContent=`${count}`;
        e.style.background='hsl(176, 88%, 27%)';
        o.style.background='hsl(176, 88%, 27%)';
        o.style.color='white';
      i1.style.transform='translate(-94px, -20px)';
        o.style.transform='translate(-74px, 7px)';
        o.style.borderRadius='50%';
        o.style.width='25px';
        o.style.textAlign='center';
    }
    })
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