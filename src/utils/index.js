const PLACEHOLDERS = {
    TEXT: /\$\$(\w+)\$\$/g,
};
export const textVars = (item, values) =>
    item.replace(PLACEHOLDERS.TEXT, (_, index) => {
        const value = values[index];

        if (value === void 0) {
            return "";
        }

        return value;
    });
export const intl = (item, values) =>
    typeof item === "string" ? textVars(item, values) : "";