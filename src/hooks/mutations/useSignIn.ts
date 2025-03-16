import { useMutation } from '@tanstack/react-query'

import type { SignInPayload } from 'src/ts/user'

const MOCKED_USER = {
    email: 'cool@dude.com',
    password: 'SecretDude123'
}

export function useSignIn() {
return useMutation({
    mutationFn: async (data: SignInPayload) => {
    //   const response = await fetch('/api/auth/sign-in', {
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
            if (data.email === MOCKED_USER.email && data.password === MOCKED_USER.password) {
                resolve({
                    success: true,
                    data: {
                        ...MOCKED_USER
                    }
                })
            } else {
                reject({
                    success: false,
                    message: 'No user found with provided credentials'
                })
            }
        }, 500)
    })
    }
  });
} 