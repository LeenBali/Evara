let order=document.querySelector('.order')
let dashboard= document.querySelector('.dashboard');
let x=document.querySelector('.x');
let dash=document.querySelector('.dash');
dashboard.onclick=function(){
    dash.style.display='block';
    dashboard.style.background='hsl(176, 88%, 27%)';
    dashboard.style.color='white';
    order.style.background='none';
    order.style.color='black';
    add.style.display="none";
    address.style.background='none';
    address.style.color='black';
    x.style.display='none';
    adds.style.display='none';
    update.style.background='none';
    update.style.color='black';
    change.style.background='none';
    change.style.color='black';
    chan.style.display='none';
}
order.onclick=function(){
    dash.style.display='none';
    order.style.background='hsl(176, 88%, 27%)';
    order.style.color='white';
    dashboard.style.background='none';
    dashboard.style.color='black';
    address.style.background='none';
    address.style.color='black';
    x.style.display='block';
    x.style.marginLeft='57px'
    add.style.display="none";
    adds.style.display='none';
    update.style.background='none';
    update.style.color='black';
    chan.style.display='none';
    change.style.background='none';
    change.style.color='black';
}
let address=document.querySelector('.address');
let add=document.querySelector('.add');
address.onclick=function(){
    address.style.background='hsl(176, 88%, 27%)';
    address.style.color='white';
    dashboard.style.background='none';
    dashboard.style.color='black';
    order.style.background='none';
    order.style.color='black';
    add.style.display="block";
    dash.style.display='none';
    x.style.display='none';
    adds.style.display='none';
    update.style.background='none';
    update.style.color='black';
    change.style.background='none';
    change.style.color='black';
    chan.style.display='none';
}
let but=document.querySelector('button');
let user=document.querySelector('.user').value;
function r(){
sessionStorage.setItem('r',user);
alert('kk')
}
let update=document.querySelector('.update');
let adds=document.querySelector('.adds');
update.onclick=function(){
    adds.style.display='block';
    add.style.display="none";
    dash.style.display='none';
    x.style.display='none';
    update.style.background='hsl(176, 88%, 27%)';
    update.style.color='white';
    dashboard.style.background='none';
    dashboard.style.color='black';
    address.style.background='none';
    address.style.color='black';
    order.style.background='none';
    order.style.color='black';
    chan.style.display='none';
    change.style.background='none';
    change.style.color='black';
}
let change=document.querySelector('.change');
let chan=document.querySelector('.chan');
change.onclick=function(){
    chan.style.display='block';
    order.style.display='none';
    adds.style.display='none';
    add.style.display="none";
    dash.style.display='none';
    change.style.background='hsl(176, 88%, 27%)';
    change.style.color='white';
    dashboard.style.background='none';
    dashboard.style.color='black';
    address.style.background='none';
    address.style.color='black';
    order.style.background='none';
    order.style.color='black';
}
let current=document.querySelector('.current');
let savepass=document.querySelector('.savepass');
let alert=document.querySelector('.alert');
let news=document.querySelector('.news');
let confirm=document.querySelector('.confirm');
savepass.onclick=function(){
    if(current.value!=='12345'){
        alert.style.display='block';
    alert.innerHTML='the current password incorrect';
    alert.style.color='red';
    }
   else if(news.value.length<8){
    alert.style.display='block';
        alert.innerHTML='the current password least of 8';
        alert.style.color='red';
    }
   else if(confirm.value!==news.value){
    alert.style.display='block';
        alert.innerHTML='password incorrect';
        alert.style.color='red';
    }
}
