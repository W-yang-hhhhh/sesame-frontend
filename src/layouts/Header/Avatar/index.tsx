import DropDown from './AvatarDropdown'
import styles from './index.less'
import Avatar from '@/components/Avatar/DefaultAvatar'
export default()=>{
    return <>
    <div
    className={styles.avatar}
    >
        <Avatar ishowInfor={false} size='small'/>
    </div>
    <div className={styles.avatarDropdown}>

    </div>
    {/* <DropDown /> */}
    </>
}