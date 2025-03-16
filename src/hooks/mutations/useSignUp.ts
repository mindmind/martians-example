import { useMutation } from '@tanstack/react-query'

import { MOCKED_USER } from 'src/mocks/user'

import type { SignUpPayload } from 'src/ts/user'

export const useSignUp = () => 
useMutation({
    mutationFn: async (data: SignUpPayload) => {
    //   const response = await fetch('/api/auth/sign-up', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data),
    //   });

    //   if (!response.ok) {
    //     const errorData = await response.json();
    //     throw new Error(errorData.message);
    //   }

    //   return response.json();
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (data.email !== MOCKED_USER.email) {
                resolve({
                    success: true,
                    data: {
                        ...data
                    }
                })
            } else {
                reject({
                    success: false,
                    message: 'User with provided email already exists'
                })
            }
        }, 500)
    })
    }
});
