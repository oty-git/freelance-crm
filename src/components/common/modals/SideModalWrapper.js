import Modal from "react-responsive-modal";

const SideModalWrapper = (props) => {

    return <Modal
        open={props.showModal}
        onClose={e => props.setShowModal(false)}
        showCloseIcon={false}
        styles={{
            overlay: {
                display: 'none'
            },
            modal: {
                maxWidth: 'none',
                margin: 0,
                padding: 0,
                zIndex: 10,
                right: 0
            }
        }}
        classNames={{
            modal: 'modal__wrapper ' + props.modalClass,
            modalAnimationIn: 'customEnterModalAnimation',
            modalAnimationOut: 'customLeaveModalAnimation',
        }}
    >
        {props.children}
    </Modal>;
}

export default SideModalWrapper;