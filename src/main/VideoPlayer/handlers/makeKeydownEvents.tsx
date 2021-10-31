import React from 'react';

export function makeKeydownEvents(
  toggleFullscreen: () => void,
  togglePlay: () => void,
  setSelected: React.Dispatch<
    React.SetStateAction<number>
  >,
  offsetIndex: (
    length: number,
    currentIndex: number,
    offset: number,
  ) => number,
  options: string[],
) {
  return (event: React.KeyboardEvent): void => {
    if (event.key === 'f') toggleFullscreen();
    if (event.key === ' ') togglePlay();
    if (event.key === 'ArrowUp')
      setSelected(cur =>
        offsetIndex(options.length, cur, -1),
      );
    if (event.key === 'ArrowDown')
      setSelected(cur =>
        offsetIndex(options.length, cur, 1),
      );
  };
}
