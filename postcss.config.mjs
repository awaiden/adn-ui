import path from "node:path";

function tailwindAutoReference() {
  return {
    postcssPlugin: "tailwind-auto-reference",
    Once(root, { AtRule }) {
      const file = root.source?.input?.file;
      if (
        file &&
        (file.endsWith("global.css") || file.endsWith("globals.css"))
      ) {
        return;
      }

      let hasApply = false;
      let hasReference = false;

      root.walkAtRules((atRule) => {
        if (atRule.name === "apply") {
          hasApply = true;
        }
        if (
          atRule.name === "reference" ||
          (atRule.name === "import" && atRule.params.includes("tailwindcss"))
        ) {
          hasReference = true;
        }
      });

      if (hasApply && !hasReference) {
        const globalCssPath = path.resolve(process.cwd(), "src/app/global.css");
        const relPath = file
          ? path.relative(path.dirname(file), globalCssPath)
          : "@/app/global.css";
        root.prepend(
          new AtRule({
            name: "reference",
            params: `"${relPath}"`,
          }),
        );
      }
    },
  };
}
tailwindAutoReference.postcss = true;

export default {
  plugins: [tailwindAutoReference(), "@tailwindcss/postcss"],
};
