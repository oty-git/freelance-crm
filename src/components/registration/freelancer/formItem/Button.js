const Button = ({ text, handleClick }) => {
  return (
    <button
      className="button button--border-surfie-green"
      type="button"
      onClick={(e) => handleClick(e)}
    >
      <span>{text}</span>
      <svg
        className="svg-icon svg-icon--surfie-green button__icon"
        width="10"
        height="10"
      >
        <use href="/images/svg/svg-sprite/symbol/sprite.svg#plus" x="0" y="0" />
      </svg>
    </button>
  );
};
export default Button;
