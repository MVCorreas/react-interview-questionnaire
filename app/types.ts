// Data Models
export interface Question {
  prompt: string;
  options: string[];
  answerIndex: number;
  feedback: string;
}

// Component Props
export interface CardProps {
  question: Question;
  onSelect: (index: number) => void;
  selected: number | null;
  disabled?: boolean;
}

export interface ScoreBoardProps {
  score: number;
}

export interface FeedbackMessageProps {
  handleNext: () => void;
  showFeedback: boolean;
  isCorrect: boolean;
  question: Question;
}

export interface ButtonProps {
  text: string;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

export interface HeaderProps {
  // Header typically has no props, but including for completeness
}

// State management
export interface QuizState {
  current: number;
  selected: number | null;
  score: number;
  showFeedback: boolean;
  isCorrect: boolean;
}

export interface QuizGameProps {
  onClose?: () => void;
}

// Icon Component Props
export interface IconProps {
  className?: string;
}
