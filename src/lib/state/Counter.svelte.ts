// export const counter = $state(0) can't assign

class Counter {
  #value = $state(0)

  get value() {
    return this.#value
  }

  increment(by = 1) {
    this.#value += by
  }
}

export const counter = new Counter()