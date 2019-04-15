import React, { Component } from 'react';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import styled from 'styled-components'

import Link from './Link'

const List = styled.ul`
    display: flex;
    justify-content: space-between;
    aligh-items: center;
    padding: 0;
    height: 40px;
`

class Header extends Component {
    render() {
        return (
            <Row>
               <Col lg={12}>
                    <nav>
                        <Link link="#" text="Вызов мастера"></Link>
                        <Link link="#" text="Прайс на ремонт"></Link>
                        <Link link="#" text="Наши преимущества"></Link>
                        <Link link="#" text="Схема работы"></Link>
                        <Link link="#" text="Отзывы клиентов"></Link>
                        <Link link="#" text="Примеры работ"></Link>
                        <Link link="#" text="Контакты"></Link>
                    </nav>
               </Col> 
            </Row>
        );
    }
}

export default Header