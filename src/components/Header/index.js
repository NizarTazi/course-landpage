


import { Menu, Button, Layout, Typography } from 'antd';
import { HomeOutlined, AppstoreAddOutlined, PhoneOutlined } from '@ant-design/icons';
const { Header } = Layout;

const { Title } = Typography;



    function AppHeader(){
        return (
        <Header style={{ background: '#001529', padding: 0 }}>
        
        <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            style={{ lineHeight: '64px', float: 'right' }}
        >
            <Menu.Item key="1" icon={<HomeOutlined />}>
            Home
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreAddOutlined />}>
            Features
            </Menu.Item>
            <Menu.Item key="3" icon={<PhoneOutlined />}>
            Contact
            </Menu.Item>
        </Menu>
        </Header>
        )
    }
    
export default AppHeader