import { classNames } from 'shared/lib/classNames/classNames'
import Loader from 'shared/ui/Loader/Loader'
import style from './PageLoader.module.scss'

interface PageLoaderProps {
    className?: string
}

const PageLoader = ({ className }: PageLoaderProps) => {
    return ( 
        <div className={classNames(style.loader, {}, [className])}>
            <Loader />
        </div>
    )
}
 
export default PageLoader
