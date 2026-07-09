"use client";

import Image, { type ImageProps } from "next/image";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/Skeleton";
import { useImageLoaded } from "@/hooks/useImageLoaded";

interface ImageWithSkeletonProps extends Omit<ImageProps, "onLoad"> {
  skeletonDelayMs?: number;
}

export function ImageWithSkeleton({
  alt,
  skeletonDelayMs,
  ...imageProps
}: ImageWithSkeletonProps) {
  const { isLoaded, handleLoad } = useImageLoaded();
  return (
    <div className="relative">
      {!isLoaded && (
        <Skeleton className="absolute inset-0" delayMs={skeletonDelayMs} />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        {" "}
        <Image {...imageProps} alt={alt} onLoad={handleLoad} />
      </motion.div>
    </div>
  );
}
