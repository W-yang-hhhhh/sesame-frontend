import styles from './index.less';
import { useModel } from 'umi';

export default () => {
  const { text, edit } = useModel('useEditor', (model) => ({ text: model.text, edit: model.edit }));
  return (
    <pre className={styles.outputContainer}>
      <div className={styles.protectArea} dangerouslySetInnerHTML={{ __html: text }}></div>
    </pre>
  );
};
