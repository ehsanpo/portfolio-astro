declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
			components: import('astro').MDXInstance<{}>['components'];
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"portfolio": {
"040-fm/040-fm.md": {
	id: "040-fm/040-fm.md";
  slug: "040-fm/040-fm";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"alex-koll/alex-koll.md": {
	id: "alex-koll/alex-koll.md";
  slug: "alex-koll/alex-koll";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"appleappen/appleappen.md": {
	id: "appleappen/appleappen.md";
  slug: "appleappen/appleappen";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"battretillvaro/battretillvaro-se.md": {
	id: "battretillvaro/battretillvaro-se.md";
  slug: "battretillvaro/battretillvaro-se";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"bilcleaniken/bilcleaniken.md": {
	id: "bilcleaniken/bilcleaniken.md";
  slug: "bilcleaniken/bilcleaniken";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"blockpress/blockpress.md": {
	id: "blockpress/blockpress.md";
  slug: "blockpress/blockpress";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"bra-energi/bra-energi.md": {
	id: "bra-energi/bra-energi.md";
  slug: "bra-energi/bra-energi";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"bredband2/Bredband2.md": {
	id: "bredband2/Bredband2.md";
  slug: "bredband2/bredband2";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"bussemester/bussemester.md": {
	id: "bussemester/bussemester.md";
  slug: "bussemester/bussemester";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"bym/bym.md": {
	id: "bym/bym.md";
  slug: "bym/bym";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"carpings/carpings.md": {
	id: "carpings/carpings.md";
  slug: "carpings/carpings";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"clever/clever.md": {
	id: "clever/clever.md";
  slug: "clever/clever";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"clx-network/clx-network.md": {
	id: "clx-network/clx-network.md";
  slug: "clx-network/clx-network";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"cottex/cottex.md": {
	id: "cottex/cottex.md";
  slug: "cottex/cottex";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"dosgardenias/dosgardenias.md": {
	id: "dosgardenias/dosgardenias.md";
  slug: "dosgardenias/dosgardenias";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"flamman/flamman.md": {
	id: "flamman/flamman.md";
  slug: "flamman/flamman";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"folk-mat-moten/folk-mat-moten.md": {
	id: "folk-mat-moten/folk-mat-moten.md";
  slug: "folk-mat-moten/folk-mat-moten";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"generative-circles/circles.md": {
	id: "generative-circles/circles.md";
  slug: "generative-circles/circles";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"guts-glory/guts-glory.md": {
	id: "guts-glory/guts-glory.md";
  slug: "guts-glory/guts-glory";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"hallbarhetsredovisning/hallbarhetsredovisning.md": {
	id: "hallbarhetsredovisning/hallbarhetsredovisning.md";
  slug: "hallbarhetsredovisning/hallbarhetsredovisning";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"holy-greens/holy-greens.md": {
	id: "holy-greens/holy-greens.md";
  slug: "holy-greens/holy-greens";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"kammarkollegiet/kammarkollegiet.md": {
	id: "kammarkollegiet/kammarkollegiet.md";
  slug: "kammarkollegiet/kammarkollegiet";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"kockenskamrater/kockenskamrater.md": {
	id: "kockenskamrater/kockenskamrater.md";
  slug: "kockenskamrater/kockenskamrater";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"ljusjakten/ljusjakten.md": {
	id: "ljusjakten/ljusjakten.md";
  slug: "ljusjakten/ljusjakten";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"lugi/lugi.md": {
	id: "lugi/lugi.md";
  slug: "lugi/lugi";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"lundaspelen/lundaspelen.md": {
	id: "lundaspelen/lundaspelen.md";
  slug: "lundaspelen/lundaspelen";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"malmo-saluhall/malmo-saluhall.md": {
	id: "malmo-saluhall/malmo-saluhall.md";
  slug: "malmo-saluhall/malmo-saluhall";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"mekonomen-group/mekonomen-group.md": {
	id: "mekonomen-group/mekonomen-group.md";
  slug: "mekonomen-group/mekonomen-group";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"mekonomen/mekonomen.md": {
	id: "mekonomen/mekonomen.md";
  slug: "mekonomen/mekonomen";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"missmary/missmary.md": {
	id: "missmary/missmary.md";
  slug: "missmary/missmary";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"motesplatsip/motesplatsip.md": {
	id: "motesplatsip/motesplatsip.md";
  slug: "motesplatsip/motesplatsip";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"muslimix/muslimix.md": {
	id: "muslimix/muslimix.md";
  slug: "muslimix/muslimix";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"ngd/ngd.md": {
	id: "ngd/ngd.md";
  slug: "ngd/ngd";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"noxo/noxo.md": {
	id: "noxo/noxo.md";
  slug: "noxo/noxo";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"pf-system/pf-system.md": {
	id: "pf-system/pf-system.md";
  slug: "pf-system/pf-system";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"roofit/roofit.md": {
	id: "roofit/roofit.md";
  slug: "roofit/roofit";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"sankt-lars-park/sankt-lars-park.md": {
	id: "sankt-lars-park/sankt-lars-park.md";
  slug: "sankt-lars-park/sankt-lars-park";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"skanskahandboll/skanskahandboll.md": {
	id: "skanskahandboll/skanskahandboll.md";
  slug: "skanskahandboll/skanskahandboll";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"soctanter/soctanter.md": {
	id: "soctanter/soctanter.md";
  slug: "soctanter/soctanter";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"stadshubbsalliansen/stadshubbsalliansen.md": {
	id: "stadshubbsalliansen/stadshubbsalliansen.md";
  slug: "stadshubbsalliansen/stadshubbsalliansen";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"telavox/telavox.md": {
	id: "telavox/telavox.md";
  slug: "telavox/telavox";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"telenor/telenor.md": {
	id: "telenor/telenor.md";
  slug: "telenor/telenor";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"toolpool/toolpool.md": {
	id: "toolpool/toolpool.md";
  slug: "toolpool/toolpool";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"triwa/triwa.md": {
	id: "triwa/triwa.md";
  slug: "triwa/triwa";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"twilfit/twilfit.md": {
	id: "twilfit/twilfit.md";
  slug: "twilfit/twilfit";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"unilever-food-solutions/unilever-food-solutions.md": {
	id: "unilever-food-solutions/unilever-food-solutions.md";
  slug: "unilever-food-solutions/unilever-food-solutions";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"vscode-console-remover/vscode-console-remover.md": {
	id: "vscode-console-remover/vscode-console-remover.md";
  slug: "vscode-console-remover/vscode-console-remover";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"vscode-git-approvers/vscode-git-approvers.md": {
	id: "vscode-git-approvers/vscode-git-approvers.md";
  slug: "vscode-git-approvers/vscode-git-approvers";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"vscode-px-to-tailwind/vscode-px-to-tailwind.md": {
	id: "vscode-px-to-tailwind/vscode-px-to-tailwind.md";
  slug: "vscode-px-to-tailwind/vscode-px-to-tailwind";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"wilfa/Wilfa.md": {
	id: "wilfa/Wilfa.md";
  slug: "wilfa/wilfa";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"zest-hmd/zest-hmd.md": {
	id: "zest-hmd/zest-hmd.md";
  slug: "zest-hmd/zest-hmd";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"zest/zest.md": {
	id: "zest/zest.md";
  slug: "zest/zest";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
"zhowtime/zhowtime.md": {
	id: "zhowtime/zhowtime.md";
  slug: "zhowtime/zhowtime";
  body: string;
  collection: "portfolio";
  data: InferEntrySchema<"portfolio">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
