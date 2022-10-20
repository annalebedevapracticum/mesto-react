function PopupWithForm({ title, name, children, className, isOpen, onClose, submitText }) {
    return <div className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''}`}>
        <form name={name} className={`popup__container ${className}`} noValidate>
            <button type="button" className="popup__close" onClick={onClose} ></button>
            <h3 className="popup__title">{title}</h3>
            {children}
            <button className="popup__submit" type="submit">{submitText}</button>
        </form>
    </div>
}
export default PopupWithForm