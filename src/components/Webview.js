/* eslint-disable react-native/no-inline-styles */
// About.js

import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
class WebviewScreen extends Component {
  getFooFromWebview = () => {
    const run = `window.dispatchEvent(new Event('getFoo'), {"test": new Date()});`;
    this.webview.injectJavaScript(run);
  };
  render() {
    setTimeout(() => {
      this.webview.injectJavaScript(JSON.stringify({ test: 'test' }));
    }, 3000);
    return (
      <View style={styles.view}>
        {/* <TouchableOpacity onPress={this.getFooFromWebview.bind(this)}>
          <Text>click</Text>
        </TouchableOpacity> */}
        <WebView
          ref={(ref) => {
            this.webview = ref;
          }}
          // style={{ marginTop: 20 }}
          source={{ uri: 'http://10.0.75.1:3000/' }}
          originWhitelist={['*']}
          javaScriptEnabled={true}
          domStorageEnabled={true}
          sharedCookiesEnabled
          allowsInlineMediaPlayback
          mediaPlaybackRequiresUserAction={true}
          allowsFullscreenVideo={true}
          javaScriptEnabledAndroid={true}
          onNavigationStateChange={this.handleWebViewNavigationStateChange.bind(
            this,
          )}
          // injectedJavaScript={runFirst}
        />
      </View>
    );
  }
  handleWebViewNavigationStateChange = (newNavState) => {
    // newNavState looks something like this:
    // {
    //   url?: string;
    //   title?: string;
    //   loading?: boolean;
    //   canGoBack?: boolean;
    //   canGoForward?: boolean;
    // }
    const { url } = newNavState;
    if (!url) return;

    // handle certain doctypes
    if (url.includes('.pdf')) {
      this.webview.stopLoading();
      // open a modal with the PDF viewer
    }

    // one way to handle a successful form submit is via query strings
    if (url.includes('?message=success')) {
      this.webview.stopLoading();
      // maybe close this view?
    }

    // one way to handle errors is via query string
    if (url.includes('?errors=true')) {
      this.webview.stopLoading();
    }

    // redirect somewhere else
    // if (url.includes('google.com')) {
    // const newURL = 'http://10.0.75.1:3000/';
    // const redirectTo = 'window.location = "' + newNavState.url + '"';
    // alert(newNavState.url);
    // this.webview.postMessage(JSON.stringify({ action: 'test' }));
    // this.webview.injectJavaScript(JSON.stringify({ action: 'refresh' }));
    // }
  };
}

const styles = StyleSheet.create({
  view: {
    alignSelf: 'stretch',
    flex: 1,
  },
});

export default WebviewScreen;
