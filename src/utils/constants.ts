export const AUTH_TOKEN = 'mobile_auth_token';
export const DEFAULT_PAGE_SIZE = 10;
export const DEFAULT_TYPE = 'all';
export const DISABLE_DEV = process.env.NODE_ENV !== 'production';
export const DAY_FORMAT = 'YYYY-MM-DD';
export const CARD_TYPE = {
  TIME: ['time', '次数卡'],
  DURATION: ['duration', '时长卡'],
};
export const CARD_STATUS = {
  VALID: 'VALID', // 有效
  EXPIRED: 'EXPIRED', // 过期
  DEPLETE: 'DEPLETE', // 耗尽
};
