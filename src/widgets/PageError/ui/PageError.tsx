import { classNames } from 'shared/lib/classNames/classNames'
import Button from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import style from './PageError.module.scss'

interface PageErrorProps {
    className?: string 
}

const PageError = ({ className }: PageErrorProps) => {
    const { t } = useTranslation()
    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload()
    }

    return ( 
        <div className={classNames(style.pageError, {}, [className])}>
            <h1>{t('произошла ошибка')}</h1>

            <Button onClick={reloadPage}>
                {t('Обновить страницу')}
            </Button>
        </div>
    )
}
 
export default PageError
