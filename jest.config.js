module.exports = {
    roots: ['<rootDir>/tests'],
    testMatch: ['**/*test.(ts|js)'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest'
    },
    moduleNameMapper: {
        '^@/(.*)$': '<rootDir>/src/$1'
    }
}