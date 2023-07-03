/* eslint-disable i18next/no-literal-string */
import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinksTheme } from 'shared/ui/AppLink/AppLink'
import style from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(style.navbar, {}, [className])}>
        <div>LOGO</div>

        <div className={style.links}>
            <AppLink
                theme={AppLinksTheme.SECONDARY}
                to="/"
            >
                Main
            </AppLink>

            <AppLink
                theme={AppLinksTheme.SECONDARY}
                to="/about"
            >
                About
            </AppLink>
        </div>

    </div>
)
