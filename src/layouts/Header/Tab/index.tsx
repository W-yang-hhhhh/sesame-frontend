import { NavLink } from 'umi';
import styles from './index.less';
export default () => {
  return (
    <ul className={styles.tabList}>
      <li className={styles.tabItem}>
        <NavLink to="/home" exact activeClassName={styles.active}>
          首页
        </NavLink>
      </li>
      <li className={styles.tabItem}>
        <NavLink to="/home/explore" activeClassName={styles.active}>
          发现
        </NavLink>
      </li>
      <li className={styles.tabItem}>
        <NavLink to="/home/question" activeClassName={styles.active}>
          等你来答
        </NavLink>
      </li>
    </ul>
  );
};
