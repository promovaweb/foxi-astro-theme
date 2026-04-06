import eslintPluginAstro from 'eslint-plugin-astro'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  ...tseslint.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
  {
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'astro/no-deprecated-getentrybyslug': 'error',
      'astro/no-set-html-directive': 'warn'
    }
  },
  {
    ignores: ['dist/', '.astro/', 'node_modules/']
  }
)
