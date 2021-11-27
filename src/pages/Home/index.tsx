import DefaultCard from "@/components/InfoCard/DefaultCard"
import CreatorEntrance  from "./CreatorEntrance"
import styles from './index.less'
import AuthorRanking from "./AuthorRanking"
export default ()=>{
    return <div className={styles.main}>
        <div className={styles.textMain}>
            <DefaultCard />
            <DefaultCard />
            <DefaultCard />
            <DefaultCard />
            <DefaultCard />
        </div>
        <div className={styles.siderMain}>
        <CreatorEntrance />
        <AuthorRanking />
        </div>
        
    </div>
}