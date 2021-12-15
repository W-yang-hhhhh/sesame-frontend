import { CloseOutlined } from '@ant-design/icons';
import { CSSProperties } from '@umijs/renderer-react/node_modules/@types/react';
import styles from './index.less';

interface Props {
  style?: CSSProperties;
}
export default ({ style = {} }: Props) => {
  return (
    <div className={styles.Container}>
      <div className={styles.closeContainer}>
        <CloseOutlined style={style} />
      </div>
    </div>
  );
};
