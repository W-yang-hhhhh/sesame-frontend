import styles from './index.less';
import { NavLink } from 'umi';
export default () => {
  const navList = [
    {
      title: '推荐',
      path: '/home',
    },
    {
      title: '前端',
      path: '/home/frontend',
    },
    {
      title: '后端',
      path: '/home/backend',
    },
  ];

  return (
    <>
      <div className={styles.navList}>
        <div className={styles.navContainer}>
          {navList.map((item) => (
            <NavLink
              activeClassName={styles.active}
              exact
              className={styles.navItem}
              to={item.path}
            >
              {item.title}
            </NavLink>
          ))}
        </div>
      </div>
    </>
  );
};
