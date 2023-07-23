module.exports = {
  // env: {
  //   browser: true,
  //   es2021: true,
  //   node: true,
  //   jest: true,
  // },
  // // parser: '@typescript-eslint/parser',
  // // parserOptions: {
  // //   ecmaFeatures: {
  // //     jsx: true,
  // //   },
  // //   ecmaVersion: 12,
  // //   sourceType: 'module',
  // // },
  // extends: [
  //   'react-app',
  //   'react-app/jest',
  //   'eslint:recommended',
  //   'plugin:import/recommended',
  //   // 'plugin:import/typescript',
  // ],
  // plugins: ['import'],
  // // settings: {
  // //   react: {
  // //     version: 'detect',
  // //   },
  // //   'import/resolver': {
  // //     typescript: {
  // //       project: './tsconfig.json',
  // //     },
  // //   },
  // //   'import/parsers': {
  // //     '@typescript-eslint/parser': ['.ts', '.tsx'],
  // //   },
  // //   'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
  // // },
  // rules: {
  //   'sort-imports': [
  //     'error',
  //     {
  //       ignoreCase: false,
  //       ignoreDeclarationSort: false,
  //       ignoreMemberSort: false,
  //       memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
  //       allowSeparatedGroups: false,
  //     },
  //   ],
  // },

  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['import'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
  ],
  settings: {
    react: {
      version: 'detect',
    },
    'import/resolver': {
      typescript: {
        project: './tsconfig.json',
      },
    },
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
      },
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:import/typescript',
      ],
    },
  ],
  rules: {
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        allowSeparatedGroups: false,
      },
    ],
  },
  globals: {
    initialState: true,
    dataLayer: true,
  },
}
