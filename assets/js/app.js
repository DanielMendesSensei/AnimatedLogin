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
})

registerLink.addEventListener('click', ()=> {
  wrapper.classList.add('active');
})

btnPopup.addEventListener('click', ()=> {
  wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', ()=> {
  wrapper.classList.remove('active-popup');
})
