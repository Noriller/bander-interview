import {
  useCallback,
  useState,
  useEffect,
} from 'react';
declare const window: any;
/**
 * Adapted to Typescript from:
 * https://github.com/WebDevSimplified/useful-custom-react-hooks/blob/main/src/8-useStorage/useStorage.js
 */

export function useLocalStorage(
  key: string,
  defaultValue: string,
) {
  return useStorage(
    key,
    defaultValue,
    window.localStorage,
  );
}

export function useSessionStorage(
  key: string,
  defaultValue: string,
) {
  return useStorage(
    key,
    defaultValue,
    window.sessionStorage,
  );
}

function useStorage(
  key: string,
  defaultValue: unknown,
  storageObject: Storage,
) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null)
      return JSON.parse(jsonValue);

    if (typeof defaultValue === 'function') {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined)
      return storageObject.removeItem(key);
    storageObject.setItem(
      key,
      JSON.stringify(value),
    );
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
