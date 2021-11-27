import {header as Header} from './Header';
import {IRouteComponentProps} from 'umi';
import Middleware from './Middleware';
import styles from './index.less'
export default ({children}:IRouteComponentProps)=>{
    return <>
    <Header />

    <Middleware>
        <main className={styles.homeBody}>
        {children}
        </main>
    </Middleware>
   
    </>
}