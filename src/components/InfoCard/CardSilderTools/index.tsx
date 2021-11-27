import styles from './index.less'
import {transFormNumber} from '@/scripts/utils'
export default ()=>{


    return (
        <div className={styles.sliderTools}>
            <div className={styles.votes}>
                <span className={styles.number}>{transFormNumber(1234)}</span>
                <span>votes</span>
            </div>
            <div className={styles.answers}>
                <span className={styles.number}>{transFormNumber(2352232)}</span>
                <span>answers</span>
            </div>
        </div>
    )
}