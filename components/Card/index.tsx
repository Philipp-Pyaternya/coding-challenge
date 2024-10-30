import Layout from 'components/Card/Layout';
import Result from 'components/Card/Result';
import Summary from 'components/Card/Summary';

interface ICardData {
    data: ICard[];
}

function Card({ data }: ICardData) {
    return (
        <Layout>
            <Result data={data} />
            <Summary data={data} />
        </Layout>
    );
}

export default Card;
