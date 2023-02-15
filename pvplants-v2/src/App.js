import React from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import AlertListView from './components/AlertListView';
import OAndMListView from './components/OAndMListView';
import PlantListView from './components/PlantListView';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    // <div className="App"> </div>
    <Router>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1"><Link to="/">Dashboard</Link></Menu.Item>
            <Menu.Item key="2"><Link to="/alert">Alerts</Link></Menu.Item>
            <Menu.Item key="3"><Link to="/oandm">O&M</Link></Menu.Item>
            <Menu.Item key="4"><Link to="/plant">Plants</Link></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-content">
            <Routes>
              <Route exact path="/" component={Dashboard} />
              <Route path="/alert" component={AlertListView} />
              <Route path="/oandm" component={OAndMListView} />
              <Route path="/plant" component={PlantListView} />
            </Routes>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>PV Plants ©2023 Created by Your Company</Footer>
      </Layout>
    </Router>
  );
}

export default App;
