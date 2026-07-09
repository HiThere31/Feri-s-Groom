import { useState } from "react";

interface UseGalleryVisibleItemsOptions {
  totalCount: number;
  initialCount?: number;
  incrementCount?: number;
}

export function useGalleryVisibleItems({
  totalCount,
  initialCount = 12,
  incrementCount = 8,
}: UseGalleryVisibleItemsOptions) {
  const [visibleCount, setVisibleCount] = useState(
    Math.min(initialCount, totalCount)
  );
  const hasMore = visibleCount < totalCount;
  const canPaginate = totalCount > initialCount;
  function showMore() {
    setVisibleCount((current) =>
      Math.min(current + incrementCount, totalCount)
    );
  }
  function showLess() {
    setVisibleCount(Math.min(initialCount, totalCount));
  }

  function toggle() {
    if (hasMore) {
      showMore();
    } else {
      showLess();
    }
  }

  return { visibleCount, hasMore, showMore, showLess, toggle, canPaginate };
}
