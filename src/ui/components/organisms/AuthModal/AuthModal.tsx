import { useState } from 'react';
import { RegisterModal, LoginModal } from '@ui/components/molecules'

function AuthModal({ onClose }: { onClose: () => void }) {

  const [isRegister, setIsRegister] = useState(false)

  return (
    <div>
      {isRegister ?
        (<RegisterModal onChangeForm={() => setIsRegister(false)} onClose={onClose} />)
        :
        (<LoginModal onChaggeForm={() => setIsRegister(true)} onClose={onClose} />)}
    </div>
  )
}

export default AuthModal;
