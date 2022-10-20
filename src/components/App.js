import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);


  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null)
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <div className="wrapper">
      <div className="page">
        <Header />
        <Main onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          closeAllPopups={closeAllPopups}
          setSelectedCard={setSelectedCard}
        />
        <PopupWithForm name='info' title='Редактировать профиль' className='profile-form' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} submitText="Сохранить">
          <input name="name" className="popup__inputs" id="popup__name" type="text"
            minLength="2" maxLength="40" required />
          <span className="popup__error popup__name-error"></span>
          <input name="about" className="popup__inputs" id="popup__job" type="text"
            required minLength="2" maxLength="200" />
          <span className="popup__error popup__job-error"></span>
        </PopupWithForm>
        <PopupWithForm name='add-card' title='Новое место' className='add-form' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} submitText="Создать">
          <input name="name" className="popup__inputs" id="popup__card-name" type="text" placeholder="Название"
            required minLength="2" maxLength="30" />
          <span className="popup__error popup__card-name-error"></span>
          <input name="link" type="url" className="popup__inputs" id="popup__card-link" required
            placeholder="Ссылка на картинку" />
          <span className="popup__error popup__card-link-error"></span>
        </PopupWithForm>
        <ImagePopup isOpen={!!selectedCard} onClose={closeAllPopups} selectedCard={selectedCard} />
        <PopupWithForm name='confirmation' title='Вы уверены?' onClose={closeAllPopups} submitText="Да" />
        <PopupWithForm name='avatar' title='Обновить ававтар' className='avatar-form' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} submitText="Сохранить">
          <input name="avatar" type="url" id="popup__avatar-link" className="popup__inputs" required
            placeholder="Ссылка на картинку" />
          <span className="popup__error popup__avatar-link-error"></span>
        </PopupWithForm>
        <Footer />
      </div>
    </div>
  );
}

export default App;
