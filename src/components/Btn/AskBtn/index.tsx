
import { PlusOutlined, EditOutlined } from '@ant-design/icons'
import styles from './index.less'
export default () => {
    return (
        <div className={styles.btnContainer}>
            <button className={styles.follow}>
            <PlusOutlined />
                &nbsp;关注问题
            </button>
            <button className={styles.replay}>
            <EditOutlined />
                &nbsp;写回答
            </button>
        </div>
    )
}