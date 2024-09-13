import * as SecureStore from 'expo-secure-store';

const SecureStoreStorage = {
    async setItem(key: string, value: string) {
        await SecureStore.setItemAsync(key, value);
    },
    async getItem(key: string) {
        return await SecureStore.getItemAsync(key);
    },
    async removeItem(key: string) {
        await SecureStore.deleteItemAsync(key);
    },
}

export default SecureStoreStorage;