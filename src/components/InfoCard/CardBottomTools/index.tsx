
import {CommentOutlined,StarOutlined,HeartOutlined,SelectOutlined} from '@ant-design/icons'
import PraiseBtn from "@/components/Btn/PraiseBtn"
import styles from './index.less'
/***
 * 暂时 停用 需要改版
 */
export  default ()=>{
    return <div className={styles.toolsContainer}>
        <PraiseBtn />
        <button className={[styles.toolsBtn,styles.comment].join(' ')} ><CommentOutlined /> 109条评论</button>
        <button className={[styles.toolsBtn,styles.share].join(' ')} ><SelectOutlined /> 分享</button>
        <button className={[styles.toolsBtn,styles.collection].join(' ')} ><StarOutlined /> 收藏</button>
        <button className={[styles.toolsBtn,styles.like].join(' ')} ><HeartOutlined /> 喜欢</button>
        <div className={styles.Popover}>
            <button className={[styles.toolsBtn].join(' ')}>...</button>
        </div>
    </div>
}