import React, { FC, useEffect, useRef, useState } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import Answers, { AnswerObject } from '../components/Answers';
import Question from '../components/Question';
import { Button, Icon } from 'react-native-elements';
import { QuestionType, getquestiojns } from '../utils/api';

type QuizzProps = {}

const Quizz: FC = (props: QuizzProps) => {

    const [loader, setloader] = useState(false);
    const [question, setquestion] = useState<QuestionType[]>([]);
    const [useranswers, setuseranswers] = useState<AnswerObject[]>([]);
    const [score, setscore] = useState(0);
    const [number, setnumber] = useState(0);
    const [totalquestion] = useState(10);
    const [gameover, setgameover] = useState(true);
    const setcorrectanswer = useRef(null);
    const [correcta, setcorrecta] = useState('');

    useEffect(() => {
        startQuiz();
    }, []);

    const startQuiz = async () => {
        setnumber(0);
        setloader(true);
        setgameover(false);
        const newquestions = await getquestiojns();
        console.log(newquestions);
        setquestion(newquestions);
        setscore(0);
        setuseranswers([]);
        setloader(false);
    };

    const nextQuestion = () => {
        const nextq = number + 1;
        if (nextq == totalquestion) {
            setgameover(true);
        } else {
            setnumber(nextq);
        }
    };

    const checkanswer = () => {
        if (!gameover) {
            const answer = setcorrectanswer.current;

            const mCorrecta = question[number].correct_answer === answer;

            if (mCorrecta) setscore(prev => prev + 1);

            const answerobject = {
                question: question[number].question,
                answer,
                correcta,
                correctanswer: question[number].correct_answer,
            };

            setuseranswers(prev => [...prev, answerobject]);
            setTimeout(() => {
                nextQuestion();
            }, 1000);
        }
    };

    return (
        <View style={{ backgroundColor: 'white', height: '100%' }}>

            <View style={{ flexDirection: 'row', justifyContent: 'center', }}>
                <Text style={[{ color: 'black', fontSize: 24 }]}>Questions</Text>
                <Text style={[{ color: 'black', fontSize: 24, fontWeight: '800' }]}>{number + 1}/{totalquestion}</Text>
            </View>
            <Text style={[{ color: 'black', alignSelf: 'center', fontSize: 20 }]}>Score : {score}</Text>

            {!loader ? (
                <View
                // style={{ flex: 1 }}
                >

                    {question.length > 0 ? (
                        <>
                            <Question
                                QuestionNo={number + 1}
                                Question={question[number].question}
                            />
                            <Answers
                                answers={question[number].answers}
                                {...{ setcorrectanswer, checkanswer }}
                                useranswer={useranswers ? useranswers[number] : undefined}
                            />
                        </>
                    ) : null}
                </View>
            ) : (
                <ActivityIndicator
                    style={{ justifyContent: 'center', top: 200 }}
                    size={50}
                    color="black"
                />
            )}



            <View>
                {!gameover && !loader && number !== totalquestion - 1 ? (
                    <Button onPress={() => nextQuestion()} title={'Next'} />
                ) : number === totalquestion - 1 ? (
                    <Button onPress={() => startQuiz()} title={'Re-Start'} />
                ) : null}
            </View>
        </View>
    );
};

export default Quizz;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginTop: 70,
        backgroundColor: 'white',
    },
    textstyle: { padding: 15, fontSize: 15, color: 'blue' },
    bottomview: {
        padding: 13,
        backgroundColor: 'red',
        borderRadius: 300,
        width: 70,
        height: 70,
        // position: 'absolute',
        right: 20,
        top: 550,
    },
    questioncontainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        marginTop: 10,
        paddingRight: 16,
    },
    iconstyle: {
        backgroundColor: 'blue',
        borderRadius: 50,
        width: 70,
        height: 70,
        margin: 5,
        top: 100,
        left: 260,
    },

});
