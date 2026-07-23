let addto=document.querySelectorAll('.addto');
let icon=document.querySelector('.icons');
let o=document.querySelector('.o')
let count=0;
addto.forEach(element=>{
    element.onclick=function(){
        count++;
        o.textContent=`${count}`;
    
        o.style.background='hsl(176, 88%, 27%)';
        o.style.textAlign='center';
        o.style.width='23px';
        o.style.height='23px';
        o.style.transform=' translate(-71px, -12px)';
       o.style.marginBottom='-24px';
        o.style.borderRadius='50%';
        o.style.color='white';
    }
  let remove=document.querySelectorAll('.remove');
   
    remove.forEach(ele=>{
    ele.onclick=function(){
        for(let i=0; i<=count;i++){
    i=count--;
        o.textContent=`${i}`;
    }
}
})
})


  