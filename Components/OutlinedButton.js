import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import React from 'react';

const OutlinedButton = props => {
  return (
    <TouchableOpacity {...props}>
      <Text style={[styles.outlined, props.style]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default OutlinedButton;

const styles = StyleSheet.create({
  outlined: {
    // margin: 10,
    fontSize: 19,
    lineHeight: 23,
    color: '#231224',
    borderBottomWidth: 2,
  },
});
