import './style.css'
import { InputSettings } from '@ui/components/atoms'

function AccountDetail() {
  return (
    <div className="accoutnDetail">

      <section className="accoutnDetail__form-section">
        <h1 className="accountDetail__title">Personal Information</h1>
        <div className="accoutnDetail__form-inputs">
          <InputSettings inputTitle="First Name" inputType="text" isImportant={true} />
          <InputSettings inputTitle="Email Address" inputType="email" isImportant={true} />
          <InputSettings inputTitle="Username" inputType="text" isImportant={true} />
          <InputSettings inputTitle="Last Name" inputType="text" isImportant={true} />
          <InputSettings inputTitle="Phone Number" inputType="phone" isImportant={true} />
        </div>
      </section>

      <section className="accoutnDetail__form-section">
        <h1 className="accountDetail__title">Password change</h1>
        <div className="accoutnDetail__form-inputs">
          <InputSettings inputTitle="Current Password" inputType="password" isImportant={false} />
          <InputSettings inputTitle="New Password" inputType="password" isImportant={false} />
          <InputSettings inputTitle="Confirm New Password" inputType="password" isImportant={false} />
        </div>
      </section>

    </div>
  )
}

export default AccountDetail;
