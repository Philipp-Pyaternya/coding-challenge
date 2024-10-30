import { useMemo } from 'react';
import { SUMMARY, CONTINUE } from 'constant';
import SummaryItem from 'components/Card/Summary/Item';
import Button from 'components/Button';

interface ISummary {
    data: ICard[];
}

function Summary({ data }: ISummary) {
    const SummaryList = useMemo(
        () =>
            data?.map((i) => (
                <SummaryItem
                    key={i.category}
                    score={i.score}
                    category={i.category}
                    icon={i.icon}
                />
            )),
        [data],
    );

    return (
        <div className="px-4 md:px-10 w-full md:w-96 pb-9 flex flex-col">
            <div>
                <p className="text-gray-800 font-bold text-2xl mt-10">
                    {SUMMARY}
                </p>
            </div>
            <div className="flex flex-col justify-center mt-4">
                <div className="overflow-y-auto max-h-[21rem]">
                    {SummaryList}
                </div>
            </div>
            <div className="mt-8">
                <Button>{CONTINUE}</Button>
            </div>
        </div>
    );
}

export default Summary;
