import React from 'react'
import { Layout, LayoutPanel } from 'rc-easyui'

import WestTree from './components/WestTree'
import CenterPanel from './components/Panel'

class App extends React.Component {
  constructor() {
    super()
  }

  render() {
    const titleStyle = {
      textAlign: 'center',
      marginTop: '10px'
    }

    return (
      <div>
        <h1>#TITLE#</h1>
        <Layout style={{ width: '100%', height: '85vh' }}>
          <LayoutPanel region="north" style={{ height: 50 }}>
            <div style={titleStyle}>
              #CAPTION#
            </div>
          </LayoutPanel>

          <LayoutPanel region="south" style={{ height: 50 }}>
            <div style={titleStyle}>
              #FOOTER#
            </div>
          </LayoutPanel>

          <LayoutPanel region="west" style={{ width: 200 }}>
            {/* <div style={titleStyle}> */}
              {/* West Region */}
            {/* </div> */}
            <WestTree />
          </LayoutPanel>

          <LayoutPanel region="center" style={{ height: '100%' }}>
            <div style={titleStyle}>
              使用Panel(Header and Footer)填充
              <CenterPanel />
            </div>
          </LayoutPanel>
        </Layout>
      </div>
    )
  }
}

export default App