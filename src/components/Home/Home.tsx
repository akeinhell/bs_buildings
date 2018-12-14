import * as React from 'react';
import * as classnames from 'classnames';
import { Header, Table, Rating } from 'semantic-ui-react';
import { Divider, Icon } from 'semantic-ui-react';
import { Input } from 'semantic-ui-react'


import * as styles from './Home.css';
const buildings = [
    {alias: 'tower', name: 'Ратуша', gold: 500, wood: 200, stone: 200, icon: '🏤'},
    {alias: 'storage', name: 'Склад', gold: 200, wood: 100, stone: 100, icon: '🏚'},
    {alias: 'house', name: 'Дома', gold: 200, wood: 100, stone: 100, icon: '🏘'},
    {alias: 'food', name: 'Ферма', gold: 100, wood: 50, stone: 50, icon: '🌻'},
    {alias: 'wood', name: 'Лесопилка', gold: 100, wood: 50, stone: 50, icon: '🌲'},
    {alias: 'stone', name: 'Шахта', gold: 100, wood: 50, stone: 50, icon: '⛏'},
    {alias: 'barrack', name: 'Казармы', gold: 200, wood: 100, stone: 100, icon: '🛡'},
    {alias: 'wall', name: 'Стена', gold: 5000, wood: 500, stone: 1500, icon: '🏰'},
    {alias: 'treb', name: 'Требушет', gold: 8000, wood: 1000, stone: 300, icon: '⚔️'},
    {alias: 'ballista', name: 'Баллиста', gold: 30000, wood: 2100, stone: 300, icon: '⚔️'},
];

export const Home: React.FunctionComponent = props => (
    <React.Fragment>
        <Table celled padded className={styles.main}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan="8">
                        Калькулятор построек
                    </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell singleLine>
                        иконки
                    </Table.HeaderCell>
                    <Table.HeaderCell>название</Table.HeaderCell>
                    <Table.HeaderCell>Текущий уровень</Table.HeaderCell>
                    <Table.HeaderCell>Расчетный</Table.HeaderCell>
                    <Table.HeaderCell>Требуемый склад</Table.HeaderCell>
                    <Table.HeaderCell>дата прокачки</Table.HeaderCell>
                    <Table.HeaderCell>Необходимо ресурсов</Table.HeaderCell>
                    <Table.HeaderCell>Окупаемость</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {buildings.map((item) => (
                    <Table.Row key={item.alias}>
                        <Table.Cell>
                            <Header as="h4" textAlign="center">
                                {item.icon}
                            </Header>
                        </Table.Cell>
                        <Table.Cell singleLine>{item.name}</Table.Cell>
                        <Table.Cell>
                            <Input placeholder={`value of ${item.alias}`} size={'mini'} type="number"/>
                        </Table.Cell>
                        <Table.Cell textAlign="right">
                            <Input placeholder={`value of ${item.alias}`} size={'mini'} type="number"/>
                        </Table.Cell>
                        <Table.Cell width={1}>888</Table.Cell>
                        <Table.Cell width={1}>8 ноября</Table.Cell>
                        <Table.Cell>
                            {item.gold} /
                            {item.stone} /
                            {item.wood} 
                        </Table.Cell>
                        <Table.Cell width={1}>50 дней</Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
        <Divider horizontal>
            <Header as="h4">
                <Icon name={'bar chart'} />
                Расчет прокачки
            </Header>
        </Divider>
    </React.Fragment>
);
