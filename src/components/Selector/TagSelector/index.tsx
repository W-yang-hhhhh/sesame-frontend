import styles from './index.less'
interface Props{
    style?:React.CSSProperties | undefined
}

export default ({style}:Props)=>{
    const column=[
        {
            topic:'#今天吃什么',
            dataIndex:10294,
        },{
            topic:'#大学排名',
            dataIndex:10294,
        },{
            topic:'#大学那个计算机专业更好',
            dataIndex:10294,
        },{
            topic:'#前端',
            dataIndex:10294,
        },{
            topic:'#后端',
            dataIndex:10294,
        },
    ]
 
    return <div className={styles.topicContainer} style={style}>
        {column.map(item=>(
            <div className={styles.topicItem}>{item.topic}</div>
        ))}
    </div>
}