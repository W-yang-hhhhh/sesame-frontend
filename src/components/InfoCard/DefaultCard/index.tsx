
import Avatar from "@/components/Avatar/DefaultAvatar"
import styles from './index.less'
import BottomTools from '@/components/InfoCard/CardBottomTools'
import SilderTools from '@/components/InfoCard/CardSilderTools'
import Topic from '@/components/Selector/TagSelector'
import { Link } from 'umi'
import {Button} from 'antd'
export default () => {
    return <>


        <div className={styles.cardContainer}>
            <div className={styles.cardTools}>
            <SilderTools />
            </div>
            <div className={styles.cardExhibition}>
                <div className={styles.extraDesc}>
                    <div>
                        <span className={styles.userName}>w-yang-hhhh&nbsp;</span>
                        <span className={styles.descType}>认可了该问题&nbsp;</span>
                        ·
                        <span className={styles.currentTime}>&nbsp;17小时前</span>
                    </div>
                </div>
                <div className={styles.useInfo}>
                    <Avatar size='smaller' ishowInfor={true} direction='row' />
                </div>
                <div className={styles.articlMainBody}>
                    <div className={styles.articleTitle}>
                        <Link className='MainTitle' to='/post/123'>
                            国足出线概率仅为0.01%你怎么看？
                        </Link>
                    </div>
                    <div className={styles.articleContent}>
                        {/* v1版本暂时不需要<div className={styles.articleImg}>
                    <img className={styles.showImg} src="https://pic2.zhimg.com/v2-5611c9e66132e53e7fde52ede246ee8c_400x224.jpg?source=3af55fa1" alt="" />
                </div> */}
                        <div className={styles.richContent}>
                            <span className={styles.richText}>
                                由世界公众科学素质组织（筹）秘书处主办、中国科普研究所指导、知乎承办的「公众科学素质促进」科普视频创作国际大赛征集到来自全球多个国家的作品。大赛组委会邀请国内外专家从作品内容立意、科学性、制作水平…
                            </span>
                            <button className={styles.moreBtn}>查看完整问题⬇</button>
                        </div>
                    </div>
                </div>
                <div className={styles.toolsContainer}>
                    {/* <BottomTools /> */}
                    <Topic />
                </div>
            </div>
        </div>
    </>
}