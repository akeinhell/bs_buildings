import * as React from 'react';
import * as classnames from 'classnames';
import { Header, Table, Rating } from 'semantic-ui-react';
import { Divider, Icon } from 'semantic-ui-react';

import * as styles from './Home.css';

export const Home: React.FunctionComponent = props => (
    <React.Fragment>
        <Table celled padded className={styles.main}>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell colSpan="5">
                        Git Repository
                    </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                    <Table.HeaderCell singleLine>
                        Evidence Rating
                    </Table.HeaderCell>
                    <Table.HeaderCell>Effect</Table.HeaderCell>
                    <Table.HeaderCell>Efficacy</Table.HeaderCell>
                    <Table.HeaderCell>Consensus</Table.HeaderCell>
                    <Table.HeaderCell>Comments</Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {[...Array(10)].fill(10).map((item, id) => (
                    <Table.Row key={id}>
                        <Table.Cell>
                            <Header as="h2" textAlign="center">
                                A
                            </Header>
                        </Table.Cell>
                        <Table.Cell singleLine>Weight</Table.Cell>
                        <Table.Cell>
                            <Rating
                                icon="star"
                                defaultRating={3}
                                maxRating={3}
                            />
                        </Table.Cell>
                        <Table.Cell textAlign="right">
                            100% <br />
                            <a href="#">65 studies</a>
                        </Table.Cell>
                        <Table.Cell>
                            Creatine is the reference compound for power
                            improvement, with numbers from one meta-analysis to
                            assess potency
                        </Table.Cell>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
        <Divider horizontal>
            <Header as="h4">
                <Icon name="bar chart" />
                Specifications
            </Header>
        </Divider>
    </React.Fragment>
);
