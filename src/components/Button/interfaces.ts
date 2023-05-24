export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>

export interface ButtonDeleteProps extends ButtonProps {
  onDeleteSuccess?: () => {}
}
