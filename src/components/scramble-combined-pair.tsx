"use client";

import { useState, useEffect, forwardRef } from "react";
import { useSuperHoverRef } from "super-hover/react";
import { cn } from "@/lib/utils";
import ScrambleHover from "./scramble-hover";
import ScrambleIn, { ScrambleInHandle } from "./scramble-in";

interface ScrambleCombinedPairProps {
  leftText: React.ReactNode;
  leftTextString: string;
  rightText: React.ReactNode;
  img?: string;
  imgAlt?: string;
  delay?: number;
  scrambleSpeed?: number;
  scrambledLetterCount?: number;
  characters?: string;
  className?: string;
  showImage?: boolean;
  containerClassName?: string;
}

const ScrambleCombinedPair = forwardRef<
  ScrambleInHandle,
  ScrambleCombinedPairProps
>(
  (
    {
      leftText,
      leftTextString,
      rightText,
      img,
      imgAlt,
      delay = 0,
      scrambleSpeed = 50,
      scrambledLetterCount = 4,
      characters = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()_+",
      className,
      showImage = false,
      containerClassName,
    },
    ref
  ) => {
    const [leftComplete, setLeftComplete] = useState(false);
    const [rightComplete, setRightComplete] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const [thumbnailWarm, setThumbnailWarm] = useState(false);
    const bothComplete = leftComplete && rightComplete;

    useEffect(() => {
      if (isHovering && showImage && img) setThumbnailWarm(true);
    }, [isHovering, showImage, img]);

    const rowSuperHoverRef = useSuperHoverRef({
      enabled: bothComplete,
      onEnter: () => setIsHovering(true),
      onLeave: () => setIsHovering(false),
    });

    return (
      <div
        ref={rowSuperHoverRef}
        data-super-hover
        className={containerClassName}
      >
        {bothComplete ? (
          <div className="flex justify-between w-full relative flex-1 whitespace-pre">
            <ScrambleHover
              scrambleSpeed={scrambleSpeed * 1.3}
              characters={characters}
              useOriginalCharsOnly
              className={className}
              useInternalHover={false}
              isHovering={isHovering}
            >
              {leftText}
            </ScrambleHover>

            {thumbnailWarm && showImage && img ? (
              <div
                className={cn(
                  "pointer-events-none hidden md:flex sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 xl:w-36 xl:h-36 sm:right-0 md:right-[12%] bottom-0 absolute",
                  isHovering ? "opacity-100" : "opacity-0 invisible",
                )}
                aria-hidden={!isHovering}
              >
                <img
                  src={img}
                  alt={imgAlt ?? ""}
                  className="absolute right-0 top-0 h-full w-full object-cover"
                  decoding="async"
                />
              </div>
            ) : null}

            <ScrambleHover
              scrambleSpeed={scrambleSpeed * 1.3}
              characters={characters}
              useOriginalCharsOnly
              className={"hidden md:inline-flex tabular-nums"}
              useInternalHover={false}
              isHovering={isHovering}
            >
              {rightText}
            </ScrambleHover>
          </div>
        ) : (
          <div className="flex justify-between flex-row w-full ">
            <ScrambleIn
              ref={ref}
              delay={delay}
              scrambleSpeed={scrambleSpeed}
              scrambledLetterCount={scrambledLetterCount}
              characters={characters}
              className={className}
              onComplete={() => setLeftComplete(true)}
            >
              {leftText}
            </ScrambleIn>

            <ScrambleIn
              delay={delay + getAnimationDuration(leftTextString)}
              scrambleSpeed={scrambleSpeed}
              scrambledLetterCount={scrambledLetterCount}
              characters={characters}
              className={"hidden md:inline-flex tabular-nums"}
              onComplete={() => setRightComplete(true)}
            >
              {rightText}
            </ScrambleIn>
          </div>
        )}
      </div>
    );
  }
);

// Helper to calculate animation duration (copied from page.tsx)
const getAnimationDuration = (text: string) => {
  return Math.min((text.length - 5) * 30, 100);
};

ScrambleCombinedPair.displayName = "ScrambleCombinedPair";
export default ScrambleCombinedPair;
