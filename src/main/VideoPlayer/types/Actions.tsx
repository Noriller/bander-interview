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
      type: 'initialize';
      payload: never;
    }
  | {
      type: 'prepareNext';
      payload: never;
    }
  | {
      type: 'changeCurrent';
      payload: never;
    }
);
