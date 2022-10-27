import React, { useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const inputRef = React.useRef();
  const { currentUser } = React.useContext(CurrentUserContext);
  const [loading, setLoading] = React.useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    onUpdateAvatar({
      avatar: inputRef.current.value,
    }).then(() => {
      setLoading(false);
    });
  }
  return (
    <PopupWithForm onSubmit={handleSubmit} name='avatar' title='Обновить ававтар' className='avatar-form' isOpen={isOpen} onClose={onClose} submitText="Сохранить" isLoading={loading}>
      <input defaultValue={currentUser.avatar} ref={inputRef} name="avatar" type="url" id="popup__avatar-link" className="popup__inputs" required
        placeholder="Ссылка на картинку" />
      <span className="popup__error popup__avatar-link-error"></span>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;