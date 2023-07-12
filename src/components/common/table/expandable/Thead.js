import React from "react";

const Thead = ({ data, formConfig }) => {
  return (
    <div className="roles__table--head">
      {!!formConfig
        ? Object.keys(formConfig).map((key) => {
            if (formConfig[key].table && formConfig[key].table === false)
              return null;

            return (
              <div className="elem__roles--table" key={key}>
                <p>
                  {formConfig[key].label || key}{" "}
                  <span>
                    <img src="/images/sort.svg" alt="sort" />
                  </span>
                </p>
              </div>
            );
          })
        : data &&
          data[0] &&
          Object.keys(data[0]).map((key) => (
            <div className="elem__roles--table" key={key}>
              <p>
                {key}{" "}
                <span>
                  <img src="/images/sort.svg" alt="sort" />
                </span>
              </p>
            </div>
          ))}
      <div className="elem__roles--table">
        <p>{t("Actions")}</p>
      </div>
    </div>
  );
};
export default Thead;
