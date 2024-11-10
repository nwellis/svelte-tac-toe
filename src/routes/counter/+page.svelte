<script lang="ts">
	import { counter } from "$lib";
</script>

<h1>Svelte-Tac-Toe Counter</h1>

<button
  type="button"
  onclick={() => counter.increment()}
>
  Count {counter.value}
</button>