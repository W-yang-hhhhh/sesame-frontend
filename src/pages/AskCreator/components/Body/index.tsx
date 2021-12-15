import Input from './Input';
import Output from './Output';
import styles from './index.less';

export default () => {
  return (
    <div className={styles.textArea}>
      <Input></Input>
      <Output></Output>
    </div>
  );
};
