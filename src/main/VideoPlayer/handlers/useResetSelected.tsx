import React, { useEffect } from 'react';

export function useResetSelected(
  showChoices: boolean,
  setSelected: React.Dispatch<
    React.SetStateAction<number>
  >,
) {
  useEffect(() => {
    if (showChoices) {
      setSelected(0);
    }
  }, [setSelected, showChoices]);
}
