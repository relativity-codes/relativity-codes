"use client";
import { Motion, spring } from "react-motion";
import LandingCard from "@/components/shared/landing-card";
import Quotes from "@/components/shared/quotes-of-day";
import SliderWave from "@/components/shared/sliderwave";
import { Box } from "@/components/ui/box";
import ProgrammingLanguages from "@/components/shared/ProgrammingLanguages";
export default function Home() {
  return (
    <Container />
  );
}


const Container = () => {
  return (
    <Motion defaultStyle={{ o: 0 }} style={{ o: spring(1) }}>
      {style => (
        <div style={{ opacity: style.o }} key="motion-content">
          <SliderWave />
          <Box className="flex h-full w-full flex-col items-start mx-auto justify-start gap-6 overflow-y-scroll py-4">
            <Box className="flex h-full min-h-[650px] w-full md:min-h-[600px] md:pt-10">
              <LandingCard />
            </Box>
            <Box className="flex flex-col md:flex-row">
              <ProgrammingLanguages />
            </Box>
            <Box className="flex flex-col md:flex-row">
              <Quotes />
            </Box>
          </Box>
        </div>
      )}
    </Motion>
  );
};
