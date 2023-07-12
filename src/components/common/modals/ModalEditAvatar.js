import Modal from "react-responsive-modal";
import AvatarImageInput from "../../account/settings/tabsBlocks/AvatarImageInput";

const ModalEditAvatar = ({
  modalShow,
  setModalShow,
  user,
  userType,
  src,
  ...props
}) => {
  const styles = {
    width: "100%",
    maxWidth: "700px",
    margin: "10px auto",
    borderRadius: "3px",
    padding: "60px 15px",
    boxShadow: "0px 4px 5px rgb(0 0 0 / 5%)",
  };

  return (
    <Modal
      open={modalShow}
      onClose={(e) => setModalShow(false)}
      center
      showCloseIcon={false}
      focusTrapped={false}
      styles={{ modal: styles }}
      classNames={{
        modal: " edit-avatar-modal js-edit-avatar-modal",
      }}
    >
      <div className="modal__close" data-modal-close="edit-avatar-modal">
        <div className="close" onClick={() => setModalShow(false)}>
          <svg className="svg-icon svg-icon--alto" width="20" height="20">
            <use
              href="/images/svg/svg-sprite/symbol/sprite.svg#close"
              x="0"
              y="0"
            ></use>
          </svg>
        </div>
      </div>
      <div className="edit-avatar-modal__body">
        <AvatarImageInput
          user={user}
          userType={userType}
          src={src}
          setModalShow={setModalShow}
          {...props}
        />
      </div>
    </Modal>
  );
};

export default ModalEditAvatar;
