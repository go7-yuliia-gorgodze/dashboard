import React from 'react'
import { Flex, Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons';
import s from './index.module.css'


const CustomersHeader = () => {

    return <Flex justify="space-between" align="center" wrap='wrap'>
    <div>
      <h2 className={s.title}>All Customers</h2>
      <span className={s.activeMembersTitle}>Active Members</span>
    </div>
    <div>
      <Input className={s.searchInput} addonBefore={<SearchOutlined />} placeholder="Search" />
    </div>    
  </Flex>
}

export default CustomersHeader