
import {CommentOutlined,StarOutlined,HeartOutlined,SelectOutlined} from '@ant-design/icons'
import AskBtn from "@/components/Btn/AskBtn"
import styles from './index.less'
/***
 * 暂时 停用 需要改版
 */
export  default ()=>{
    return <div className={styles.toolsContainer}>
        <AskBtn />
        {/* <button className={[styles.toolsBtn,styles.comment].join(' ')} ><CommentOutlined /> 关注问题</button>
        <button className={[styles.toolsBtn,styles.comment].join(' ')} ><SelectOutlined /> 写回答</button>
        <button className={[styles.toolsBtn,styles.collection].join(' ')} ><StarOutlined /> 收藏</button>
        <button className={[styles.toolsBtn,styles.like].join(' ')} ><HeartOutlined /> 喜欢</button>
        <div className={styles.Popover}>
            <button className={[styles.toolsBtn].join(' ')}>...</button>
        </div> */}
    </div>
}