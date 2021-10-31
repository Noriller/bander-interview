export type Actions =
  | {
      type: 'playToggle';
      payload: boolean;
    }
  | {
      type: 'prepareNext';
      payload: string[];
    }
  | {
      type: 'changeCurrent';
      payload: number;
    };
