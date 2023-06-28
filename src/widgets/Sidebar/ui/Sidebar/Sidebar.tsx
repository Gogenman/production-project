import { classNames } from 'shared/lib/classNames/classNames';
import style from './Sidebar.module.scss'
import { FC, useState } from 'react';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';

interface SidebarProps {
    className?: string
}

const Sidebar: FC<SidebarProps> = (props) => {
    const {className} = props

    const [collapse, setCollapse] = useState(false)

    const onToggleHandler = () => {
        setCollapse(prev => !prev)
    }


    return ( 
        <div className={classNames(style.Sidebar, {[style.collapse]: collapse}, [className])}>
            <button onClick={onToggleHandler}>
                toggle
            </button>

            <div className={style.switchers}>
                <ThemeSwitcher />
                {/* lang switch */}
            </div>
        </div>
    );
}
 
export default Sidebar;