import { VideoData } from './types/Video';

export const mockShenanigans: VideoData = {
  entryVideo: {
    videoSrc: 'entry/start_interview.mp4',
    videoTitle: 'Start the interview!',
    wasSeen: false,
    children: [
      {
        videoSrc: 'entry/all_roads_lead_rome.mp4',
        videoTitle: 'All roads...',
        wasSeen: false,
        children: [
          {
            videoSrc:
              'entry/tell_about_yourself.mp4',
            videoTitle: 'Tell me about yourself',
            wasSeen: false,
            children: [
              {
                videoSrc:
                  'entry/about_your_voice.mp4',
                videoTitle: 'About your voice...',
                wasSeen: false,
              },
            ],
          },
          {
            videoSrc:
              'entry/about_your_voice.mp4',
            videoTitle: 'About your voice...',
            wasSeen: false,
            children: [
              {
                videoSrc:
                  'entry/tell_about_yourself.mp4',
                videoTitle:
                  'Tell me about yourself',
                wasSeen: false,
              },
            ],
          },
        ],
      },
      {
        videoSrc: 'entry/all_roads_lead_rome.mp4',
        videoTitle: '...leads to rome.',
        wasSeen: false,
        children: [
          {
            videoSrc:
              'entry/tell_about_yourself.mp4',
            videoTitle: 'Tell me about yourself',
            wasSeen: false,
            children: [
              {
                videoSrc:
                  'entry/about_your_voice.mp4',
                videoTitle: 'About your voice...',
                wasSeen: false,
              },
            ],
          },
          {
            videoSrc:
              'entry/about_your_voice.mp4',
            videoTitle: 'About your voice...',
            wasSeen: false,
            children: [
              {
                videoSrc:
                  'entry/tell_about_yourself.mp4',
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
      videoSrc: 'first/why_abroad.mp4',
      videoTitle: 'Why do you want to go abroad?',
      wasSeen: false,
    },
    {
      videoSrc: 'first/languages_speak.mp4',
      videoTitle: 'What languages you speak?',
      wasSeen: false,
    },
    {
      videoSrc: 'first/five_years.mp4',
      videoTitle:
        'Where do you see yourself in five years?',
      wasSeen: false,
    },
    {
      videoSrc: 'first/salary_expectations.mp4',
      videoTitle:
        "What's your salary expectations?",
      wasSeen: false,
    },
    {
      videoSrc: 'first/why_you.mp4',
      videoTitle: 'Why you?',
      wasSeen: false,
    },
    {
      videoSrc: 'first/why_new_job.mp4',
      videoTitle:
        'Why are you looking for a new job?',
      wasSeen: false,
    },
    {
      videoSrc: 'first/why_programmer.mp4',
      videoTitle:
        'Why did you became a programmer?',
      wasSeen: false,
    },
    {
      videoSrc: 'first/why_this_interview.mp4',
      videoTitle: 'Why make this... interview?',
      wasSeen: false,
    },
    {
      videoSrc: 'first/weaknesses.mp4',
      videoTitle: "What's your weaknesses?",
      wasSeen: false,
    },
    {
      videoSrc: 'first/strengths.mp4',
      videoTitle: "What's your strengths?",
      wasSeen: false,
    },
    {
      videoSrc: 'first/want_to_leader.mp4',
      videoTitle:
        'You have a MBA in IT Project Management... do you want to be a leader?',
      wasSeen: false,
    },
    {
      videoSrc: 'first/what_need_start.mp4',
      videoTitle: 'What do you need to start?',
      wasSeen: false,
    },
    {
      videoSrc: 'first/work_with_team.mp4',
      videoTitle: 'How do you work with a team?',
      wasSeen: false,
    },
  ],
  secondPartVideos: [
    {
      videoSrc: 'second/first_project.mp4',
      videoTitle:
        'Tell me about your first project.',
      wasSeen: false,
    },
    {
      videoSrc: 'second/work_with_customers.mp4',
      videoTitle:
        'How do you work with your customers?',
      wasSeen: false,
    },
    {
      videoSrc:
        'second/disagreed_with_colleague.mp4',
      videoTitle:
        "Tell me about a time you've disagreed with a colleague.",
      wasSeen: false,
    },
    {
      videoSrc: 'second/comfort_zone.mp4',
      videoTitle:
        "Tell me about a time you've stepped out of your comfort zone.",
      wasSeen: false,
    },
    {
      videoSrc: 'second/learn_for_project.mp4',
      videoTitle:
        'How do you learn for a project?',
      wasSeen: false,
    },
    {
      videoSrc: 'second/easy_filter.mp4',
      videoTitle: 'Tell me about EasyFilter.',
      wasSeen: false,
    },
    {
      videoSrc: 'second/progress_on_project.mp4',
      videoTitle:
        'How do you check your progress on a project?',
      wasSeen: false,
    },
    {
      videoSrc: 'second/legacy_code.mp4',
      videoTitle:
        "How do you work with legacy or a colleague's code?",
      wasSeen: false,
    },
    {
      videoSrc: 'second/project_completed.mp4',
      videoTitle:
        "Tell me about a successful project you've completed.",
      wasSeen: false,
    },
    {
      videoSrc: 'second/languages_know.mp4',
      videoTitle:
        'What languages you know and like/dislike?',
      wasSeen: false,
    },
  ],
  extraVideos: [
    {
      videoSrc: 'extras/coding_challenge_2.mp4',
      videoTitle: 'Coding Challenge 2',
      wasSeen: false,
    },
    {
      videoSrc: 'extras/coding_challenge_1.mp4',
      videoTitle: 'Coding Challenge 1',
      wasSeen: false,
    },
    {
      videoSrc: 'extras/walk_through_code.mp4',
      videoTitle:
        'Walk through the code for bander-interview.',
      wasSeen: false,
    },
  ],
  bloopersVideos: [
    {
      videoSrc:
        'bloopers/tired_from_making_videos.mp4',
      videoTitle:
        '[Blooper] Tired from making videos!',
      wasSeen: false,
    },
    {
      videoSrc: 'bloopers/slow_clap.mp4',
      videoTitle: '[Blooper] Slow clap!',
      wasSeen: false,
    },
    {
      videoSrc: 'bloopers/looking_that_way.mp4',
      videoTitle:
        '[Blooper] Why are you looking that way?',
      wasSeen: false,
    },
    {
      videoSrc: 'bloopers/crazy.mp4',
      videoTitle:
        '[Blooper] My Joker impression (AKA: Laughs in Crazy).',
      wasSeen: false,
    },
    {
      videoSrc: 'bloopers/music.mp4',
      videoTitle: '[Blooper] ♪♫♪',
      wasSeen: false,
    },
    {
      videoSrc: 'bloopers/vocal_warming.mp4',
      videoTitle: '[Blooper] Vocal warming?',
      wasSeen: false,
    },
  ],
  finalVideo: {
    videoSrc: 'final/interview_conclusion.mp4',
    videoTitle: 'Interview Conclusion',
    wasSeen: false,
  },
};
