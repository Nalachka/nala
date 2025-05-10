    // composables/useUser.js
    import { useState } from '#imports';

    export const useUser = () => {
        const user = useState('user', () => null); //null, если пользователь не залогинен.

        const login = (userData) => {
          user.value = userData; // Сохраняем информацию о пользователе
        };

        const logout = () => {
            user.value = null; // Сбрасываем информацию о пользователе
        }

        return {
            user,
            login,
           logout,
       };
    };
