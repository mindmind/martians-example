import { useMutation } from '@tanstack/react-query'

import type { SignInPayload } from 'src/ts/user'

export function useSignIn() {
return useMutation({
    mutationFn: async (data: SignInPayload) => {
      const response = await fetch('/api/auth/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to update password');
      }

      return response.json();
    },
    onSuccess: () => {
      alert('Sign in successful');
    },
  });
} 