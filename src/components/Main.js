function Main() {
    return (
        <main className="main">
            <section className="profile">
                <div className="profile__avatar-wrapper">
                    <img className="profile__avatar" alt="Аватар" src="#" />
                </div>
                <div className="profile__info">
                    <div className="profile__row">
                        <h1 className="profile__name">Булка любименький</h1>
                        <button type="button" className="profile__edit-button"><img className="profile__edit-image"
                            alt="Изменить" src="<%=require('./images/editbutton.svg')%>" /></button>
                    </div>
                    <p className="profile__description">Самый сладкий</p>
                </div>
                <button type="button" className="profile__add-button"><img className="profile__plus" alt="Добавить"
                    src="<%=require('./images/Vector2.svg')%>" /></button>
            </section>
            <section className="cards">
            </section>
            <div className="popup popup-info">
                <form name="profile__info" className="popup__container profile-form" novalidate>
                    <button type="button" className="popup__close"></button>
                    <h3 className="popup__title">Редактировать профиль</h3>
                    <input name="name" className="popup__inputs" id="popup__name" type="text" value="Жак-Ив Кусто"
                        minlength="2" maxlength="40" required />
                    <span className="popup__error popup__name-error"></span>
                    <input name="about" className="popup__inputs" id="popup__job" type="text" value="Исследователь океана"
                        required minlength="2" maxlength="200" />
                    <span className="popup__error popup__job-error"></span>
                    <button className="popup__submit" type="submit">Сохранить</button>
                </form>
            </div>
            <div className="popup popup-add-card">
                <form name="add-card" className="popup__container add-form" novalidate>
                    <button type="button" className="popup__close"></button>
                    <h3 className="popup__title">Новое место</h3>
                    <input name="name" className="popup__inputs" id="popup__card-name" type="text" placeholder="Название"
                        required minlength="2" maxlength="30" />
                    <span className="popup__error popup__card-name-error"></span>
                    <input name="link" type="url" className="popup__inputs" id="popup__card-link" required
                        placeholder="Ссылка на картинку" />
                    <span className="popup__error popup__card-link-error"></span>
                    <button className="popup__submit" type="submit">Создать</button>
                </form>
            </div>
            <div className="popup popup-image">
                <div className="popup__container-image">
                    <button type="button" className="popup__close"></button>
                    <img className="popup__image" src="#" alt="Просмотр" />
                    <p className="popup__text"></p>
                </div>
            </div>
            <div className="popup popup-confirmation">
                <form name="confirmation__form" className="popup__container" novalidate>
                    <button type="button" className="popup__close"></button>
                    <h3 className="popup__title popup__title-confirmation">Вы уверены?</h3>
                    <button className="popup__submit" type="submit">Да</button>
                </form>
            </div>
            <div className="popup popup-avatar">
                <form name="avatar__form" className="popup__container avatar-form" novalidate>
                    <button type="button" className="popup__close"></button>
                    <h3 className="popup__title">Обновить ававтар</h3>
                    <input name="avatar" type="url" id="popup__avatar-link" className="popup__inputs" required
                        placeholder="Ссылка на картинку" />
                    <span className="popup__error popup__avatar-link-error"></span>
                    <button className="popup__submit popup__submit-avatar" type="submit">Сохранить</button>
                </form>
            </div>
        </main>
    )
}

export default Main;