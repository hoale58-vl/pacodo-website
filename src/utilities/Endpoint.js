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
}