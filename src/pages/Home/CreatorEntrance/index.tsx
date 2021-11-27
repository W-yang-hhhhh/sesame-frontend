
import styles from './index.less'
import {PlusOutlined,EditFilled} from '@ant-design/icons'
export default ()=>{
    return <div className={styles.creatorEnterance}>
        <div className={styles.creatorHeader}>
            <div className={styles.title}><EditFilled /> 创作中心</div>
            <div className={styles.draft}>草稿箱<span>(0)</span></div>
        </div>
        <div className={styles.creatorCreationSelection}>
            <div className={styles.CreationItem}>
                <i></i>
                <span>问问题</span>
            </div>
            <div className={styles.CreationItem}>回答问题</div>
            <div className={styles.CreationItem}>写想法</div>
            <div className={styles.CreationItem}>发视频</div>
        </div>
        <div className={styles.creatorStartCreate}>
            <button><PlusOutlined />开启创作</button>
        </div>
        
    </div>
}