import React, { Component } from 'react'
import {
  Actions,
  Router,
  Overlay,
  Stack,
  Tabs,
  Scene,
} from 'react-native-router-flux'
import { Text } from 'react-native'

import Home from './home'
import Login from './login'

export default class AppRouter extends Component {
  onBackPress = () => {
    // if (disableBackScreens.indexOf(Actions.currentScene) < 0) {
    //   Actions.pop()
    // }
    return true
  }

  render () {
    return (
      <Router
        backAndroidHandler={this.onBackPress}>
        <Overlay key="overlay">
          <Stack key="root">
            <Scene key="Login" component={Login} title="Login" />
            <Tabs
              key='tab'
              swipeEnabled={false}
              tabBarPosition='bottom'
              lazy
              hideNavBar>
              <Stack
                key='HomeStack'
                icon={() => (<Text>Home</Text>)}>
                <Scene
                  key='Home'
                  initial
                  title='Home'
                  component={Home}
                />
              </Stack>
              <Stack
                key='FavoriteStack'
                icon={() => (<Text>Favorite</Text>)}>
                <Scene
                  key='Favorite'
                  initial
                  title='Favorite'
                  component={Home}
                />
              </Stack>
              <Stack
                key='SearchStack'
                icon={() => (<Text>Search</Text>)}>
                <Scene
                  key='Search'
                  initial
                  title='Search'
                  component={Home}
                />
              </Stack>
              <Stack
                key='MessageStack'
                icon={() => (<Text>Message</Text>)}>
                <Scene
                  key='Message'
                  initial
                  title='Message'
                  component={Home}
                />
              </Stack>
              <Stack
                key='ProfileStack'
                icon={() => (<Text>Profile</Text>)}>
                <Scene
                  key='Profile'
                  initial
                  title='Home'
                  component={Home}
                />
              </Stack>
            </Tabs>
            <Scene key="Detail" component={Login} title="Detail" back/>
          </Stack>
        </Overlay>
      </Router>
    )
  }
}
