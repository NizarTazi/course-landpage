import logo from './logo.svg';
import './App.css';
import { Menu, Button, Layout, Typography } from 'antd';
import { HomeOutlined, AppstoreAddOutlined, PhoneOutlined } from '@ant-design/icons';

import AppFooter from "./components/Footer";
import AppHeader from "./components/Header";
import PageContent from "./components/PageContent";

const { Header, Content, Footer } = Layout;


function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>

      <AppHeader />
      <PageContent />     
      <AppFooter />

    </Layout>
  );
}

export default App;
