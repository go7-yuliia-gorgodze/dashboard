import { Tag } from "antd";

export const data = [
    {
      key: '1',
      name: 'Jane Cooper',
      company: 'Microsoft',
      number: '(225) 555-0118',
      email: 'jane@microsoft.com',
      tag: 'green',
    },
    {
      key: '2',
      name: 'Jane Cooper',
      company: 'Microsoft',
      number: '(225) 555-0118',
      email: 'jane@microsoft.com',
      tag: 'red',
    },
    {
      key: '3',
      name: 'Jane Cooper',
      company: 'Microsoft',
      number: '(225) 555-0118',
      email: 'jane@microsoft.com',
      tag: "red",
      },
    {
      key: '4',
      name: 'Jane Cooper',
      company: 'Microsoft',
      number: '(225) 555-0118',
      email: 'jane@microsoft.com',
      tag: 'green',
        },  {
      key: '5',
      name: 'Jane Cooper',
      company: 'Microsoft',
      number: '(225) 555-0118',
      email: 'jane@microsoft.com',
      tag: 'green',
      }, {
      key: '6',
      name: 'Jane Cooper',
      company: 'Microsoft',
      number: '(225) 555-0118',
      email: 'jane@microsoft.com',
      tag: 'green',
      },
      {
      key: '7',
      name: 'Jane Cooper',
      company: 'Microsoft',
      number: '(225) 555-0118',
      email: 'jane@microsoft.com',
      tag: 'green',
      },
      {
      key: '8',
      name: 'Jane Cooper',
      company: 'Microsoft',
      number: '(225) 555-0118',
      email: 'jane@microsoft.com',
      tag: "red",
      },
  ];
  export const dataMob = [
    {
      key: '1',
      name: 'Jane Cooper',
      tag: 'green',
    },
    {
      key: '2',
      name: 'Jane Cooper',
      tag: 'red',
    },
    {
      key: '3',
      name: 'Jane Cooper',
      tag: "red",
      },
    {
      key: '4',
      name: 'Jane Cooper',
      tag: 'green',
        },  {
      key: '5',
      name: 'Jane Cooper',
      tag: 'green',
      }, {
      key: '6',
      name: 'Jane Cooper',
      tag: 'green',
      },
      {
      key: '7',
      name: 'Jane Cooper',
      tag: 'green',
      },
      {
      key: '8',
      name: 'Jane Cooper',
      tag: "red",
      },
  ];

  export const columns = [
    {
      title: 'Customer Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Company',
      dataIndex: 'company',
      key: 'company',
    },
    {
      title: 'Phone Number',
      dataIndex: 'number',
      key: 'number',
      },
  
      {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
      },
      {
          title: 'Country',
          dataIndex: 'country',
          key: 'country',
      },
    {
      title: 'Status',
      key: 'tag',
      dataIndex: 'tag',
      render: (tag) => (
        <span>
              <Tag color={tag}>
               {tag === 'green' ? 'Active' : 'Inactive'}
              </Tag>
        </span>
      ),
    },
  ];
  export const columnsMob = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Status',
      key: 'tag',
      dataIndex: 'tag',
      render: (tag) => (
        <span>
              <Tag color={tag}>
               {tag === 'green' ? 'Active' : 'Inactive'}
              </Tag>
        </span>
      ),
    },
  ];