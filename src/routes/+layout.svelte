<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="container flex flex-col items-center gap-4">
	{@render children()}
</div>
