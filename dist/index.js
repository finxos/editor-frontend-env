/*!
 * name: editor-frontend-env
 * url: https://gitlab.finxos.com/tu-editor/editor-frontend-env
 * version: 1.0.0
 * license: MIT
 */

!function(){var e=e||window||self||Function("return this")(),c={development:{ENTRY_POINT:"https://tu-dev.finxos.com"},default:{ENTRY_POINT:"https://cloud.finxos.com"},"uat.finxos.com":{ENTRY_POINT:"https://uat.finxos.com"}};module.exports=function(e){var t,o=window.location.host,n=process.env.NODE_ENV,s=window.__EDITOR_FRONTEND_ENV__;switch(!0){case"object"==typeof s:t=s;break;case"string"==typeof e:t=c[e];break;case"development"===n:case"tu-dev.finxos.com"===o:t=c.development;break;default:t=c[o]}return t||c.default}}();