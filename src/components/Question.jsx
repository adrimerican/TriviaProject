import React, { Component } from 'react'
import { Button, ListGroup, ListGroupItem, Row, Col } from 'react-bootstrap'

var results = []

class Question extends Component {
    const question  = this.props 
    onChange(choices, event) {
        event.preventDefault()
        const { setCurrent, setScore, question } = this.props
        if (choices === question.correct) {
            results.push('✓')
            setScore(this.props.score + 1)
            setCurrent(this.props.current + 1)
        } else if (choices !== question.correct) {
            results.push('X')
            setCurrent(this.props.current + 1)
        } else {
            console.log('not right or wrong')
            setCurrent(this.props.current + 1)
        }
    }

    shuffleChoices(choices) {
        for (let index = choices.length - 1; index > 0; index--) {
            let index_2 = Math.floor(Math.random() * (index + 1))
            let temp = choices[index]
            choices[index] = choices[index_2]
            choices[index_2] = temp
        }
        return choices
    }

    

    render() {
        
        //console.log(question)
        return (
            <div>
                {
                    results.length === 0
                        ? <div></div>
                        : <div bsStyle="small">
                            <div className="results">
                                <div className="center">
                                    {
                                        results.map( (result, index) => {
                                            if (result === 'X') {
                                                return (
                                                    <span key={`wrong-${index}`} style={style.wrong}>
                                                        {`   ${result}   `}
                                                    </span>
                                                )
                                            } else {
                                                return (
                                                    <span key={`correct_${index}`} style={style.correct}>
                                                        {`   ${result}   `}
                                                    </span>
                                                )
                                            }
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                }
                <div>
                    <h3><center>{question.text}</center></h3>
                    <hr />
                    <ListGroup>
                        {
                            this.shuffleChoices(question.choices).map((choice, index) => {
                                const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
                                return (
                                    <ListGroupItem key={`choices_${index}`} onClick={this.onChange.bind(this, choice.text)}>
                                        <Button
                                            bsStyle={'primary'}
                                            name={question.id}
                                            key={`choices_button_${index}`}
                                        >
                                            {alphabet[index]}
                                        </Button>
                                        <span className="choice">{choice.text}</span>
                                    </ListGroupItem>
                                )
                            })
                        }
                    </ListGroup>
                    <Row>
                        <Col className="category" md={11}>
                            <strong>Category: </strong>{question.category}
                        </Col>
                        <Col className="difficulty" md={1}>
                            {question.difficulty}
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

const style = {
    correct: {
        color: '#008000'
    },
    wrong: {
        color: '#FF0000'
    }
}

export default Question