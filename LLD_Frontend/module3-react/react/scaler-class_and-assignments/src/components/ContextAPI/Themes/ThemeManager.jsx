import React, {useState} from 'react'
import Article from './Article'
import Footer from './Footer'
import Header from './Header'

export const ThemeWrapper = React.createContext();
function ThemeManager() {
    const [currTheme, setCurrTheme] = useState("light");
    const toggleTheme = () => {
        let newTheme = currTheme.localeCompare("light") === 0 ? "dark" : "light";
        setCurrTheme(newTheme);
    }
    return (
        <ThemeWrapper.Provider value={{currTheme}}>
            <h1>Theme Manager</h1>
            <button onClick={toggleTheme}>Toggle Theme</button>
            <Header />
            <Footer />
            <Article />
            </ThemeWrapper.Provider>
    )
}

export default ThemeManager