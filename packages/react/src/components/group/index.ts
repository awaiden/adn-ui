import { GroupPrefix } from "./group-prefix";
import { GroupRoot } from "./group-root";
import { GroupSuffix } from "./group-suffix";

export const Group = {
	Prefix: GroupPrefix,
	Root: GroupRoot,
	Suffix: GroupSuffix,
};

export { GroupPrefix, GroupRoot, GroupSuffix };

export { type GroupVariants, groupVariants } from "./group.variants";

export type { GroupPrefixProps } from "./group-prefix";
export type { GroupRootProps } from "./group-root";
export type { GroupSuffixProps } from "./group-suffix";
