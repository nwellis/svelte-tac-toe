<script lang="ts">
  import type {Player} from '../models/Player'
  interface Props {
    cells: Player[]
    onClick: (cell: number) => void
  }

  const { cells, onClick }: Props = $props()
</script>

<div class="w-fit grid grid-cols-3 grid-rows-3">
  {#each cells as cell, i}
    <button class="size-24 border border-black" onclick={() => onClick(i)}>
      {cell?.toUpperCase()}
    </button>
  {/each}
</div>