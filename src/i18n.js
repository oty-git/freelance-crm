import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import axios from "axios";

require("dotenv").config();
// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
// const resources = {
//     en: {
//         translation: {
//             "Welcome to React": "Welcome to React and react-i18next"
//         }
//     },
//     fr: {
//         translation: {
//             "Welcome to React": "Bienvenue à React et react-i18next"
//         }
//     }
// };

const backendOptions = {
  // path where resources get loaded from, or a function
  // returning a path:
  // function(lngs, namespaces) { return customPath; }
  // the returned path will interpolate lng, ns if provided like giving a static path
  // the function might return a promise
  //
  // If allowMultiLoading is false, lngs and namespaces will have only one element each,
  // If allowMultiLoading is true, lngs and namespaces can have multiple elements
  loadPath: `${process.env.REACT_APP_URL}/locales/{{lng}}/{{ns}}.json`,

  // path to post missing resources, or a function
  // function(lng, namespace) { return customPath; }
  // the returned path will interpolate lng, ns if provided like giving a static path
  // addPath: '/locales/add/{{lng}}/{{ns}}',

  // your backend server supports multiloading
  // /locales/resources.json?lng=de+en&ns=ns1+ns2
  // Adapter is needed to enable MultiLoading https://github.com/i18next/i18next-multiload-backend-adapter
  // Returned JSON structure in this case is
  // {
  //  lang : {
  //   namespaceA: {},
  //   namespaceB: {},
  //   ...etc
  //  }
  // }
  // allowMultiLoading: true, // set loadPath: '/locales/resources.json?lng={{lng}}&ns={{ns}}' to adapt to multiLoading
  // loadPath: '/locales/resources.json?lng={{lng}}&ns={{ns}}',
  // parse data after it has been fetched
  // in example use https://www.npmjs.com/package/json5
  // here it removes the letter a from the json (bad idea)
  // parse: function(data) { return data.replace(/a/g, ''); },

  //parse data before it has been sent by addPath
  // parsePayload: function(namespace, key, fallbackValue) { return { key } },

  // allow cross domain requests
  crossDomain: false,

  // allow credentials on cross domain requests
  withCredentials: false,

  // overrideMimeType sets request.overrideMimeType("application/json")
  overrideMimeType: false,

  requestOptions: {
    // used for fetch, can also be a function (payload) => ({ method: 'GET' })
    mode: "cors",
    credentials: "same-origin",
    cache: "default",
  },

  // define a custom request function
  // can be used to support XDomainRequest in IE 8 and 9
  //
  // 'options' will be this entire options object
  // 'url' will be passed the value of 'loadPath'
  // 'payload' will be a key:value object used when saving missing translations
  // 'callback' is a function that takes two parameters, 'err' and 'res'.
  //            'err' should be an error
  //            'res' should be an object with a 'status' property and a 'data' property containing a stringified object instance beeing the key:value translation pairs for the
  //            requested language and namespace, or null in case of an error.
  // request: function (options, url, payload, callback) {},

  // adds parameters to resource URL. 'example.com' -> 'example.com?v=1.3.5'
  // queryStringParams: { v: '1.3.5' },

  reloadInterval: false, // can be used to reload resources in a specific interval (useful in server environments)
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .use(Backend)
  .use(LanguageDetector)
  .init(
    {
      // resources,
      // lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
      fallbackLng: "en",
      defaultLng: "en",
      // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
      // if you're using a language detector, do not define the lng option
      debug: false,

      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      backend: backendOptions,
      detection: {
        order: [
          "querystring",
          "cookie",
          "localStorage",
          "sessionStorage",
          "htmlTag",
          "path",
          "subdomain",
        ],
      },
      defaultNS: "translation",
      ns: "translation",
      fallbackNS: "translation",
      react: {
        wait: true,
        useSuspense: true,
      },
      saveMissing: false,
      nsSeparator: false,
      keySeparator: false,
    },
    (err, t) => {
      if (err) return console.log("something went wrong loading", err);

      axios.defaults.headers.common["Accept-Language"] = i18n.language;
    },
  );

export default i18n;
