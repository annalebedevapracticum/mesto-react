function PopupWithForm({title, name, children, className, isOpen, onClose}) {
    return <div className={`popup popup-${name} ${isOpen ? 'popup_opened' : ''}`}>
        <form name={name} className={`popup__container ${className}`} novalidate>
            <button type="button" className="popup__close" onClick={onClose} ></button>
            <h3 className="popup__title">{title}</h3>
            {children}
        </form>
    </div>
}
export default PopupWithForm