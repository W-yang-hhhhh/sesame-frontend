
import { CaretUpOutlined, CaretDownOutlined } from '@ant-design/icons'
import styles from './index.less'
export default () => {
    return (
        <div className={styles.btnContainer}>
            <button className={styles.up}>
            <CaretUpOutlined />
                &nbsp;赞同
                <span className={styles.number}>&nbsp;123</span>
            </button>
            <button className={styles.down}>
            <CaretDownOutlined />
                &nbsp;踩
            </button>
        </div>
    )
}