import { useMutation } from '@tanstack/react-query'

import type { ForgotPayload } from 'src/ts/user'

export const useResetPassword = () => 
useMutation({
    mutationFn: async (data: ForgotPayload) => {
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
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                success: true,
                data: {
                    ...data
                }
            })
        }, 500)
    })
    }
});
