import DropDown from './AvatarDropdown';
import styles from './index.less';
import Avatar from '@/components/Avatar/DefaultAvatar';
import { Popover, Button, Space } from 'antd';
import { Link, useModel } from 'umi';
import { currentUserInfo } from '@/service/base';
import { useEffect, useState } from 'react';
import Oauth from '@/scripts/ouath';
export default () => {
  const { initialState } = useModel('@@initialState');
  const [useinfo, setUserinfo] = useState(initialState?.userinfo);
  useEffect(() => {
    console.log(useinfo);
  }, []);
  const content = (
    <Space direction="vertical">
      <Link to="/">个人主页</Link>
      <Link
        to="#"
        onClick={() => {
          Oauth.logout();
        }}
      >
        退出登陆
      </Link>
    </Space>
  );
  return (
    <>
      <div className={styles.avatar}>
        {useinfo ? (
          <Popover
            overlayStyle={{}}
            placement="bottom"
            title={<div>{useinfo.username}</div>}
            content={content}
            trigger="click"
          >
            <div>
              <Avatar ishowInfor={false} size="small" />
            </div>
          </Popover>
        ) : (
          <div>
            <Link to="/signin">登陆</Link>/<Link to="/signin#register">注册</Link>
          </div>
        )}
      </div>
      <div className={styles.avatarDropdown}></div>
      {/* <DropDown /> */}
    </>
  );
};
