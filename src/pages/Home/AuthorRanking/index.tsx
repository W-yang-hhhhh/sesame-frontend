import styles from './index.less'
import Auatar from '@/components/Avatar/DefaultAvatar'
import { TrophyTwoTone } from '@ant-design/icons'
import {Link} from 'umi'
export default () => {

    return <div className={styles.authoRankContainer}>
        <div className={styles.title}>
            <TrophyTwoTone />
            <span className={styles.titleName}>作者榜</span>
        </div>
        <div className={styles.body}>
            <div className={styles.authorInfo}>
                <span className={styles.serialNumber}>1</span>
                <Auatar ishowInfor size='smallplus' type='circular' direction='column-row' />
            </div>
            <div className={styles.authorInfo}>
                <span className={styles.serialNumber}>2</span>
                <Auatar ishowInfor size='smallplus' type='circular' direction='column-row' />
            </div>
            <div className={styles.authorInfo}>
                <span className={styles.serialNumber}>3</span>
                <Auatar ishowInfor size='smallplus' type='circular' direction='column-row' />
            </div>

        </div>
        <div className={styles.footer}>
            <Link className={styles.link} to="#">查看更多</Link>
        </div>
    </div>
}