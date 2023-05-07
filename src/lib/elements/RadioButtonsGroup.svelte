<!-- Inspired by https://www.skeleton.dev/components/radio-groups -->
<script lang="ts">
	import { createEventDispatcher } from "svelte";

	/**
	 * The content of each toggle. Likely a string or an icon.
	 */
	export let values: unknown[] = [];
	/**
	 * The index of the default toggle. Defaults to 0, set to 0 if the value is out of bounds of `values`.
	 */
	export let defaultIndex = 0;
	let currentIndex: number = defaultIndex < values.length && defaultIndex >= 0 ? defaultIndex : 0;
	/**
	 * The description of the radio buttons group. Used for accessibility. Mandatory.
	 */
	export let description: string;

	const dispatch = createEventDispatcher();
</script>

<div
	role="radiogroup"
	aria-label={description}
	class="inline-flex p-1 space-x-1 border-[1px] border-gray-400 text-primary shadow-2xl shadow-black rounded-full {$$props.class}"
>
	{#each values as toggle, index}
		<button
			class="text-center px-4 py-1 rounded-full"
			class:bg-slate-500={index === currentIndex}
			class:hover:bg-slate-600={index === currentIndex}
			class:hover:bg-slate-800={index !== currentIndex}
			on:click={() => {
				if (index === currentIndex) return;
				currentIndex = index;
				dispatch("change", { index });
			}}
		>
			{toggle}
		</button>
	{/each}
</div>