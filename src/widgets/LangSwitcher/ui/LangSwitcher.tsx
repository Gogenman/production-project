import { useTranslation } from "react-i18next"
import style from './LangSwitcher.module.scss'

const LangSwitcher = () => {
    const {t, i18n} = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }

    return (
        <div>
            <button 
                onClick={toggle}
                className={style.themeSwitcher}
            >
                {t('Перевод')}
            </button>
        </div>
    )
}
 
export default LangSwitcher;