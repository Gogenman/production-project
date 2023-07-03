/* eslint-disable i18next/no-literal-string */
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import LightIcon from 'shared/assets/icons/light.svg'
import DarkIcon from 'shared/assets/icons/dark.svg'
import Button, { ThemeButton } from 'shared/ui/Button/Button'
import style from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
    className?: string
}

const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
    const { theme, toggleTheme } = useTheme()

    return (
        <Button
            theme={ThemeButton.CLEAR}
            className={classNames(style.ThemeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DARK
                ? <LightIcon fill="#000" width="30px" height="30px" />
                : <DarkIcon fill="#fff" width="30px" height="30px" />}
        </Button>
    )
}

export default ThemeSwitcher
