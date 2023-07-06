import style from './Loader.module.scss'

const Loader = () => (
    <div className={style.lds_ellipsis}>
        <div />
        <div />
        <div />
        <div />
    </div>
)

export default Loader
