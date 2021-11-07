declare const window: any;

export function getSeenVideosFromStorage() {
  const fromStorage = window.localStorage.getItem(
    '@banderInterview-seenVideos',
  );
  if (fromStorage !== null) {
    return JSON.parse(fromStorage);
  } else {
    window.localStorage.setItem(
      '@banderInterview-seenVideos',
      JSON.stringify([]),
    );
    return [];
  }
}
