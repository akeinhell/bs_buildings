import * as React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import Head from 'next/head';
import { Grid, Image } from 'semantic-ui-react'
import * as styles from './styles.css';

export const Layout: React.FunctionComponent = props => (
    <div id="layout">
        <Head>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
        </Head>
        <Header />
        <Grid columns={4}>
            <Grid.Row className={styles.content}>
                <Grid.Column color={"green"} floated={"left"} width={2}>
                    <Image src="/images/wireframe/paragraph.png" />
                </Grid.Column>
                <Grid.Column width={12} textAlign={'left'} floated={'left'}>
                    {props.children}
                    <Footer />
                </Grid.Column>
            </Grid.Row>
        </Grid>

    </div>
);
