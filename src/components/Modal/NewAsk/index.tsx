import styles from './index.less';
import modelBg from '../index.less';
import Avatar from '@/components/Avatar/DefaultAvatar';
import { Button, Checkbox } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import TagAddSelector from '@/components/Selector/TagAddSelector';
import AskCreatorSelector from '@/components/Selector/AskCreatorSelector';
import { useModel } from 'umi';
import { useState } from 'react';
export default () => {
  const { show, modalaction } = useModel('useAsk', (model) => ({
    show: model.show,
    modalaction: model.modelaction,
  }));
  const [showTopic, setShowTopic] = useState(false);
  const [showTag, setShowTag] = useState(false);
  const HandlerClose = () => {
    console.log(1234);
    modalaction && modalaction(false);
  };
  const columns = [
    {
      label: '豆腐i啊话费？',
    },
    {
      label: '豆腐i啊话费？',
    },
    {
      label: '豆腐i啊话费？',
    },
    {
      label: '豆腐i啊话费？',
    },
    {
      label: '豆腐i啊话费？',
    },
    {
      label: '豆腐i啊话费？',
    },
    {
      label: '豆腐i啊话费？',
    },
    {
      label: '豆腐i啊话费？',
    },
    {
      label: '豆腐i啊话费？',
    },
    {
      label: '豆腐i啊话费？',
    },
    {
      label: '豆腐i啊话费？',
    },
    {
      label: '豆腐i啊话费？',
    },
    {
      label: '豆腐i啊话费？',
    },
    {
      label: '豆腐i啊话费？',
    },
    {
      label: '豆腐i啊话费？',
    },
    {
      label: '豆腐i啊话费？',
    },
  ];
  return (
    <div className={modelBg.modelBg}>
      <form className={styles.askModal}>
        <div className={styles.askModalHead}>
          <Avatar size="middle" ishowInfor={false} />
          <div className={styles.topic}>
            <div className={styles.selectorContainer}>
              <input className={styles.askInput} type="text" placeholder="请准确输入相关问题" />
              <AskCreatorSelector isShow={showTopic} columns={columns} />
            </div>
            <span className={styles.empty}>问题不能为空</span>
          </div>
        </div>

        <div className={styles.askModalBody}>
          <textarea
            name=""
            id={styles.askModalTextarea}
            placeholder="请详细描述你要解决的问题"
          ></textarea>
          <TagAddSelector />
        </div>

        <div className={styles.askModalFail}>
          <Checkbox>匿名提问</Checkbox>
          <Button type="primary">提问</Button>
        </div>

        <div className={styles.close} onClick={HandlerClose}>
          <CloseOutlined
            style={{
              color: '#fff',
              fontSize: '40px',
            }}
          />
        </div>
      </form>
    </div>
  );
};
