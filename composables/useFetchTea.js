import { useAsyncData } from "#imports";

export const useFetchTea = async (url, options = {}) => {
    const { data, pending, error, refresh } = await useAsyncData(
        url,
        async () => {
            const { data } = await $fetch(url);
            return data
        },
       options
    );
    return {
        data,
        pending,
        error,
        refresh
    };
};
