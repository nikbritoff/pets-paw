import Rollbar from 'rollbar';

export const rollbarConfig: Rollbar.Configuration = {
  accessToken: '05a51ba088104b7e9155044f8e6ab0d2',
  // hostSafeList: ['localhost:3000'], // для проверки работоспособности закомментить
  captureUncaught: true,
  captureUnhandledRejections: true,
  payload: {
    environment: 'production',
    client: {
      javascript: {
        code_version: '1.0.0',
        source_map_enabled: true,
      },
    },
  },
};

export const rollbar = new Rollbar(rollbarConfig);
