module.exports = {
  projects: [
    {
      displayName: "browser",
      preset: "@marko/jest/preset/browser",
      testMatch: ["**/__tests__/**/*.js"],
    },
  ],
  // setupFilesAfterEnv: ['jest-setup.js']
};
