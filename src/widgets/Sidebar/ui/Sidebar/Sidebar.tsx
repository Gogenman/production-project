import { classNames } from 'shared/lib/classNames/classNames'
import { FC, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { Button } from 'shared/ui/Button/Button'
import style from './Sidebar.module.scss'

interface SidebarProps {
    className?: string
}

export const Sidebar: FC<SidebarProps> = (props) => {
    const { className } = props

    const [collapse, setCollapse] = useState(false)

    const onToggleHandler = () => {
        setCollapse((prev) => !prev)
    }

    return (
        <div data-testid="sidebar" className={classNames(style.Sidebar, { [style.collapse]: collapse }, [className])}>
            <Button 
                data-testid="sidebar-toggle"
                type="button" 
                onClick={onToggleHandler}
            >
                =
            </Button>

            <div className={style.switchers}>
                <ThemeSwitcher />
                <LangSwitcher />
            </div>
        </div>
    )
}
