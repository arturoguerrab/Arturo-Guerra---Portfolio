import { useContext } from "react";
import { DataContext } from "../context/DataContextProvider";
import { useTranslation } from "react-i18next";


const Vite = () => {
    const {toggleLanguage} = useContext(DataContext)
    const[t] = useTranslation("global")

    return (
        <>
            <h1>{t("header.hello")}</h1>
                <button onClick={() => {toggleLanguage()}}>
                    Change
                </button>
        </>
    )
}

export default Vite
