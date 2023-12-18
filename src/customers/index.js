import React from 'react'
import { Flex } from 'antd'
import CustomersHeader from './customersHeader'
import Customers from './table'


const CustomersPage = () => {
    return <Flex vertical gap={40}>
        <CustomersHeader />
        <Customers />
    </Flex>
}


export default CustomersPage