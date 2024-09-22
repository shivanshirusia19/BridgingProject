import {requireNativeComponent} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const CustomTag = requireNativeComponent('CustomTag');

export default CustomTag;

// class CustomButton extends React.Component {
//   static propTypes = {
//     title: PropTypes.string,
//     onPress: PropTypes.func,
//   };

//   handlePress = event => {
//     if (this.props.onPress) {
//       this.props.onPress(event);
//     }
//   };

//   render() {
//     return <CustomTag {...this.props} onPress={this.handlePress} />;
//   }
// }

// export default CustomTag;
