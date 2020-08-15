import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import HeaderContainer from 'carbon-components-react/lib/components/UIShell/HeaderContainer'
import {
  Content,
  Header,
  HeaderMenuButton,
  HeaderName,
  SkipToContent,
  SideNav,
  SideNavItems
} from 'carbon-components-react/lib/components/UIShell'
import { View32 } from '@carbon/icons-react'

import NavLink from './components/NavLink.jsx'
import NavGroup from './components/NavGroup.jsx'

import Status from './Status/Status.jsx'

const Index = () => (
  <div className="container bx--theme--g100">
    <Router>
      <HeaderContainer
        render={({ isSideNavExpanded, onClickSideNavExpand }) => (
          <>
            <Header aria-label="Skeleton">
              <SkipToContent />
              <HeaderMenuButton
                aria-label="Open menu"
                onClick={onClickSideNavExpand}
                isActive={isSideNavExpanded}
              />
              <HeaderName href="/" prefix=''>
                Skeleton
              </HeaderName>
              <SideNav aria-label="Side navigation" expanded={isSideNavExpanded}>
                <SideNavItems>
                  <NavGroup icon={View32} label="Monitor" grouppath="/monitor">
                    <NavLink to="/monitor/status" label="Status"/>
                  </NavGroup>
                </SideNavItems>
              </SideNav>
            </Header>
            <Switch>
              <Content id="main-content">
                <div className="bx--grid">
                  <div className="bx--row">
                    <section className="bx--offset-lg-2 bx--col-lg-10">
                      {/* MONITOR */}
                      <Route exact path="/monitor">
                        <Redirect to="/monitor/status" />
                      </Route>
                      <Route path="/monitor/status">
                        <Status />
                      </Route>
                      {/* ROOT */}
                      <Route exact path="/">
                        <Redirect to="/monitor/status" />
                      </Route>
                    </section>
                  </div>
                </div>
              </Content>
            </Switch>
          </>
        )}
      />
    </Router>
  </div>
)

export default Index
