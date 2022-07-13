import Rollbar from 'rollbar';

export const rollbarConfig: Rollbar.Configuration = {
  accessToken: '',
  // hostSafeList: ['localhost:3000'], // для проверки работоспособности закомментить
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    client: {
      javascript: {
        code_version: '1.0.0',
        source_map_enabled: true,
      },
    },
  },
};

export const rollbar = new Rollbar(rollbarConfig);
