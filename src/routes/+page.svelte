<script lang="ts">
	import { Board } from "$lib/Board.svelte";
	import Grid from "$lib/components/Grid.svelte";

  const board = new Board('Human')
</script>

<h1>Svelte-Tac-Toe</h1>

<button
  type="button"
  onclick={() => board.reset()}
>
  Reset
</button>

<p>Winner: {board.winner ?? "NONE"}</p>

<Grid 
  cells={board.cells} 
  onClick={i => board.play(board.turn, i)} 
/>