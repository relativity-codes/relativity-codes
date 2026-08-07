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

const fallbackQuotes: Quote[] = [
    {
        id: "1",
        content: "The best architecture solves today's problems while anticipating tomorrow's complexity.",
        author: "Everest Ukweh",
        authorSlug: "everest-ukweh",
        length: 83
    },
    {
        id: "2",
        content: "Great systems scale quietly.",
        author: "Everest Ukweh",
        authorSlug: "everest-ukweh",
        length: 28
    },
    {
        id: "3",
        content: "Simplicity is the soul of efficiency.",
        author: "Austin Freeman",
        authorSlug: "austin-freeman",
        length: 37
    }
];

const Quotes = () => {
    const [quotes, setQuotes] = useState<Quote[]>([]);
    const icons = ["lightbulb-person.svg", "rocket.svg", "lightbulb-person.svg", "rocket.svg"];

    useEffect(() => {
        const fetchQuote = async () => {
            const res = await fetch('https://api.realinspire.live/v1/quotes/random');
            if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
            return res.json();
        };

        const getQuotes = async () => {
            try {
                const fetchedArrays: Quote[][] = await Promise.all([
                    fetchQuote(),
                    fetchQuote(),
                    fetchQuote()
                ]);
                console.log("Fetched Arrays:", fetchedArrays);
                const mergedQuotes = fetchedArrays.flat();
                setQuotes(mergedQuotes.length > 0 ? mergedQuotes : fallbackQuotes);
            } catch (err) {
                console.error("Error fetching quotes:", err);
                setQuotes(fallbackQuotes);
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