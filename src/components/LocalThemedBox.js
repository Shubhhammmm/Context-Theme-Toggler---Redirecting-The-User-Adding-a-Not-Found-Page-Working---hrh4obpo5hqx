import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {
const {theme} = useContext(ThemeContext)
const [loacalTheme, setLoacalTheme]=useState(theme)
useEffect(() => {
    setLoacalTheme(theme)
},[theme])
const changeLocalTheme = () =>{
    setLoacalTheme(loacalTheme == 'light' ? 'dark' : 'light')
}

return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box" className={`bg-${loacalTheme}`}>
        <p className={`txt-${loacalTheme}`} id="local-themed-text-container" >anything</p>
        <button onClick={changeLocalTheme} id="local-theme-toggler" className={`btn btn-${loacalTheme}`}>Toggle local theme to {loacalTheme == 'light' ? 'dark': 'light'}</button>
        
    </div>
)
}

export { LocalThemedBox }
