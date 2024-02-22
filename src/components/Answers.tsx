import React, { FC } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Buttons from './Buttons';

interface AnswersProps {
    answers: string[];
    checkanswer: () => void;
    useranswer: AnswerObject | undefined;
    setcorrectanswer: any;
}

export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctanswer: string;
}

const Answers: FC<AnswersProps> = (props) => {
    return (
        <View style={styles.container}>
            {props.answers.map((answer, key) => {
                return (
                    <View key={answer}>
                        <Buttons
                            {...{ key, answer }}
                            correct={props.useranswer?.correctanswer === answer}
                            disabled={props.useranswer ? true : false}
                            onPress={() => {
                                (props.setcorrectanswer.current = answer),
                                    props.checkanswer();
                            }}
                        />
                    </View>
                );
            })}
        </View>
    );
};

export default Answers;

const styles = StyleSheet.create({
    container: {
        marginTop: 10, paddingHorizontal: 20,
        height: 200,
    },
    questioncontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        paddingRight: 16,
    },

    textstyle: { padding: 15, fontSize: 15, color: 'blue' },
});
