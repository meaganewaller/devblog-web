'use client';

import { useState, useEffect } from 'react';

export function usePushFooterToBottom() {
  const [footerHeight, setFooterHeight] = useState(0);

  useEffect(() => {
    const footerHeight = document.body.scrollHeight;
    const footer = document.querySelector('footer');
    if (!footer) return;
    setFooterHeight(footer.getBoundingClientRect().height);
  }, []);

  return footerHeight;
}
