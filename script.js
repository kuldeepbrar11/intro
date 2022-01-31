console.log("script running...")

document.querySelector('.cross').style.display = 'none'
document.querySelector('.menuIcon').addEventListener("click", ()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.menu').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else{
        document.querySelector('.cross').style.display = 'inline'
       setTimeout(() => {
        document.querySelector('.menu').style.display = 'none'
       }, 300);
    }
})
