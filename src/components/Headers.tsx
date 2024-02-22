import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HeadersProps {
    title: string
}

// const Headers = (props: HeadersProps) => {
//   return (
//     <View style={styles.container}>
//          <Text style={styles.textstyle}>{props.title}</Text>
//     </View>
//   );
// };

const Headers : FC<HeadersProps> = (props) => {
    return (
        <View style={styles.container}>
             <Text style={styles.textstyle}>{props.title}</Text>
        </View>
      );
};

export default Headers;

const styles = StyleSheet.create({
  container: {},
  textstyle: {
    textAlign: 'center',
    fontSize: 18,
  },
});
