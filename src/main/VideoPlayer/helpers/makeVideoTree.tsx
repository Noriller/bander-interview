import { Video, VideoData } from '../types/Video';

export function makeVideoTree({
  entryVideo,
  firstPartVideos,
  secondPartVideos,
  bloopersVideos,
  finalVideo,
}: VideoData): Video {
  const video = entryVideo;

  const toUseFirstPartVideos =
    filterShuffleReturnX(firstPartVideos, 4);
  const toUseSecondPartVideos =
    filterShuffleReturnX(secondPartVideos, 4);
  const [blooper1, blooper2] =
    filterShuffleReturnX(bloopersVideos, 2);

  const secondPart = makeVideoPart(
    toUseSecondPartVideos,
    blooper2,
    [finalVideo],
  );

  const firstPart = makeVideoPart(
    toUseFirstPartVideos,
    blooper1,
    secondPart,
  );

  appendChildren(video, firstPart);

  return video;
}

function makeVideoPart(
  videoPart: Video[],
  blooper: Video,
  appendToLeafs: Video[],
) {
  const [v1, v2, v3, v4] = videoPart;

  appendChildren(v3, appendToLeafs);
  appendChildren(v4, appendToLeafs);
  appendChildren(blooper, [v3, v4]);

  const children = [v3, v4, blooper];
  appendChildren(v1, children);
  appendChildren(v2, children);

  return [v1, v2];
}

function appendChildren(
  video: Video,
  children: Video[],
) {
  if (
    !video.children ||
    video.children.length === 0
  ) {
    video.children = children;
  } else {
    video.children.forEach(child =>
      appendChildren(child, children),
    );
  }

  return video;
}

function filterShuffleReturnX(
  videos: Video[],
  quantity: number,
): Video[] {
  const shuffled = suffleArray([...videos]);
  const filtered = shuffled.filter(
    video => video.wasSeen === false,
  );

  if (filtered.length >= quantity) {
    return filtered.slice(0, quantity);
  }

  return mergeArraysWithoutDuplicates(
    filtered,
    shuffled,
  ).slice(0, quantity);
}

function suffleArray(arr: Video[]) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function mergeArraysWithoutDuplicates(
  arr1: Video[],
  arr2: Video[],
) {
  return arr1
    .concat(arr2)
    .filter(
      (item, index, array) =>
        array.indexOf(item) === index,
    );
}
