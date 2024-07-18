/* eslint-disable */
/**
 * Custom interceptors for the project.
 *
 * This project has a section in its package.json:
 *    "pwa-studio": {
 *        "targets": {
 *            "intercept": "./local-intercept.js"
 *        }
 *    }
 *
 * This instructs Buildpack to invoke this file during the intercept phase,
 * as the very last intercept to run.
 *
 * A project can intercept targets from any of its dependencies. In a project
 * with many customizations, this function would tap those targets and add
 * or modify functionality from its dependencies.
 */


function localIntercept(targets) {
    targets.of("@magento/venia-ui").routes.tap((routes) => {
        routes.push({
          name: "FormSubmitRoute",
          pattern: "/formSubmit",
          path: require.resolve("./src/components/customForm/SubmitForm.js"),
        },
        {
          name: "FormListRoute",
          pattern: "/formList",
          path: require.resolve("./src/components/customForm/FormList.js"),
        },
        {
          name: "FormViewRoute",
          pattern: "/view/:id",
          path: require.resolve("./src/components/customForm/SingleForm.js"),
        }
      
      
      );
        return routes;
      });
    
}

module.exports = localIntercept;
