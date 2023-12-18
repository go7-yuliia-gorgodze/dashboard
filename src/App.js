
import React from "react";
import { Layout } from 'antd';
import Header from "./header";
import LayoutPage from "./hoc";
import CustomersPage from "./customers";
import s from './hoc/index.module.css'
import "./index.css";

function App() {
  const { Content, Footer } = Layout;

  return (
    <LayoutPage>
        <Header/>
        <Content className={s.content}>
            <CustomersPage/>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
            background: '#FAFBFF'
          }}
        >
          Thank you for your time!!!
        </Footer>
    </LayoutPage>
  );
}

export default App;