import { VideoTree } from './types/Video';

export const mockVideos = [
  'http://127.0.0.1:8081/timeline/vid01.mp4',
  'http://127.0.0.1:8081/timeline/vid02.mp4',
  'http://127.0.0.1:8081/timeline/vid03.mp4',
  'http://127.0.0.1:8081/timeline/vid04.mp4',
];
export const mockOptions = [
  '1. option 1 lorem ipsum',
  '2. option 2 lorem ipsum',
  '3. option 3 lorem ipsum',
];

const coisa = {
  videoSrc: '',
  videoTitle: '',
  wasSeen: false,
};

export const mockShenanigans: VideoTree = {
  entryVideo: {
    videoSrc: '',
    videoTitle: 'Start the interview!',
    wasSeen: false,
    children: [
      {
        videoSrc: '',
        videoTitle: 'All roads...',
        wasSeen: false,
        children: [
          {
            videoSrc: '',
            videoTitle: 'Tell me about yourself',
            wasSeen: false,
            children: [
              {
                videoSrc: '',
                videoTitle: 'About your voice...',
                wasSeen: false,
              },
            ],
          },
          {
            videoSrc: '',
            videoTitle: 'About your voice...',
            wasSeen: false,
            children: [
              {
                videoSrc: '',
                videoTitle:
                  'Tell me about yourself',
                wasSeen: false,
              },
            ],
          },
        ],
      },
      {
        videoSrc: '',
        videoTitle: '...leads to rome.',
        wasSeen: false,
        children: [
          {
            videoSrc: '',
            videoTitle: 'Tell me about yourself',
            wasSeen: false,
            children: [
              {
                videoSrc: '',
                videoTitle: 'About your voice...',
                wasSeen: false,
              },
            ],
          },
          {
            videoSrc: '',
            videoTitle: 'About your voice...',
            wasSeen: false,
            children: [
              {
                videoSrc: '',
                videoTitle:
                  'Tell me about yourself',
                wasSeen: false,
              },
            ],
          },
        ],
      },
    ],
  },
  firstPartVideos: [
    {
      videoSrc: '',
      videoTitle: 'Why do you want to go abroad?',
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle: 'Why make this... interview?',
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle: "What's your strengths?",
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle: "What's your weaknesses?",
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle:
        'What would be a challenge to you?',
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle:
        'What do you think you can most contribute with?',
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle:
        'You have a MBA in IT Project Management... do you want to be a leader?',
      wasSeen: false,
    },
  ],
  secondPartVideos: [
    {
      videoSrc: '',
      videoTitle: 'secondPart 1',
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle: 'secondPart 2',
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle: 'secondPart 3',
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle: 'secondPart 4',
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle: 'secondPart 5',
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle: 'secondPart 6',
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle: 'secondPart 7',
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle: 'secondPart 8',
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle: 'secondPart 9',
      wasSeen: false,
    },
  ],
  extraVideos: [
    {
      videoSrc: '',
      videoTitle: 'extraVideos 1',
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle: 'extraVideos 2',
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle: 'extraVideos 3',
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle: 'extraVideos 4',
      wasSeen: false,
    },
    {
      videoSrc: '',
      videoTitle: 'extraVideos 5',
      wasSeen: false,
    },
  ],
  finalVideo: {
    videoSrc: '',
    videoTitle: 'Interview Conclusion',
    wasSeen: false,
  },
};
