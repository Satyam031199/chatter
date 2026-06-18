import { useEffect, useRef } from "react";

export const useScrollToBottom = (threadKey, lastItemId) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (threadKey == null || threadKey === "") return;
    const el = scrollRef.current;
    if (!el) return;
    const scrollToBottom = () => {
      el.scrollTop = el.scrollHeight;
    };
    scrollToBottom();
    requestAnimationFrame(scrollToBottom);
  }, [threadKey, lastItemId]);

  return scrollRef;
};
