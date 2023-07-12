const TableFilterIcon = () => {
  return (
    <div className="catalog__right catalog__right--ml-auto">
      <button
        className="button button--white button__filter"
        type="button"
        data-content-toggle-button="filters"
      >
        <svg
          className="svg-icon svg-icon--surfie-green button__icon"
          width="14"
          height="14"
        >
          <use
            href="/images/svg/svg-sprite/symbol/sprite.svg#filter"
            x="0"
            y="0"
          ></use>
        </svg>
      </button>
    </div>
  );
};

export default TableFilterIcon;
