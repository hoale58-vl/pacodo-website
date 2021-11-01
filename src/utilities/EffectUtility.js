import HttpErrorResponseModel from "./HttpErrorResponseModel";
import HttpUtility from "./HttpUtility";
import { toast } from 'react-toastify';
import userStore from 'stores/user';

export default class EffectUtility {
    static async getToModel(Model, endpoint, params) {
        const response = await HttpUtility.get(endpoint, params);
        return EffectUtility._restModelCreator(Model, response);
    }

    static async postToModel(Model, endpoint, data, headers) {
        const response = await HttpUtility.post(endpoint, data, headers);
        return EffectUtility._restModelCreator(Model, response);
    }

    static async putToModel(Model, endpoint, data, headers) {
        const response = await HttpUtility.put(endpoint, data, headers);
        return EffectUtility._restModelCreator(Model, response);
    }

    static jsonListToModal(Model, data) {
        return data.map(json => new Model(json));
    }

    static _restModelCreator(Model, response) {
        if (response instanceof HttpErrorResponseModel) {
            toast.error(response.raw.data.error);
            if (response.status === 401 || response.status === 403) {
                userStore.getState().logout();
            }
            return { success: false, data: response };
        }

        return {
            success: true, data: new Model(response.data)
        }
    }
}
