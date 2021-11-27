

import styles from './index.less'
type AvatarSize = 'smaller' | 'small' | 'smallplus' | 'middle' | 'large';
type AvaType = 'circular'|'square';
type Direction = 'column' | 'row' |'column-row';
interface Props {
    size: AvatarSize,
    ishowInfor: Boolean,
    ishowFixed?: Boolean
    direction?: Direction,
    type?:AvaType,
}

export default ({ size, ishowInfor, direction, ishowFixed = false, type='square'}: Props) => {
    return <>
        <div className={[styles.avatarBar, styles[direction || '']].join(' ')}>
            <div className={[styles.avatarImg, styles[size],styles[type]].join(' ')}>
                <img src="https://pic2.zhimg.com/v2-3e79bb47e06bb178d6cfbe36e4dbf61e_is.jpg" alt="" />
            </div>
            {ishowInfor ?
                <div className={[styles.useInfo, styles[size],styles[direction || '']].join(' ')}>
                    <span className={styles.userName}>汪洋</span>
                    <span className={styles.userTitle}>广东东软学院*软件工程</span>
                </div> : ''}
        </div>
    </>
}