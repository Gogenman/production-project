/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'
import style from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation()

    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <div>LOGO</div>

            <div className={style.links}>
                <AppLink
                    theme={AppLinksTheme.SECONDARY}
                    to="/"
                >
                    {t('Главная')}
                </AppLink>

                <AppLink
                    theme={AppLinksTheme.SECONDARY}
                    to="/about"
                >
                    {t('О нас')}
                </AppLink>
            </div>

        </div>
    )
}
