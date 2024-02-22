import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface QuestionProps {
    QuestionNo: number,
    Question: string,
}

const Question: FC<QuestionProps> = (props) => {
    return (
        <View style={styles.questioncontainer}>
            <Text style={styles.textstyle}>{props.QuestionNo}</Text>
            <Text
                style={styles.questionStyle}>
                {props.Question}
            </Text>
        </View>
    );
};

export default Question;

const styles = StyleSheet.create({
    container: {},
    questioncontainer: {
        height: 120,
        // flex: 1,
        // flexDirection: 'row',
        backgroundColor: 'white',
        marginTop: 10,
        paddingRight: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },

    textstyle: { padding: 15, fontSize: 15, color: 'blue' },
    questionStyle: {
        fontSize: 15,
        color: 'black',
        textAlign: 'left',
        marginRight: 7,
    },
});
