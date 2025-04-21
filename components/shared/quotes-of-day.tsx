"use client";
import React, { useEffect, useState } from 'react';
import { Box } from '../ui/box';
import QuoteCard from './quotes-card';

interface Quote {
    id: string;
    content: string;
    author: string;
    authorSlug: string;
    length: number;
}

const Quotes = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const icons = ["lightbulb-person.svg", "rocket.svg", "lightbulb-person.svg", "rocket.svg"];

    useEffect(() => {
        const getQuotes = async () => {
            try {
                const fetchedArrays: Quote[][] = await Promise.all([
                    fetch('https://api.realinspire.live/v1/quotes/random').then(res => res.json()),
                    fetch('https://api.realinspire.live/v1/quotes/random').then(res => res.json()),
                    fetch('https://api.realinspire.live/v1/quotes/random').then(res => res.json())
                ]);
                console.log("Fetched Arrays:", fetchedArrays);
                const mergedQuotes = fetchedArrays.flat();
                setQuotes(mergedQuotes);
            } catch (err) {
                console.error("Error fetching quotes:", err);
            }
        };

        getQuotes();

        const interval = setInterval(() => {
            getQuotes();
        }, 1000 * 60 * 60); // refresh every hour

        return () => clearInterval(interval);
    }, []);

    return (
        <Box className="flex w-full flex-grow flex-row items-center justify-center px-4 md:px-32">
            <Box className="flex w-auto flex-col items-start justify-center gap-4 md:flex-row md:items-center md:justify-center md:gap-1">
                {quotes.map((quote, i) => (
                    <React.Fragment key={i}>
                        <QuoteCard
                            iconSvg={icons[i % icons.length]}
                            name={quote.author}
                            desc={quote.content}
                        />
                    </React.Fragment>
                ))}
            </Box>
        </Box>
    );
};

export default Quotes;