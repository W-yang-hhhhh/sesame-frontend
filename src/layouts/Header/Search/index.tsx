import styles from './index.less'
import { SearchOutlined } from '@ant-design/icons';
export default () => {
    return <div className={styles.searchBar}>
        <form className={styles.searchBarTool}>
            <label className={styles.searchBarWrapper}>

                <input type="text" placeholder="输入想要搜索的内容"/>
                <button className={styles.searchBarToolSearchBtn} aria-label='搜索框按钮图标' type='button'>
                    <SearchOutlined />
                </button>
            </label>
        </form>
        <button className={styles.searchBarAskbtn}>提问</button>
    </div>
}