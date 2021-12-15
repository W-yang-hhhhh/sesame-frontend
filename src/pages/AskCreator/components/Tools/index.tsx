import styles from './index.less';
import { columns } from './setting';
export default () => {
  return (
    <div className={styles.toolsContainer}>
      <div className={styles.applyArea}>
        {columns().map((item) => {
          return (
            <div className={styles.applyItem}>
              <i className={['iconfont', item.iconfont, styles.icon].join(' ')}></i>
            </div>
          );
        })}
      </div>
    </div>
  );
};
