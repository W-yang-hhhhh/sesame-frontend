import styles from './index.less'
import Avatar from '@/components/Avatar/DefaultAvatar'
import CardBottomTools from '@/components/InfoCard/CardBottomTools'
import {DownOutlined,MenuUnfoldOutlined} from '@ant-design/icons';
export default () => {

    const columns =[
      { 
      },{ 
      },{ 
      },{ 
      },{ 
      },{ 
      },{ 
      }
    ]
  return <div className={styles.articleContainer}>
    <div className={styles.articleHeader}>
      <div className={styles.answers}>
        <strong style={{color:'#06f'}}>390</strong> 个回答
      </div>
      <div className={styles.orderBy}><MenuUnfoldOutlined /> 按照时间排序</div>
    </div>
    <div className={styles.articleAnswers}>
      {columns.map(()=><div className={styles.answersItem}>
        <div className={[styles.avatar,styles.item].join(' ')}>
          <Avatar size='smallplus' direction='column-row' ishowInfor />
        </div>

        <div className={[styles.voters,styles.item].join(' ')}>
          <i style={{ color: '#f40' }}>123 </i>
          个人认可了该回答
        </div>

        <div className={[styles.textArea,styles.item].join(' ')}>
          首先说明，苹果买的人很多没错，但销量并不是遥遥领先。
          根据信通院发布的数据显示，长期以来国产品牌的总体销量都要超过国外品牌的，哪怕是10月份依旧有68%的市场份额。
          好吧，不比总体销量比品牌销量好了。
          首先说明，苹果买的人很多没错，但销量并不是遥遥领先。
          根据信通院发布的数据显示，长期以来国产品牌的总体销量都要超过国外品牌的，哪怕是10月份依旧有68%的市场份额。
          好吧，不比总体销量比品牌销量好了。
          首先说明，苹果买的人很多没错，但销量并不是遥遥领先。
          根据信通院发布的数据显示，长期以来国产品牌的总体销量都要超过国外品牌的，哪怕是10月份依旧有68%的市场份额。
          好吧，不比总体销量比品牌销量好了。
          首先说明，苹果买的人很多没错，但销量并不是遥遥领先。
          根据信通院发布的数据显示，长期以来国产品牌的总体销量都要超过国外品牌的，哪怕是10月份依旧有68%的市场份额。
          好吧，不比总体销量比品牌销量好了。
          首先说明，苹果买的人很多没错，但销量并不是遥遥领先。
          根据信通院发布的数据显示，长期以来国产品牌的总体销量都要超过国外品牌的，哪怕是10月份依旧有68%的市场份额。
          好吧，不比总体销量比品牌销量好了。
          首先说明，苹果买的人很多没错，但销量并不是遥遥领先。
          根据信通院发布的数据显示，长期以来国产品牌的总体销量都要超过国外品牌的，哪怕是10月份依旧有68%的市场份额。
          好吧，不比总体销量比品牌销量好了。
          首先说明，苹果买的人很多没错，但销量并不是遥遥领先。
          根据信通院发布的数据显示，长期以来国产品牌的总体销量都要超过国外品牌的，哪怕是10月份依旧有68%的市场份额。
          好吧，不比总体销量比品牌销量好了。
          <div className={styles.moreArea}>
            <span>展开阅读全文 <DownOutlined /></span>
          </div>
        </div>
        <div className={[styles.bottomTools,styles.item].join(' ')}>
          <CardBottomTools />
        </div>
      </div>)}
      
    </div>

  </div>
}