import { classNames } from "shared/lib/classNames/classNames"
import style from './Navbar.module.scss'
import { AppLink, AppLinksTheme } from "shared/ui/AppLink/AppLink"
import { ThemeSwitcher } from "widgets/ThemeSwitcher"

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    return (
        <div className={classNames(style.navbar, {}, [className])}>
            <div>LOGO</div>

            <div className={style.links}>
                <AppLink 
                    theme={AppLinksTheme.SECONDARY} 
                    to={'/'}
                >
                    Main
                </AppLink>

                <AppLink 
                    theme={AppLinksTheme.SECONDARY} 
                    to={'/about'}
                >
                    About
                </AppLink>
            </div>
            

        </div>
    )
}