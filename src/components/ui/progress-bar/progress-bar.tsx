interface ProgressBarProps {
  progress: number; // 0-dan 100-ə qədər
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="w-full h-1.5 bg-surface rounded-full overflow-hidden">
      <div 
        className="h-full bg-primary rounded-full transition-all duration-1000 ease-out" 
        style={{ width: `${progress}%` }} 
      />
    </div>
  );
};