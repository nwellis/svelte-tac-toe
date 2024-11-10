import type { Player } from "./models/Player";
import { randomElement } from "./util/Random";

const ThreeInARow = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
] as const

export class Board {

  static emptyBoard() {
    return Array.from(Array(9))
  }

  static randomPlayer() {
    return randomElement<Player>(["Human", "AI"])
  }

  static randomStartWith = () => {
    return new Board(this.randomPlayer())
  }


  turn = $state<Player>("Human")
  cells = $state<Player[]>(Board.emptyBoard())
  open = $derived.by(() => {
    return this.cells
      .map((p, i) => p ? undefined : i)
      .filter(i => (i ?? -1) >= 0)
  })

  winner = $derived.by<Player | undefined>(() => {
    for (const row of ThreeInARow) {
      if (row.every(i => this.cells[i] === "Human")) {
        return "Human"
      } else if (row.every(i => this.cells[i] === "AI")) {
        return "AI"
      }
    }

    return undefined
  })

  constructor(
    startWith: Player
  ) {
    this.turn = startWith
  }

  play(player: Player, i: number) {
    if (this.winner) return
    if (this.turn !== player) return
    if (!this.open.includes(i)) return

    this.cells[i] = player
    this.turn = this.turn === "Human"
      ? "AI"
      : "Human"
  }

  reset(startWith: Player = Board.randomPlayer()) {
    this.cells = Board.emptyBoard()
    this.turn = startWith
  }
}