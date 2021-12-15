import styles from './index.less';
import Avator from '@/components/Avatar/DefaultAvatar';
export default () => {
  return (
    <header className={styles.headerPage}>
      <div className={styles.headerContent}>
        <input type="text" className={styles.editTitle} placeholder="输入文章标题..." />
        <div className={styles.status}>保存成功</div>
        <div className={styles.rightBox}>
          <button className={styles.submit}>发布</button>
          <div className={styles.avatar}>
            <Avator size="smallplus" ishowInfor={false} type="circular" />
          </div>
        </div>
      </div>
    </header>
  );
};
