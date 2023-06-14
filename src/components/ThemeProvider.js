import React, { useState } from 'react';

const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{
    const [theme, setTheme]=useState('light')
    const changeTheme = ()=>{
        setTheme(theme == 'light' ? 'dark' : 'light')
    }

    return (
        <React.Fragment>
        <ThemeContext.Provider value={{theme,changeTheme}}>
            {props.children}
        </ThemeContext.Provider>
        </React.Fragment>
    )
}

export {ThemeProvider,ThemeContext}
