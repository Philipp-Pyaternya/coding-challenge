import Image from 'next/image';
import { getColor } from 'utils';

function Item({ icon, category, score }: ICard) {
    return (
        <div
            key={category}
            className="w-full flex justify-between p-5 my-3 rounded-lg cursor-pointer"
            style={{ background: getColor(category).backgroundColor }}
        >
            <div className="flex">
                <Image
                    src={icon}
                    alt={category}
                    width={6}
                    height={6}
                    className="w-6 h-6 rounded-full mr-2 z-50"
                />
                <p style={{ color: getColor(category).textColor }}>
                    {category}
                </p>
            </div>
            <div className="font-semibold">
                <span className="text-gray-700 mr-1">{score}</span>
                <span className="text-dark-gray-blue">/ 100</span>
            </div>
        </div>
    );
}

export default Item;
