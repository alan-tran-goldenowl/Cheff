/* eslint-disable max-len */
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
} from 'react-native';

import ParsedText from 'react-native-parsed-text';

import { COLOR } from 'styles/theme';
import Header from 'components/Header';
import images from 'assets/images';
import contentData from './content';

export default function PrivacyPolicy({ navigation }) {
  const renderBoldText = React.useCallback(matchingString => matchingString.replace(/\[b\]/g, ''), []);
  const renderSpace = React.useCallback(matchingString => `    ${matchingString}`, []);
  const renderItalicText = React.useCallback(matchingString => matchingString?.replace(/\[i\]/g, ''), []);

  return (
    <View style={styles.container}>
      <Header
        iconLeft={images.icon_back}
        title="Chính sách và điều khoản"
        onPressLeft={() => navigation.goBack()}
      />
      <ScrollView contentContainerStyle={{ paddingBottom: 20 }} style={styles.scrollContainer}>
        {
          contentData.map((content, index) => (
            <>
              {index !== 0 ? (
                <Text style={{ marginVertical: 10, textAlign: 'center' }}>
                  --------------------------
                </Text>
              ) : null}
              <Text style={styles.titleText}>
                {content.title}
              </Text>
              <Text style={styles.headerText1}>
                {content.subTitle}

              </Text>

              {content.data.map(({ title, items, subTitle = '' }) => (
                <View style={styles.contentBlock}>
                  <Text style={styles.contentTitle}>
                    {title}
                  </Text>
                  {subTitle ? (
                    <Text style={styles.contentSubTitle}>
                      {subTitle}
                    </Text>
                  ) : null}
                  {items.map(item => (
                    <ParsedText
                      style={styles.contentText}
                      parse={
                  [
                    { pattern: /\[b\]([^\[b\]])*\[b\]/, style: styles.bold, renderText: renderBoldText },
                    // eslint-disable-next-line no-useless-escape
                    { pattern: /\[i\]([^\[i\]]).*\[i\]/, style: styles.italic, renderText: renderItalicText },
                    { pattern: /\([a-z]\)(.*?)[;|.]/, renderText: renderSpace },
                    { type: 'url', style: styles.url },
                  ]
                }
                    >
                      {item}
                    </ParsedText>
                  ))}
                </View>
              ))}
            </>
          ))
        }

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingBottom: hp('5%'),
    backgroundColor: COLOR.WHITE_COLOR,
  },
  scrollContainer: {
    flex: 1,
    paddingHorizontal: 10,
    // marginTop: 20,

  },
  titleText: {
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 18,
  },
  contentBlock: {
    marginBottom: 5,
    marginLeft: 5,
  },
  contentTitle: {
    fontWeight: 'bold',
    lineHeight: 20,
    fontSize: 17,
  },
  contentSubTitle: {
    fontStyle: 'italic',
    lineHeight: 20,
    marginBottom: 5,
    fontSize: 15,

  },
  contentText: {
    marginBottom: 5,
    marginLeft: 15,
    fontSize: 15,
  },
  contentListText: {
    lineHeight: 5,
  },
  contentListTextLast: {
    marginBottom: 5,
  },
  headerText1: {
    fontStyle: 'italic',
    fontWeight: 'normal',
    paddingVertical: 5,
    fontSize: 15,
  },
  headerText2: {
    paddingBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  url: {
  },
  italic: {
    fontStyle: 'italic',
  },
});
