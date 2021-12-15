import styles from './index.less';
//问题类型的搜索下拉框

interface Item {
  label: string;
}
interface Props {
  isShow: boolean;
  columns: Item[];
  height?: string;
}

export default ({ isShow, columns, height = '400px' }: Props) => {
  return (
    <>
      {isShow && (
        <div style={{ maxHeight: height }} className={styles.selectorContainer}>
          <div className={styles.selectorHeader}>
            <span>相关问题</span>
            <span className={styles.close}>关闭</span>
          </div>
          <div className={styles.selectorBody}>
            {columns
              ? columns.map((item) => {
                  return (
                    <div className={styles.selectorItem}>
                      <span> {item.label}</span>
                      <span className={styles.extra}>9个回答</span>
                    </div>
                  );
                })
              : ''}
          </div>
        </div>
      )}
    </>
  );
};
