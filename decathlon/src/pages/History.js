import React from 'react'
import Banner from '../components/banner/Banner'
import PageWrapper from '../components/layout/PageWrapper'
import HeadTitle from '../components/banner/HeadTitle'
import Main from '../components/layout/Main'
import ContentRows from '../components/historyContent/Contentrows'
import ChronoBar from '../components/historyContent/ChronoBar'

const History = () => {
    return (
        <Main>
            <ChronoBar />
            <section>
                <Banner 
                element2={
                    <HeadTitle
                    htitle="The history of"
                    sub="DECATHLON GREECE"
                    par="in a few words"
                    btn={false}
                    />
                }/>
            </section>
            <PageWrapper >
                <ContentRows />
            </PageWrapper>

        </Main>
    )
}

export default History
