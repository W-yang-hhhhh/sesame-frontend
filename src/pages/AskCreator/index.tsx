import styles from './index.less';
import Header from './components/Header';
import Tools from './components/Tools';
import Body from './components/Body';
export default () => {
  return (
    <div className={styles.editorPage}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.main}>
        <Tools />
        <Body />
      </div>
    </div>
  );
};
