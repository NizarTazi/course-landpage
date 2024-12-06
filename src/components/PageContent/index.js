import { Layout, Typography } from 'antd';
const { Content } = Layout;
const { Title } = Typography;

function PageContent(){
    return(
        <Content style={{ padding: '50px' }}>
      <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
        <Title level={2}>Welcome to Ant Design</Title>
        <p>Paragraph</p>
      </div>
    </Content>

    )
}
export default PageContent