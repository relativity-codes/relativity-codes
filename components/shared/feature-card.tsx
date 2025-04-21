"client";
import Image from "next/image";
import { Box } from "../ui/box";
import { Text } from "../ui/text";

const FeatureCard = ({ iconSvg, name, desc }: any) => {
    return (
        <Box className="border-w-1 m-2 flex-1 flex-grow flex-col rounded border border-outline-700 p-4">
            <Box className="flex flex-row items-center">
                <Image
                    src={`/${iconSvg}`}
                    alt="document"
                    priority
                    width={22}
                    height={22}
                />
                <Text className="ml-2 text-xl font-medium text-typography-white">
                    {name}
                </Text>
            </Box>
            <Text className="mt-2 text-typography-400">{desc}</Text>
        </Box>
    );
};

export default FeatureCard;