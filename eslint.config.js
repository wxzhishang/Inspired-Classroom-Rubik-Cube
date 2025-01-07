import eslint from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

export default tseslint.config(
  {
    ignores: [
      'node_modules',
      'dist',
      'public',
    ],
  },

  /** js推荐配置 */
  eslint.configs.recommended,
  /** ts推荐配置 */
  ...tseslint.configs.recommended,

  /**
   * javascript 规则
   */
  {
    files: ['**/*.{js,mjs,cjs}'],
    rules: {
      'no-console': 0,
    }
  },

  /**
   * 配置全局变量
   */
  {
    languageOptions: {
      globals: {
        ...globals.browser,

        /** 追加一些其他自定义全局规则 */
        wx: true,
      },
    },
  },

  /**
   * typescript 规则
   */
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
    },
  },

    /**
     * prettier 配置
     * 会合并根目录下的prettier.config.js 文件
     * @see https://prettier.io/docs/en/options
    */
    eslintPluginPrettierRecommended,
)