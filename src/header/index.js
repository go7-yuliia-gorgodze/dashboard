import { Layout } from 'antd';
import s from './index.module.css'

const { Header: HeaderAntd} = Layout;

const Header = () => {
    return <HeaderAntd className={s.header}>
        <h1 className={s.title}>Hello Evano 👋🏼,</h1>
    </HeaderAntd >
}

export default Header;