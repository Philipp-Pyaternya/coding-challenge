import {
    GREAT,
    YOUR_RESULT,
    YOU_SCORED,
    HUNDRED,
    YOU_LOW_SCORED,
    LOW,
} from 'constant';
import { useMemo } from 'react';
import { calculateTotalScore } from 'utils';

interface IResult {
    data: ICard[];
}

function Result({ data }: IResult) {
    const totalScore = useMemo(() => calculateTotalScore(data), [data]);

    return (
        <div
            className={`select-none pb-9 rounded-b-[1.5rem] md:rounded-[1.5rem] w-full md:w-96 flex flex-col items-center ${totalScore >= 60 ? 'bg-main-gradient' : 'bg-failed-gradient'}`}
        >
            <div>
                <p className="text-light-lavender font-bold text-2xl my-5 md:my-10">
                    {YOUR_RESULT}
                </p>
            </div>
            <div
                className={`flex flex-col justify-center items-center w-52 h-52 rounded-full ${totalScore >= 60 ? 'bg-circle-gradient' : 'bg-failed-circle-gradient'}`}
            >
                <span className="font-semibold text-6xl text-white">
                    {totalScore}
                </span>
                <span className="mt-1 text-md text-light-lavender">
                    {HUNDRED}
                </span>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-pale-blue my-3 md:my-10 text-3xl font-bold">
                    {totalScore >= 60 ? GREAT : LOW}
                </p>
                <p className="text-light-lavender text-center px-6 whitespace-pre-wrap text-lg">
                    {totalScore >= 60 ? YOU_SCORED : YOU_LOW_SCORED}
                </p>
            </div>
        </div>
    );
}

export default Result;
