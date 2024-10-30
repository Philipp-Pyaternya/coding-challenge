import path from 'path';
import fs from 'fs/promises';
import Card from 'components/Card';

interface IMain {
    initialData: ICard[];
}

export async function getServerSideProps() {
    const file = 'successData.json'; //'failedData.json' | 'successData.json'
    const filePath = path.join(process.cwd(), 'public/data', file);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const initialData = JSON.parse(fileContents);

    return {
        props: {
            initialData,
        },
    };
}

function Main({ initialData }: IMain) {
    return (
        <div className="container mx-auto">
            <div className="h-screen md:flex justify-center items-center">
                <Card data={initialData} />
            </div>
        </div>
    );
}

export default Main;
