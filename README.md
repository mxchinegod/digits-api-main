<p align="center">
<a target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/alloydylan
"><img style="max-width:175px;" src="./digits2.gif">
</a>
<br>
digits-api-main is the authentication, preprocessing, and tertiary API bridge in the Digits service mesh.<br>
</p>
<hr>

## 📝 Code Properties ✨ ![start with why](https://img.shields.io/badge/start%20with-why%3F-brightgreen.svg?style=flat) ![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat) ![HitCount](https://hits.dwyl.com/dylanalloy/digits-ui.svg?style=flat-square) [![License: CC BY-NC 4.0](https://img.shields.io/badge/License-CC_BY--NC_4.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nc/4.0/)

##### The below stack is minimal but also differentiates the main API from the rest of Digits services 

| 📁 Library | ⚙ Purpose | 📎 Version |
| :-- | :-: | --: |
| [NodeJS](https://nodejs.org/en/) | Base | 16.18.0 |
| [express-jwt](https://www.npmjs.com/package/express-jwt) | Authentication Middleware | 7.7.7 |
| [mongoose](https://www.npmjs.com/package/mongoose) | DB Client | 6.7.0 |
| [express](https://www.npmjs.com/package/express) | Session Middleware | 4.18.2 |

##### You will want to know about each of these in depth by the above order.

<br>

## 🎬 Environment ✨

##### `config.js` should be created from `config.example.js`

- `apiHost` is an array with services you can and should add to.
- `Secret` is the secret which is used to encrypt all user sessions into tokens.
- `EXPIRES` is the valid session length, if passed users will need to reauthenticate.
- `dbUrl` is your mongo instance, including protocol and port. You should only need to adjust host in most situations. 

##### The API will crash and behave unexpectedly without a valid mongoose connection.

`npm i` <br> <br>

## 📜 Provided Scripts ✨

##### Digits Pro provides some useful scripts to help you quick start.

##### Scripts provided in `package.json`. It's safe to modify or add additional scripts, but here are the defaults:

### 💡 start

```bash
npm start
```

<br>

## 🏰 Service Mesh API ✨

##### digits-api-main is responsible for a lot, but the API model is simple. 

 - 🔐 Authentication/Sessions [ express/express-jwt ]
     - Authentication occurs RESTfully with jwt tokens. There is a secret
 - 🔌 Interfacing [ http ]
     - All API routing is done through http requests. It's possible sockets play a role one day.
 - 🩺 Monitoring [ http ]
     - This API intrinsically reports to DigitsUI, but it also reports the health of other APIs. This contextualizes `digits-api-main`'s role succintly.
 - 🗄 DB [ mongoose ]
     - All models are highly fluid and will accept most JSON as valid. This is by design as features are evaluated. Field validation will occur at a later date.
 - 🧮 Preprocessing [ node ]
     - While not all data can/should be preprocessed by `digits-api-main`, a lot is. That puts it realistically in the role of a preprocessor. While all nodes technically work with dataframes and such, a lot of the focus in downstream responses ends up being data. 

<br>

## 💎 Goals ✨

##### immediate

- [x] Initialize beautiful README.md
- [x] Describe service API role
- [ ] Add husky pre-commit
- [ ] Create mesh diagram
- [x] Explain preprocessor philosophy
- [ ] Clean up quota logic, make it middleware

##### long-term

- [x] Create Stripe customer API
- [x] Docker images
- [x] Kubernetes deployment

<br>
<p align="center">
<a target="_blank" rel="noreferrer" href="https://www.buymeacoffee.com/alloydylan
"><img style="max-width:175px;" src="https://www.buymeacoffee.com/assets/img/guidelines/download-assets-sm-3.svg"></a>
</a>
</p>
