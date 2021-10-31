import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/layout';
import { Progress } from '@chakra-ui/react';

export function QuestionTimer({
  timerActive,
  isPlaying,
  dispatchNextQuestion,
}: {
  timerActive: boolean;
  isPlaying: boolean;
  dispatchNextQuestion: () => void;
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying && progress > 0) {
        setProgress(x => x - 10);
      } else {
        clearInterval(interval);
        if (isPlaying && progress < 10) {
          dispatchNextQuestion();
        }
      }
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [progress, isPlaying, dispatchNextQuestion]);

  useEffect(() => {
    if (timerActive) {
      setProgress(3000);
    }
  }, [timerActive]);

  return (
    <Flex>
      <Progress
        flexGrow={1}
        max={3000}
        min={0}
        size='xs'
        colorScheme='gray'
        transform='scaleX(-1)'
        value={progress}
      />
      <Progress
        flexGrow={1}
        max={3000}
        min={0}
        size='xs'
        colorScheme='gray'
        value={progress}
      />
    </Flex>
  );
}
