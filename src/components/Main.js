import React, { Component } from 'react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styled from 'styled-components'

const Repair = styled.div`
    color: #ffffff;
    font-family: Roboto;
    font-weight: 700;
    line-height: 50px;
    font-size: 40px;

    span {
        font-size: 24px;
        display: block;
        line-height: 30px;
    }
`

const LightText = styled.div`
    color: #ffffff;
    font-size: 18px;
    font-weight: 300;
    line-height: 28px;
    margin-top: 54px;
`

const CallBtn = styled.div`
    width: 245px;
    height: 64px;
    background-color: #ffa14b;
    border-radius: 30px;
    font-size: 18px;
    font-weight: bold;
    margin-top: 32px;
`

class Main extends Component {
    render() {
        return (
            <Row>
                <Col lg={5}>
                    <Repair>
                    Качественный ремонт <span>iphone за 35 минут и гарантия 1 год</span>
                    </Repair>
                    <LightText>
                        Оставьте заявку на бесплатную диагностику без очереди,
                        и получите защитное стекло, стоимостью 1000 рублей,
                        с установкой в подарок!
                    </LightText>
                    <CallBtn>Отправить заявку</CallBtn>
                </Col>

                <Col lg={6} lgOffset={1}>
                    
                </Col>
            </Row>
        )
    }
}

export default Main