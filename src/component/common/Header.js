// Import library
import React from 'react';
import {Text, View} from 'react-native';

// Make a component
const Header = (props) => {
    const {textStyle, viewStyle} = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor: '#f4cb42',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#fcc200',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

// Make the component available to the other parts of app
export { Header };