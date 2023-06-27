import style from './Loader.module.scss'

const Loader = () => {
    return ( 
        <div className={style.loader}> 
            <div className={style.spinner}></div>
        </div>
    );
}
 
export default Loader;