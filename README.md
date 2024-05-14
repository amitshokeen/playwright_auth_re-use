# playwright_auth_re-use
Playwright authentication re-use

* The inspiration for this code comes from this article: 
  * https://playwright.dev/docs/auth
  * Since each test in playwright is in its own browser context, each test will need to login separately. This will make the code unnecessarily big and the test execution will also slow down.
  * But, tests can load existing authenticated state.
* Essential steps to create this kind of code:
  * Create a `global-setup.ts` file - this will essentially contain the login code.
  * Save the page state using this code in the `global-setup.ts` file: `page.context().storageState({path: './loginAuth.json'})`
  * Now, when you run `$ npx playwright test`, it's going to create a `loginAuth.json file`
  * In order for the tests to start using this json file, you should configure it in the `playwright.config.ts` file with these params: (note the setup in the existing `playwright.config.ts` file)
    * `globalSetup: './global-setup.ts'`
    * `storageState: './loginAuth.json'`
  * You may go a step further and rename the `loginAuth.json` file to `chromeLoginAuth.json` and adjust its position in the `playwright.config.ts` - so that it only works for the chrome browser.
  * Do the likewise for other browsers as needed. You can always create extra `loginAuth.json` files named appropriately.
  * Don't forget to remove the login steps from each test case as they are not needed anymore.

* How to create a test that needs to avoid a logged in context?
  * In the test, clear the cookies like this: `await context.clearCookies()`
  * See the `test-3.spec.ts` file for clarity.
  * An alternate way to achieve the same result would be the following steps:
    * Create a `noAuth.json` file with just `{}`
    * In the test file use this: `test.use({storageState: '../noAuth.json'})`
    * For clarity, note the code in `test-4.spec.ts`

* How to use the codegen to get the auth re-use setup automatically?
  * https://playwright.dev/docs/codegen#preserve-authenticated-state
  * `npx playwright codegen github.com/microsoft/playwright --save-storage=auth.json`