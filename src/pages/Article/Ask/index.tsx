import styles from './index.less'
import TopicTag from '@/components/Selector/TagSelector'
import CardBottomToolsV2 from '@/components/InfoCard/CardBottomToolsAsk'
export default () => {
    return <div className={styles.askContainer}>
        <div className={styles.mainContainer}>
            <div className={styles.firstCon}>
                <div className={styles.topicTag}>
                    <TopicTag />
                </div>
                <div className={styles.title}>
                    国产手机性能已经不弱，为什么还有那么多人买苹果?
                </div>
                <div className={styles.askContent}>
                    早几年国产手机确实拉跨，这个要提前说好，避免扯皮。最近俩年，国产手机不谈所谓千元机，2000到4000价位那么多高性能，高性价比手机。为什么还是有那么…
                    <div>展开问题</div>
                </div>
                <div className={styles.bottomTools}>
                <CardBottomToolsV2 />
                </div>
            </div>
            <div className={styles.secondCon}>
                <div className={styles.effect}>

                <div className={styles.follow}>
                    <span className={styles.title}>关注者</span>
                    <span className={styles.number}>1234</span>
                </div>
                <div className={styles.browse}>
                    <span className={styles.title}>浏览量</span>
                    <span className={styles.number}>23.4w</span>
                </div>
                </div>

            </div>
        </div>
    </div>
}