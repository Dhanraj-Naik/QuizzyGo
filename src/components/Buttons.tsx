import React, { FC, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

interface ButtonsProps {
    onPress: () => void,
    answer: string,
    correct: boolean | undefined,
    disabled: boolean | undefined
}

const Buttons: FC<ButtonsProps> = (props) => {

    useEffect(() => { }, []);

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.wrapperStyle, { backgroundColor: !props.disabled ? '#F5F5DC' : '#F5DEB3', }]}
                onPress={() => {
                    props.onPress();
                }}>
                <Text
                    style={[
                        styles.textstyle,
                        { color: props.correct ? 'brown' : 'black' },
                    ]}>
                    {props.answer}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

export default Buttons;

const styles = StyleSheet.create({
    container: {},
    wrapperStyle: {
        width: '80%',
        elevation: 5,
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 27,
        height: 38,
        marginTop: 10,
    },
    textstyle: {
        textAlign: 'left',
        fontSize: 17,
        marginLeft: 8,
    },
});
