export interface MoodleIconProps {
  size?: string;
  className?: string;
}

const MoodleIcon: React.FunctionComponent<MoodleIconProps> = ({ size = '24px', className }) => {
  return (
    <svg viewBox="0 0 24 24" 
     width={size} 
     height={size}
     className={className}>
        <path fill="currentColor" d="M 14 3 L 6 4 L 0 8 L 1 8 L 1 18 L 2 18 L 2 8 L 4.011719 8 C 4.007813 8.066406 4 8.125 4 8.195313 C 4 9.378906 4.320313 10.199219 4.320313 10.199219 L 8.765625 11.261719 L 12.015625 7.585938 C 12.015625 7.585938 11.71875 6.359375 11.046875 5.460938 Z M 18.5 7 C 16.929688 7 15.507813 7.675781 14.5 8.742188 C 14.242188 8.46875 13.960938 8.214844 13.652344 8 L 11.632813 10.28125 C 12.441406 10.699219 13 11.53125 13 12.5 L 13 20 L 16 20 L 16 12.5 C 16 11.101563 17.101563 10 18.5 10 C 19.898438 10 21 11.101563 21 12.5 L 21 20 L 24 20 L 24 12.5 C 24 9.480469 21.519531 7 18.5 7 Z M 5.03125 11.910156 C 5.011719 12.105469 5 12.300781 5 12.5 L 5 20 L 8 20 L 8 12.621094 Z"/>
    </svg>
  );
};

export default MoodleIcon;
