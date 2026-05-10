"use client";

import {
  useMemo,
  useState,
  type ComponentPropsWithoutRef,
} from "react";
import { useSuperHoverRef } from "super-hover/react";
import { cn } from "@/lib/utils";
import { SuperHoverParentContext } from "@/components/super-hover-context";

const anchorUnderline = cn(
  "inline-block cursor-pointer border-b-2 border-b-transparent",
  "md:data-[super-hover-active]:border-foreground md:data-[super-hover-active]:cursor-pointer",
);

/** Link with scramble: underline on anchor while scramble reads hover from context */
export function SuperHoverAnchor(props: ComponentPropsWithoutRef<"a">) {
  const { className, children, ...rest } = props;
  const [active, setActive] = useState(false);

  const ref = useSuperHoverRef({
    onEnter: () => setActive(true),
    onLeave: () => setActive(false),
  });

  const providerValue = useMemo(() => ({ active }), [active]);

  return (
    <SuperHoverParentContext.Provider value={providerValue}>
      <a
        ref={ref}
        data-super-hover=""
        className={cn(anchorUnderline, className)}
        {...rest}
      >
        {children}
      </a>
    </SuperHoverParentContext.Provider>
  );
}
