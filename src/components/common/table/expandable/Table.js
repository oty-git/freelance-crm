import React, { useEffect, useState } from "react";
import Thead from "./Thead";
import Tbody from "./Tbody";

const ExpandableTable = ({ api, formConfig }) => {
  const [data, setData] = useState([]);

  const getData = () => {
    api.getAll().then((res) => {
      setData(res);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="permissions-page__catalog">
      <div className="catalog">
        <div className="permissions__catalog">
          <div className="catalog__right roles__right">
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
            <div className="new__button">
              <a href="#">
                <span>
                  <img src="/images/plus.svg" alt="plus" />
                </span>{" "}
                {t("New")}
              </a>
            </div>
            <div className="export__button">
              <a href="#">
                <span>
                  <img src="/images/downloadicon.svg" alt="download" />
                </span>{" "}
                {t("Export")}
              </a>
            </div>
          </div>
        </div>
        <div className="catalog__box">
          <div
            className="catalog__filters js-catalog-filters"
            data-content-toggle-content="filters"
          >
            <div className="catalog__filters-wrap">
              <div className="row">
                <div className="col-12 col-xs-6 col-lg-4 col-xl col-xxl-2 offset-0 offset-xxl-1 mb-40">
                  <div className="column-group column-group--sm">
                    <div className="column-group__item">
                      <h5>{t("Acc type:")}</h5>
                    </div>
                    <div className="column-group__item">
                      <label className="checkbox">
                        <div className="checkbox__box">
                          <input
                            className="checkbox__input"
                            type="checkbox"
                            checked
                          />
                          <span className="checkbox__checkmark"></span>
                        </div>
                        <span className="checkbox__name">{t("Freelance")}</span>
                      </label>
                    </div>
                    <div className="column-group__item">
                      <label className="checkbox">
                        <div className="checkbox__box">
                          <input
                            className="checkbox__input"
                            type="checkbox"
                            checked
                          />
                          <span className="checkbox__checkmark"></span>
                        </div>
                        <span className="checkbox__name">{t("Full time")}</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xs-6 col-lg-4 col-xl col-xxl-2 mb-40">
                  <div className="column-group column-group--sm">
                    <div className="column-group__item">
                      <h5>{t("By permissions:")}</h5>
                    </div>
                    <div className="column-group__item">
                      <label className="checkbox">
                        <div className="checkbox__box">
                          <input
                            className="checkbox__input"
                            type="checkbox"
                            checked
                          />
                          <span className="checkbox__checkmark"></span>
                        </div>
                        <span className="checkbox__name">{t("Freelance")}</span>
                      </label>
                    </div>
                    <div className="column-group__item">
                      <label className="checkbox">
                        <div className="checkbox__box">
                          <input
                            className="checkbox__input"
                            type="checkbox"
                            checked
                          />
                          <span className="checkbox__checkmark"></span>
                        </div>
                        <span className="checkbox__name">{t("Full time")}</span>
                      </label>
                    </div>
                    <div className="column-group__item">
                      <label className="checkbox">
                        <div className="checkbox__box">
                          <input
                            className="checkbox__input"
                            type="checkbox"
                            checked
                          />
                          <span className="checkbox__checkmark"></span>
                        </div>
                        <span className="checkbox__name">{t("Admin")}</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xs-6 col-lg-4 col-xl col-xxl-2 mb-40">
                  <div className="column-group column-group--sm">
                    <div className="column-group__item">
                      <h5>{t("By services:")}</h5>
                    </div>
                    <div className="column-group__item">
                      <label className="checkbox">
                        <div className="checkbox__box">
                          <input
                            className="checkbox__input"
                            type="checkbox"
                            checked
                          />
                          <span className="checkbox__checkmark"></span>
                        </div>
                        <span className="checkbox__name">
                          {t("Traansaltion")}
                        </span>
                      </label>
                    </div>
                    <div className="column-group__item">
                      <label className="checkbox">
                        <div className="checkbox__box">
                          <input
                            className="checkbox__input"
                            type="checkbox"
                            checked
                          />
                          <span className="checkbox__checkmark"></span>
                        </div>
                        <span className="checkbox__name">
                          {t("Transcription")}
                        </span>
                      </label>
                    </div>
                    <div className="column-group__item">
                      <label className="checkbox">
                        <div className="checkbox__box">
                          <input className="checkbox__input" type="checkbox" />
                          <span className="checkbox__checkmark"></span>
                        </div>
                        <span className="checkbox__name">
                          {t("Interpreting")}
                        </span>
                      </label>
                    </div>
                    <div className="column-group__item">
                      <label className="checkbox">
                        <div className="checkbox__box">
                          <input className="checkbox__input" type="checkbox" />
                          <span className="checkbox__checkmark"></span>
                        </div>
                        <span className="checkbox__name">{t("Writing")}</span>
                      </label>
                    </div>
                    <div className="column-group__item">
                      <label className="checkbox">
                        <div className="checkbox__box">
                          <input className="checkbox__input" type="checkbox" />
                          <span className="checkbox__checkmark"></span>
                        </div>
                        <span className="checkbox__name">
                          {t("Proofreading")}
                        </span>
                      </label>
                    </div>
                    <div className="column-group__item">
                      <label className="checkbox">
                        <div className="checkbox__box">
                          <input className="checkbox__input" type="checkbox" />
                          <span className="checkbox__checkmark"></span>
                        </div>
                        <span className="checkbox__name">{t("Editting")}</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xs-6 col-lg-4 col-xl col-xxl-2 mb-40">
                  <div className="column-group column-group--sm">
                    <div className="column-group__item">
                      <h5>{t("By status:")}</h5>
                    </div>
                    <div className="column-group__item">
                      <label className="checkbox">
                        <div className="checkbox__box">
                          <input
                            className="checkbox__input"
                            type="checkbox"
                            checked
                          />
                          <span className="checkbox__checkmark"></span>
                        </div>
                        <span className="checkbox__name">
                          {t("Waiting for approval")}
                        </span>
                      </label>
                    </div>
                    <div className="column-group__item">
                      <label className="checkbox">
                        <div className="checkbox__box">
                          <input
                            className="checkbox__input"
                            type="checkbox"
                            checked
                          />
                          <span className="checkbox__checkmark"></span>
                        </div>
                        <span className="checkbox__name">
                          {t("Temporary approved")}
                        </span>
                      </label>
                    </div>
                    <div className="column-group__item">
                      <label className="checkbox">
                        <div className="checkbox__box">
                          <input className="checkbox__input" type="checkbox" />
                          <span className="checkbox__checkmark"></span>
                        </div>
                        <span className="checkbox__name">{t("Suspended")}</span>
                      </label>
                    </div>
                    <div className="column-group__item">
                      <label className="checkbox">
                        <div className="checkbox__box">
                          <input className="checkbox__input" type="checkbox" />
                          <span className="checkbox__checkmark"></span>
                        </div>
                        <span className="checkbox__name">{t("Approved")}</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-lg-4 col-xl col-xxl-2 mb-40">
                  <div className="column-group column-group--sm">
                    <div className="column-group__item">
                      <h5>{t("Language combination:")}</h5>
                    </div>
                    <div className="column-group__item">
                      <div className="form-group">
                        <div className="form-group__header">
                          <p>{t("From")}</p>
                        </div>
                        <div className="select js-select">
                          <button
                            className="select__label js-select-label"
                            data-selected="lt"
                            type="button"
                          >
                            <span>{t("Lithianian")}</span>
                          </button>
                          <div className="select__dropdown js-select-dropdown">
                            <div className="select__search">
                              <input
                                className="input input--border-alto input--sm js-select-search"
                                type="text"
                                placeholder={t("Type something")}
                              />
                            </div>
                            <div
                              className="custom-scroll select__dropdown-scroll"
                              data-select-simplebar
                            >
                              <div className="select__options js-select-options">
                                <div
                                  className="select__option js-select-option"
                                  data-option="lt"
                                >
                                  <span>{t("Lithianian")}</span>
                                </div>
                                <div
                                  className="select__option js-select-option"
                                  data-option="en"
                                >
                                  <span>{t("English")}</span>
                                </div>
                                <div
                                  className="select__option js-select-option"
                                  data-option="fr"
                                >
                                  <span>{t("French")}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <input
                            className="select__input js-select-input"
                            type="hidden"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="column-group__item">
                      <div className="form-group">
                        <div className="form-group__header">
                          <p>{t("To")}</p>
                        </div>
                        <div className="select js-select">
                          <button
                            className="select__label js-select-label"
                            data-selected="lt"
                            type="button"
                          >
                            <span>{t("Lithianian")}</span>
                          </button>
                          <div className="select__dropdown js-select-dropdown">
                            <div className="select__search">
                              <input
                                className="input input--border-alto input--sm js-select-search"
                                type="text"
                                placeholder={t("Type something")}
                              />
                            </div>
                            <div
                              className="custom-scroll select__dropdown-scroll"
                              data-select-simplebar
                            >
                              <div className="select__options js-select-options">
                                <div
                                  className="select__option js-select-option"
                                  data-option="lt"
                                >
                                  <span>{t("Lithianian")}</span>
                                </div>
                                <div
                                  className="select__option js-select-option"
                                  data-option="en"
                                >
                                  <span>{t("English")}</span>
                                </div>
                                <div
                                  className="select__option js-select-option"
                                  data-option="fr"
                                >
                                  <span>{t("French")}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <input
                            className="select__input js-select-input"
                            type="hidden"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-12 col-xxl-11 offset-0 offset-xxl-1">
                  <button
                    className="button button--border-surfie-green catalog__filter-reset"
                    type="button"
                  >
                    {t("Clear filters")}
                  </button>
                  <a
                    href="#"
                    className="close__filter button button--border-surfie-green"
                  >
                    {t("Close")}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="catalog__content">
            <div
              className="catalog__content-item tabs__content js-tabs-content is-active"
              data-content="admin"
            >
              <div className="roles__table">
                <div className="roles__table--inner">
                  <Thead data={data} formConfig={formConfig} />
                  <Tbody data={data} formConfig={formConfig} />
                </div>
              </div>
            </div>
            <div
              className="catalog__content-item tabs__content js-tab-content"
              data-content="projectManager"
            ></div>
            <div
              className="catalog__content-item tabs__content js-tab-content"
              data-content="administrator"
            ></div>
            <div
              className="catalog__content-item tabs__content js-tab-content"
              data-content="salesManager"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpandableTable;
