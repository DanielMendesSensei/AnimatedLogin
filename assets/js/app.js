//Swich Function
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
  