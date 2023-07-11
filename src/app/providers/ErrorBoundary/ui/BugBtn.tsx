import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Button from 'shared/ui/Button/Button'

const BugBtn = () => {
    const { t } = useTranslation()
    const [error, setError] = useState(false)

    const onThrow = () => setError(true)

    useEffect(() => {
        if (error) {
            throw new Error()
        } 
    }, [error])

    return ( 
        <Button
            style={{ 
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                color: 'white',
                padding: '10px',
            }} 
            onClick={onThrow}
        > 
            {t('ошибка')}
        </Button>
    )
}
 
export default BugBtn
