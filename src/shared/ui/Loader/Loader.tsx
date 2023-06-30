import style from './Loader.module.scss';

const Loader = () => (
    <div className={style.loader}>
        <div className={style.spinner} />
    </div>
);

export default Loader;
