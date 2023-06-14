import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () =>{
    const {theme, changeTheme} =useContext(ThemeContext)
    
    return (
       <> 
       <button className={`btn-${theme} txt-${theme}`} id="global-theme-toggler" onClick={changeTheme}>
        Switch to {theme == 'light' ? 'dark' : 'light'} theme
       </button>
       </>
    )

}
export {ThemeToggleButton}
