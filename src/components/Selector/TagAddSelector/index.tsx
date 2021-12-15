//添加tag
import { useState } from 'react';
import TagSelector from '../TagSelector';
import styles from './index.less';
import CloseBtn from '@/components/Btn/CloseBtn';
import { CheckOutlined } from '@ant-design/icons';
export default () => {
  const [tags, setTags]: any = useState([]);
  const [val, setvl] = useState('');
  const [SearchTagName, setSearchTagName]: any = useState([
    {
      label: '#几万复发',
      isSelscted: true,
    },
    {
      label: '#地方i奥风景',
      isSelscted: true,
    },
    {
      label: '#几万复发',
      isSelscted: false,
    },
    {
      label: '#地方i奥风景',
      isSelscted: true,
    },
    {
      label: '#几万复发',
      isSelscted: false,
    },
    {
      label: '#地方i奥风景',
      isSelscted: true,
    },
    {
      label: '#地方i奥风景',
      isSelscted: false,
    },
    {
      label: '#几万复发',
      isSelscted: true,
    },
    {
      label: '#地方i奥风景',
      isSelscted: false,
    },
    {
      label: '#几万复发',
      isSelscted: true,
    },
  ]);
  const [showTag, setShowTag] = useState(false);
  const handlerInt = (e: any) => {
    const val = e.target.value;
    setvl(val);
    setShowTag(true);
  };
  const handlerEnter = (e: any) => {
    if (e.code === 'Enter') {
      const tag = e.target.value;
      setTags([...tags, { topic: tag, dataIndex: 1 }]);
      setvl('');
    }
  };
  return (
    <div className={styles.addtag}>
      <TagSelector column={tags} isEdit />
      <div className={styles.tagSearchContainer}>
        <input
          className={styles.tagSearch}
          type="text"
          value={val}
          onChange={handlerInt}
          onKeyDownCapture={handlerEnter}
          onBlur={() => {
            setShowTag(false);
          }}
        />
        {showTag && (
          <div className={styles.searchSelector}>
            {SearchTagName.map((item: any) => (
              <span className={item.isSelscted ? styles.isSelscted : ''}>
                {item.label}
                {item.isSelscted && <CheckOutlined style={{ color: '#06f' }} />}
              </span>
            ))}
          </div>
        )}
      </div>
      <CloseBtn />
      <span className={styles.warnTopic}>至少添加一个话题</span>
    </div>
  );
};
