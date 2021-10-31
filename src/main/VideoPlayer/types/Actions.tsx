import { RefObject } from 'react';

export type Actions = {
  payload?: string | number | boolean;
  refs?: RefObject<HTMLVideoElement>[];
} & (
  | {
      type: 'playToggle';
      payload: boolean;
    }
  | {
      type: 'prepareNext';
    }
  | {
      type: 'changeCurrent';
      payload: number;
    }
);
