import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { DEV, SENTRY_TRACKING_ID } from '../src/constants/env';
import {Layout} from '../src/components/Layout/Layout'

interface Props {
    scopes: any;
}

interface State {}

export default class extends Document<Props, State> {
    static async getInitialProps(...args) {
        const documentProps = await Document.getInitialProps(...args);
        const { req, renderPage } = args[0];
        const page = renderPage();

        return { ...documentProps, ...page };
    }

    render() {
        return (
            <html lang="ru">
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
                    />
                    {/* <meta property="og:type" content="website"/>
        <meta property="og:site_name" content={SITE_NAME}/>
        <meta property="og:title" content={SITE_TITLE}/>
        <meta property="og:description" content={SITE_DESCRIPTION}/>
        <meta property="og:image" content={SITE_IMAGE}/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta name="twitter:site" content={SITE_NAME}/>
        <meta name="twitter:title" content={SITE_TITLE}/>
        <meta name="twitter:description" content={SITE_DESCRIPTION}/>
        <meta property="twitter:image" content={SITE_IMAGE}/>
        <meta name="format-detection" content="telephone=no, address=no, email=no"/> */}

                    <link
                        rel="stylesheet"
                        href="https://use.fontawesome.com/releases/v5.1.0/css/all.css"
                        integrity="sha384-lKuwvrZot6UHsBSfcMvOkWwlCMgc0TaWr+30HWe3a4ltaBwTZhyTEggF5tJv8tbt"
                        crossOrigin="anonymous"
                    />
                    <link
                        rel="stylesheet"
                        href="//cdn.jsdelivr.net/npm/semantic-ui@2.4.1/dist/semantic.min.css"
                    />
                    <link rel="shortcut icon" href="/static/favicon.ico" />

                    <script src="https://cdn.polyfill.io/v2/polyfill.min.js?features=default,Array.prototype.find,Array.prototype.includes,String.prototype.includes,Array.prototype.findIndex,Object.entries" />
                    {!DEV && SENTRY_TRACKING_ID && (
                        <>
                            <script
                                src="https://cdn.ravenjs.com/3.17.0/raven.min.js"
                                {...{ crossOrigin: 'anonymous' }}
                            />
                            <script
                                dangerouslySetInnerHTML={{
                                    __html: `Raven.config('https://${SENTRY_TRACKING_ID}@sentry.io/156600').install()`,
                                }}
                            />
                        </>
                    )}
                </Head>
                <body>
                    <Layout>
                        <Main />
                    </Layout>
                    <NextScript />
                </body>
            </html>
        );
    }
}
