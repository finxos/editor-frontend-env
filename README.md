# editor-frontend-env
> Env for editorFrontend.


## installation

```shell
npm install -S finxos/editor-frontend-env
```


## usage

```js
import editorEnv from 'editor-frontend-env';

editorEnv('development');
// { ENTRY_POINT: 'https://tu-dev.finxos.com' }

editorEnv('uat.finxos.com');
// { ENTRY_POINT: 'https://uat.finxos.com' }

editorEnv('xyz.finxos.com');
// { ENTRY_POINT: 'https://cloud.finxos.com' }

// Or user customzie for debug:
window.__EDITOR_FRONTEND_ENV__ = { ENTRY_POINT: 'https://api.finxos.com' };
// { ENTRY_POINT: 'https://api.finxos.com' }
```
