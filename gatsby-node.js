exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-draft-wysiwyg|html-to-draftjs/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}