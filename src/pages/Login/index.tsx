import { useState } from 'react';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';
import styles from './index.less';

export default () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
  };
  const [logins, setLogin] = useState(true);
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginTitle}>
        <div className={styles.loginTitleText}>SESAME -- Solve your problem</div>
      </div>
      <div className={styles.loginBody}>
        <div className={styles.loginIntroduction}>
          {/* 本网站由两位开发爱好者开发，初意为解决同学们在大学阶段所遇到的 种种问题....，例如，专业技术，大学生活，面试经历，交友学习。放假诶哦挖减肥哦哇就佛IE挖掘佛教额我啊就佛i叫我饿啊境外饿哦家踢我啊就哦饭加我爱哦家 */}
        </div>
        <div className={styles.loginForm}>
          <LoginForm isshow={logins} event={setLogin} />
          <RegisterForm isshow={!logins} event={setLogin} />
        </div>
      </div>
    </div>
  );
};
