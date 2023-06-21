import './styles/index.scss'
import { Link } from 'react-router-dom'
import { useTheme } from 'app/providers/ThemeProvider'
import { classNames } from 'shared/lib/classNames/classNames'
import { AppRouter } from './providers/router'

export const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>

            <h1>TITLE</h1>
            <h2>SUBTITLE</h2>

            <button onClick={toggleTheme}>theme change</button>
            <Link to={'/'}>Main</Link>
            <Link to={'/about'}>About</Link>

            <AppRouter />


        </div>
    )
}                              