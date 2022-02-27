import HomeHeader from './Home/Header/index';
import Ask from '@/pages/Article/Ask';
import { useLocation } from 'umi';
/**
 * 这个layout中间件用于处理，main区域外的特殊的layout布局,
 * 根据不同的路由 做不同的处理
 * 例如 二级导航栏，广告等。。
 */
export default ({
  children,
}: {
  children: React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
}) => {
  const a = useLocation();
  const switchElement = (params: string) => {
    console.log(params);
    switch (params) {
      case '/home':
        return <HomeHeader />;
      case '/home/frontend':
        return <HomeHeader />;
      case '/home/backend':
        return <HomeHeader />;
      case '/post/123':
        return <Ask />;
      default:
        return null;
    }
  };
  return (
    <>
      {switchElement(a.pathname)}
      {children}
    </>
  );
};
