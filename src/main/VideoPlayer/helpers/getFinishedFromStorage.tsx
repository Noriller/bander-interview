declare const window: any;

export function getFinishedFromStorage() {
  const fromStorage = window.localStorage.getItem(
    '@banderInterview-finished',
  );
  if (fromStorage !== null) {
    return fromStorage == 'true';
  } else {
    window.localStorage.setItem(
      '@banderInterview-finished',
      JSON.stringify(false),
    );
    return false;
  }
}
