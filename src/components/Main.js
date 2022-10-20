import { useEffect, useState } from "react";
import { api } from "../utils/api";
import editbutton from '../images/editbutton.svg';
import vector2 from '../images/Vector2.svg';
import Card from "./Card";



function Main({ onEditProfile, onAddPlace, onEditAvatar, setSelectedCard }) {

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
                <div className="profile__avatar-wrapper" onClick={onEditAvatar}>
                    <img className="profile__avatar" alt="Аватар" src={userAvatar} />
                </div>
                <div className="profile__info">
                    <div className="profile__row">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__edit-button"><img className="profile__edit-image"
                            alt="Изменить" src={editbutton} onClick={onEditProfile} /></button>
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
        </main>
    )
}

export default Main;