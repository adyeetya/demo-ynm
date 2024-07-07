export const questions = [
  {
    id: 1,
    text: 'How can I help you today? What are your top concerns?',
    options: [
      { id: 1, text: 'Performance', next: 3 },
      { id: 2, text: 'Nutrition', next: 2 },
      { id: 3, text: 'Hygiene', next: 2 },
      { id: 4, text: 'Wellness', next: 2 },
    ],
  },
  {
    id: 2,
    text: 'These Products are coming soon. Thankyou for waiting.',
    options: [],
  },
  {
    id: 3,
    text: 'What best describes your concern?',
    options: [
      { id: 1, text: 'Erectile Dysfunction (ED)', next: 4 },
      { id: 2, text: 'Premature Ejaculation (PE)', next: 4 },
      { id: 3, text: 'Low Sex Drive', next: 4 },
      { id: 4, text: 'Low Testosterone', next: 4 },
    ],
  },
  {
    id: 4,
    text: 'How would you describe your sex drive over the past year?',
    options: [
      { id: 1, text: 'Low (Dont feel like it)', next: 5 },
      { id: 2, text: 'Medium (on and off)', next: 5 },
      { id: 3, text: 'High (Feel aroused very regularly)', next: 5 },
    ],
  },
  {
    id: 5,
    text: 'Which of the following issues do you identify with?',
    options: [
      { id: 1, text: 'I have no issue in maintaining my erection.', next: 6 },
      {
        id: 2,
        text: 'Occasionally, my erection is not hard enough to penetrate my partner.',
        next: 6,
      },
      {
        id: 3,
        text: 'I usually find it difficult to maintain my erection.',
        next: 6,
      },
    ],
  },
  {
    id: 6,
    text: 'Which of the following do you identify with?',
    options: [
      { id: 1, text: 'I ejaculate before penetration.', next: 7 },
      {
        id: 2,
        text: 'I find myself ejaculating too early during sex.',
        next: 7,
      },
      { id: 3, text: 'I have no issue with ejaculation', next: 7 },
    ],
  },
  {
    id: 7,
    text: 'How often do you indulge in sexual activity?',
    options: [
      { id: 1, text: 'Once a week', next: 8 },
      { id: 2, text: 'More than once a week', next: 8 },
      { id: 3, text: 'Less than once a week', next: 8 },
      { id: 4, text: 'Dont keep track', next: 8 },
    ],
  },
  {
    id: 8,
    text: 'How would you describe your activity levels?',
    options: [
      { id: 1, text: 'Sedentary', next: 9 },
      { id: 2, text: 'Moderately active', next: 9 },
      { id: 3, text: 'Very active', next: 9 },
    ],
  },
  {
    id: 9,
    text: 'What is your age group?',
    options: [
      { id: 1, text: '18-24', next: 10 },
      { id: 2, text: '25-34', next: 10 },
      { id: 3, text: '35-44', next: 10 },
      { id: 4, text: '45+', next: 10 },
    ],
  },
  {
    id: 10,
    text: 'Please rate your current satisfaction with your condition.',
    options: [
      { id: 1, text: 'Very Satisfied' },
      { id: 2, text: 'Satisfied' },
      { id: 3, text: 'Neutral' },
      { id: 4, text: 'Dissatisfied' },
      { id: 5, text: 'Very Dissatisfied' },
    ],
  },
]
