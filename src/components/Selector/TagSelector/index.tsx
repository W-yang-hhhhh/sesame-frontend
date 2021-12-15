import styles from './index.less';
import CloseBtn from '@/components/Btn/CloseBtn';

interface Data {
  topic: string;
  dataIndex: number;
}
interface Props {
  style?: React.CSSProperties | undefined;
  column?: Data[];
  isEdit?: boolean;
}
const columns = [
  {
    topic: '#今天吃什么',
    dataIndex: 10294,
  },
  {
    topic: '#大学排名',
    dataIndex: 10294,
  },
  {
    topic: '#大学那个计算机专业更好',
    dataIndex: 10294,
  },
  {
    topic: '#前端',
    dataIndex: 10294,
  },
  {
    topic: '#后端',
    dataIndex: 10294,
  },
];
export default ({ style, column = columns, isEdit = false }: Props) => {
  return (
    <div className={styles.topicContainer} style={style}>
      {column.map((item) => (
        <div className={styles.topicItem}>
          <span className={styles.topicText}> {item.topic}</span>
          {isEdit && <CloseBtn />}
        </div>
      ))}
    </div>
  );
};
