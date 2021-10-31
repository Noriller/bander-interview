import { useEffect } from 'react';

export function usePageListeners(
  setFullscreen: (boolean: boolean) => void,
  container: React.RefObject<HTMLDivElement>,
) {
  useEffect(() => {
    document.onfullscreenchange = () => {
      setFullscreen(
        Boolean(document.fullscreenElement),
      );
    };
    document.onkeydown = e => {
      if (
        document.activeElement ===
        container.current
      ) {
        if (
          e.key === 'ArrowUp' ||
          e.key === 'ArrowDown'
        )
          e.preventDefault();
      }
    };

    return () => {
      document.onfullscreenchange = null;
      document.onkeydown = null;
    };
  }, [container, setFullscreen]);
}
