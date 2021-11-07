declare const window: any;

export function getFinishedFromStorage() {
  const fromStorage = window.localStorage.getItem(
    '@banderInterview-finished',
  );
  if (fromStorage !== null) {
    return JSON.parse(fromStorage);
  } else {
    window.localStorage.setItem(
      '@banderInterview-finished',
      JSON.stringify(false),
    );
    return [];
  }
}
