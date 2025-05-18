let isMenuOpen=false
function handleMenuBar(){
const menuOptions= document.getElementById('menu_container')
const menuIcon = document.getElementById('menu_icon')

isMenuOpen=!isMenuOpen

if(isMenuOpen){
    menuOptions.classList.remove('hidden')

menuOptions.innerHTML=`
<ul  style="list-style: none; gap:10px;">
<li>Home</li>
<li>Services </li>
<li>Portfolio</li>
<li>Reviews</li>
<li>Pricing</li>
<li>White Level</li>
</ul>

`
document.getElementById('menu').innerHTML=`
<img id="menu_icon" style="width: 25px;" src="./assets/icons8-cancel-50.png" alt="menu_icon">


`
menuIcon.classList.add('hidden')
}else{
    menuOptions.classList.add('hidden')
    document.getElementById('menu').innerHTML=`
    <img id="menu_icon" style="width: 25px;" src="./assets/icons8-menu-50.png" alt="menu_icon">`

}

}



document.addEventListener('DOMContentLoaded', function() {
   
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    

    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
        
            const accordionItem = this.parentElement;
            const isActive = accordionItem.classList.contains('active');
          

            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
            });
            
         
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });
    

});