import { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import style from './AppLink.module.scss';

export enum AppLinksTheme { // перечисление ьем цветов
    PRIMARY = 'primary',
    SECONDARY = 'secondary'
}
// интерфейс для AppLink наследуем от LinkProps для взятия children
interface AppLinkProps extends LinkProps {
    className?: string
    theme: AppLinksTheme
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {
        children, to, className, theme, ...otherProps
    } = props;
    return (

        <Link
            to={to}
            className={classNames(style.AppLink, {}, [className, style[theme]])}
            {...otherProps}
        >
            {children}
        </Link>

    );
};
