import Tab from './Tab'
import Avatar from './Avatar'
import Search from './Search'
import style from './index.less'
import Logo from './Logo'
export const header = () => {
    return <header className={style.header}>
        <div className={style.inner}>
        <Logo />    
        <Tab />
        <Search />
        <Avatar />
        </div>
    </header>
}