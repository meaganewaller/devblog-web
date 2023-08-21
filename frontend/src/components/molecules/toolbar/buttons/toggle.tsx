import { AiOutlineClose as CloseIcon } from 'react-icons/ai';
import { AiOutlineMenu as OpenIcon } from 'react-icons/ai';

type ToggleButtonProps = {
  isOpenMenu: boolean;
  handleToggleMenu: () => void;
}

export const ToggleButton = ({ isOpenMenu, handleToggleMenu }: ToggleButtonProps) => {
  const title = isOpenMenu ? 'Close menu' : 'Open menu';
  return (
    <button onClick={handleToggleMenu} title={title}>
      {isOpenMenu && <CloseIcon size={32} data-testid="close-icon"/>}
      {!isOpenMenu && <OpenIcon size={32} data-testid="open-icon"/>}
    </button>
  )
}
