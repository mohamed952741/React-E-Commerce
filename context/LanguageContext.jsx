import { createContext, useEffect, useState } from "react";

export const LanguageContext = createContext();
export default function LanguageProvider({children}){
    const [language,setLanguage] = useState(localStorage.getItem('lang') || 'en');
    useEffect(() =>{
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        localStorage.setItem('lang',language);
    },[language]);

    return(
        <LanguageContext.Provider value={{language,setLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}