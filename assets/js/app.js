//Swich Function Dark Mode
const swichTheme = () => {
    //Get root elements and date theme value
    const rootElement = document.documentElement
    let dataTheme = rootElement.getAttribute('data-theme'),
      newTheme
    
    newTheme = (dataTheme === 'light') ? 'dark' : 'light'
    if (newTheme === 'dark'){
      document.getElementById("dark_mode").innerHTML = "light_mode";
    } else{
      document.getElementById("dark_mode").innerHTML = "dark_mode";
    }
  
    //Set the new HTML attribute
    rootElement.setAttribute('data-theme', newTheme)
  }
  
  //Add event listner for the theme switcher
  document.querySelector('#dark_mode').addEventListener('click', swichTheme)

//Swich Function Login/Register
const wrapper = document.querySelector('.form-box');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

loginLink.addEventListener('click', ()=> {
  wrapper.classList.remove('active');
});

registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
});

btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
});

//Mobile Menu Function
const mobileMenulink = document.querySelector('#mobile_menu');
const closeMenu = document.querySelector('#close_mobile_menu');
const mobileMenu = document.querySelector('.nav_mobile');

mobileMenulink.addEventListener('click', ()=> {
  mobileMenu.classList.add('active-menu');
  closeMenu.classList.add('transform-close');
  mobileMenulink.style.display = "none";
});

closeMenu.addEventListener('click', ()=>{
  mobileMenu.classList.remove('active-menu');
  closeMenu.classList.remove('transform-close');
  mobileMenulink.style.display = "block";
});







/* const mobileMenu = () => {
  //Get element of menu
  const mobileMenulink = document.querySelector('#mobile_menu')
    let innerData = mobileMenulink.innerHTML,
      activeOrnot
    
    activeOrnot = (innerData === 'menu') ? 'não' : 'sim'
    if (activeOrnot === 'sim'){
      console.log('SIM')
      mobileMenulink.innerHTML = "close"
    } else{
      console.log('NÃO')
      mobileMenulink.innerHTML = "menu"
    }
  }

  document.querySelector('#mobile_menu').addEventListener('click', mobileMenu)
 */
/* const mobileMenu = document.querySelector('.nav_mobile');


mobileMenulink.addEventListener('click',()=>{
  mobileMenu.classList.add('active-menu');
}) */


//OLD
  /* let menu = document.getElementById("mobile_menu");

  activeOrnot = (mobileMenu === 'nav_mobile active-menu') ? 'não' : 'sim'
  if (activeOrnot === 'sim'){
    menu.innerHTML = "close";
    mobileMenu.classList.remove('active-menu');
    console.log('SIM');
  } else{
    menu.innerHTML = "menu";
    console.log('NÃO');
  }


})





// other function
function change_mobile_menu()
{
	if (nav_mobile.style.display == "block")
	{
		nav_mobile.style.display = "none";
		document.getElementById("mobile_menu").style.borderRadius = "10px 0px";
		document.getElementById("mobile_menu").innerHTML = "menu";
	}
	else
	{
		nav_mobile.style.display = "block";
		document.getElementById("mobile_menu").style.borderRadius = "10px 0px 0px 0px";
		document.getElementById("mobile_menu").innerHTML = "close";
	}
}
 */