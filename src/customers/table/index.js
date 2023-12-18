import React from 'react';
import { Table } from 'antd';
import { columns, columnsMob, data, dataMob } from './constants';
import  s from './index.module.css'



const Customers = () => {
  return (
    <div>
      <Table
        columns={columns}
        className={s.table}
        pagination={{
           position: ['bottomRight'],
        }}
        dataSource={data}
      />
      <Table
        columns={columnsMob}
        className={s.tableMob}
        pagination={{
           position: ['bottomRight'],
        }}
        dataSource={dataMob}
      />
    </div>
  );
};
export default Customers;