import React from 'react'
import { ReactComponent as LogoIcon } from "./logo.svg";
import { Flex } from 'antd'

import s from './index.module.css'

const Logo = () => {
    return <Flex className={s.logoContainer} gap={8} align="center" justify="flex-start">
        <LogoIcon/>
        <div className={s.logoTitle}>
          <span className={s.logo}>Dashboard</span>
          <span className={s.logoSubText}>v.01</span>
        </div>
    </Flex>
}

export default Logo