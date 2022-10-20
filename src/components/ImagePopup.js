function ImagePopup() {
    return (
        <div className="popup popup-image">
            <div className="popup__container-image">
                <button type="button" className="popup__close"></button>
                <img className="popup__image" src="#" alt="Просмотр" />
                <p className="popup__text"></p>
            </div>
        </div>
    )
}

export default ImagePopup;