// http://localhost:8100/index.php/
export const BASE_URL = process.env.BASE_URL

export const ENDPOINT = {
    LOGIN: 'auth/login',
    REGISTER: 'auth/register',
    DEPOSIT: 'deposit/create',
    USER_INFO: 'user/info',
    USER_LIST: 'user/list',
    UPDATE_PROFILE: 'user/update',
    LIST_CAMPAIGN: 'campaign/list',
    VERIFY: 'deposit/verify',
    LIST_DEPOSIT: 'deposit/list',
    REJECT: 'deposit/reject',
    ADMIN_SUMMARY: 'user/summary',
    CREATE_CAMPAIGN: 'campaign/create',
    UPDATE_CAMPAIGN: 'campaign/update',
    UPDATE_REFERRAL: 'user/referral',
    LIST_AFFILIATE: 'user/affiliates',
    LIST_ORDER: 'order/list',
    LIST_OFFER: 'offer/list'
}