import HomeHeader from './Home/Header/index'
import Ask from '@/pages/Article/Ask'
import { useLocation } from 'umi';
/**
 * 这个layout中间件用于处理，main区域外的特殊的layout布局,
 * 根据不同的路由 做不同的处理
 * 例如 二级导航栏，广告等。。
 */
export default ({children}:{children:React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>})=>{
    const a =useLocation();
    console.log(a);
    const switchElement=(params:string)=>{
        switch(params){
            case '/':
                return<HomeHeader />
            case '/post/123':
                return <Ask />
            default:
                null;
        }
    }
    return <>
        {switchElement(a.pathname)}
        {children}
    </>
}