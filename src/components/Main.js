import { useEffect, useState } from "react";
import { api } from "../utils/Api";
import ImagePopup from "./ImagePopup";
import PopupWithForm from "./PopupWithForm";
import editbutton from '../images/editbutton.svg';
import vector2 from '../images/Vector2.svg';
import Card from "./Card";



function Main({ onEditProfile, onAddPlace, onEditAvatar, isEditProfilePopupOpen, isAddPlacePopupOpen, isEditAvatarPopupOpen, closeAllPopups, setSelectedCard, selectedCard }) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('#');
    const [userId, setUserId] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getCardsInfo()]).then(([{ name, about, _id, avatar }, data]) => {
            setUserName(name);
            setUserDescription(about);
            setUserAvatar(avatar);
            setUserId(_id);
            setCards(data);
        }).catch((error) => console.log(`Ошибка: ${error}`))
    }, [])

    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-wrapper" onClick={onEditProfile}>
                    <img className="profile__avatar" alt="Аватар" src={userAvatar} />
                </div>
                <div className="profile__info">
                    <div className="profile__row">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__edit-button"><img className="profile__edit-image"
                            alt="Изменить" src={editbutton} onClick={onEditAvatar} /></button>
                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={onAddPlace}><img className="profile__plus" alt="Добавить"
                    src={vector2} /></button>
            </section>
            <section className="cards">
                {cards.map((card) => {
                    const { _id, ...props } = card;
                    return <Card key={_id} {...props} userId={userId} onImageClick={setSelectedCard} />
                })}
            </section>
            <PopupWithForm name='info' title='Редактировать профиль' className='profile-form' isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
                <input name="name" className="popup__inputs" id="popup__name" type="text"
                    minLength="2" maxLength="40" required />
                <span className="popup__error popup__name-error"></span>
                <input name="about" className="popup__inputs" id="popup__job" type="text"
                    required minLength="2" maxLength="200" />
                <span className="popup__error popup__job-error"></span>
                <button className="popup__submit" type="submit">Сохранить</button>
            </PopupWithForm>
            <PopupWithForm name='add-card' title='Новое место' className='add-form' isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}>
                <input name="name" className="popup__inputs" id="popup__card-name" type="text" placeholder="Название"
                    required minLength="2" maxLength="30" />
                <span className="popup__error popup__card-name-error"></span>
                <input name="link" type="url" className="popup__inputs" id="popup__card-link" required
                    placeholder="Ссылка на картинку" />
                <span className="popup__error popup__card-link-error"></span>
                <button className="popup__submit" type="submit" >Создать</button>
            </PopupWithForm>
            <ImagePopup isOpen={!!selectedCard} onClose={closeAllPopups} selectedCard={selectedCard} />
            <PopupWithForm name='confirmation' title='Вы уверены?' onClose={closeAllPopups}>
                <button className="popup__submit" type="submit">Да</button>
            </PopupWithForm>
            <PopupWithForm name='avatar' title='Обновить ававтар' className='avatar-form' isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
                <input name="avatar" type="url" id="popup__avatar-link" className="popup__inputs" required
                    placeholder="Ссылка на картинку" />
                <span className="popup__error popup__avatar-link-error"></span>
                <button className="popup__submit popup__submit-avatar" type="submit">Сохранить</button>
            </PopupWithForm>

        </main>
    )
}

export default Main;