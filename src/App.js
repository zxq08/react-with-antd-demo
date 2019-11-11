import React, { Component } from 'react';
import { Layout, Button } from 'antd';
import './App.css';


const { Header, Footer, Sider, Content } = Layout;

class App extends Component {
  render () {
    return (
      <Layout>
        <Sider class="left-side t-cen">Sider</Sider>
        <Layout>
          <Header class="header t-cen">Header</Header>
          <Content class="t-cen">Content</Content>
          <Footer>
            <div className="App">
              <Button type="primary">Button</Button>
            </div>
          </Footer>
        </Layout>
      </Layout>
    )
  }
}

export default App;
