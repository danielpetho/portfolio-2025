"use client";

import { useState, forwardRef } from "react";
import ScrambleHover from "./scramble-hover";
import ScrambleIn, { ScrambleInHandle } from "./scramble-in";

interface ScrambleCombinedProps {
  children: React.ReactNode;
  delay?: number;
  scrambleSpeed?: number;
  scrambledLetterCount?: number;
  characters?: string;
  className?: string;
  scrambledClassName?: string;
}

const ScrambleCombined = forwardRef<ScrambleInHandle, ScrambleCombinedProps>(
  (
    {
      children,
      delay = 0,
      scrambleSpeed = 50,
      scrambledLetterCount = 5,
      characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
      className,
      scrambledClassName,
    },
    ref
  ) => {
    const [isInComplete, setIsInComplete] = useState(false);

    return isInComplete ? (
      <ScrambleHover
        scrambleSpeed={scrambleSpeed * 1.3}
        characters={characters}
        useOriginalCharsOnly
        className={className}
        scrambledClassName={scrambledClassName}
        useInternalHover={true}
      >
        {children}
      </ScrambleHover>
    ) : (
      <ScrambleIn
        ref={ref}
        delay={delay}
        scrambleSpeed={scrambleSpeed}
        scrambledLetterCount={scrambledLetterCount}
        characters={characters}
        className={className}
        scrambledClassName={scrambledClassName}
        onComplete={() => setIsInComplete(true)}
      >
        {children}
      </ScrambleIn>
    );
  }
);

ScrambleCombined.displayName = "ScrambleCombined";
export default ScrambleCombined; 