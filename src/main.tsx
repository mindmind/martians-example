// @ts-expect-error: waiting a patch from the fontsource core team:
// https://github.com/fontsource/fontsource/issues/1038
import '@fontsource-variable/jetbrains-mono'
import 'src/styles/variables.scss'
import 'src/styles/main.scss'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { RouterProvider } from '@tanstack/react-router'

import router from 'src/router'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
