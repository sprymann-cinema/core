/** @type {import('prettier').Config} */
export default {
    trailingComma: 'all',
    tabWidth: 2,
    semi: true,
    singleQuote: true,
    printWidth: 80,
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
    importOrderCaseInsensitive: true,
    importOrderParserPlugins: [
        'classProperties',
        'decorators-legacy',
        'typescript',
    ],
    importOrder: ['<THIRD_PARTY_MODULES>', '^@/(.*)$', '^../(.*)', '^./(.*)'],
    plugins: ['@trivago/prettier-plugin-sort-imports'],
}