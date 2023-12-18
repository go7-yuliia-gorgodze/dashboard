import React from 'react';
import { Layout, Menu, Flex } from 'antd';
import { ReactComponent as UserIcon } from "../images/user.svg";
import Logo from '../logo';
import { items } from './constants';

import s from './index.module.css'

const { Sider } = Layout;


const LayoutPage = ({children}) => {
  return (
    <Layout>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        className={s.slider}
      >
        <Logo/>
        <Menu mode="inline" items={items} />
        <Flex gap={12} className={s.userContainer}>
          <UserIcon/>
          <div className={s.userTitle}>
            <span className={s.name}>Evano</span>
            <span className={s.job}>Project Manager</span>
         </div>
        </Flex>
      </Sider>
      <Layout>
         {children}
      </Layout>
    </Layout>
  );
};
export default LayoutPage;