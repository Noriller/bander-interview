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
  optionsLength: number,
) {
  return (event: React.KeyboardEvent): void => {
    if (event.key === 'f') toggleFullscreen();
    if (event.key === ' ') togglePlay();
    if (event.key === 'ArrowUp')
      setSelected(cur =>
        offsetIndex(optionsLength, cur, -1),
      );
    if (event.key === 'ArrowDown')
      setSelected(cur =>
        offsetIndex(optionsLength, cur, 1),
      );
  };
}
