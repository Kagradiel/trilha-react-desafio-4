export interface IButtonProps {
  title: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
}
