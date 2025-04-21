"client";
import Image from "next/image";
import { Box } from "../ui/box";
import { Text } from "../ui/text";

const QuoteCard = ({ iconSvg, name, desc }: any) => {
    return (
        <Box className="m-1 w-full flex-1 flex-grow flex-col overflow-hidden rounded border border-outline-700 p-4">
            <Box className="flex w-full flex-grow flex-row items-center">
                <Image
                    src={`/${iconSvg}`}
                    alt="document"
                    priority
                    width={22}
                    height={22}
                />
                <Text className="ml-2 flex flex-grow truncate text-base font-medium text-typography-white">
                    {name}
                </Text>
            </Box>
            <Text className="mt-2 h-12 w-full truncate text-wrap text-base font-thin text-typography-400">{desc}</Text>
        </Box>
    );
};

export default QuoteCard;