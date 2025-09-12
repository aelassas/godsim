[![build](https://github.com/aelassas/godsim/actions/workflows/build.yml/badge.svg)](https://github.com/aelassas/godsim/actions/workflows/build.yml) [![deploy](https://github.com/aelassas/godsim/actions/workflows/deploy.yml/badge.svg)](https://github.com/aelassas/godsim/actions/workflows/deploy.yml)

# GodSim

GodSim is an interactive simulator that demonstrates classical and modern philosophical arguments for the existence of God using TypeScript and React. Each argument is accompanied by a code simulation, showing the logic behind the proof. The simulator demonstrates logical reasoning, not empirical proof.

## Features

* Simulates 11 different proofs of God's existence:
  1. Ontological Argument
  1. Cosmological Argument
  1. Fine-Tuning Argument
  1. Moral Argument
  1. Design Argument
  1. Beauty / Aesthetics Argument
  1. Reason / Logic Argument
  1. Contingency Argument
  1. Sustainer Argument
  1. Infinite Regress Argument
  1. First Cause Argument
* **Interactive simulations** with adjustable parameters.  
* **Code snippets** displayed with syntax highlighting using `react-syntax-highlighter`.  
* **Built with modern stack**: Vite + React + TypeScript + MUI.  
* **Deploys automatically** to GitHub Pages via CI/CD.

## Live Demo

Check out the live simulator: [GodSim Live](https://godsimulator.github.io/) 

## Installation

Clone the repository:

```bash
git clone https://github.com/aelassas/godsim.git
cd godsim
```

Install dependencies:
```bash
npm ci
```

Run the development server:
```bash
npm run dev
```

Build the project:
```bash
npm run build
```

## How It Works

Each proof simulates a philosophical argument programmatically. For example:

### 1. Ontological Argument
- **Argument:** God, defined as the greatest conceivable being, must exist in reality because existence is a necessary attribute of greatness
- **Simulation:** A `Being` class is used to compare conceptual and actual existence

```typescript
class Being {
  constructor(existsInReality = false) {
    this.existsInReality = existsInReality
  }
}

function simulateOntological() {
  const god = new Being(false)
  const maximalBeing = new Being(true)
  if (maximalBeing.existsInReality && !god.existsInReality) god.existsInReality = true
  return god.existsInReality
}
```

### 2. Cosmological Argument
- **Argument:** Everything that exists has a cause. To avoid infinite regress, there must be a first uncaused cause, which is God.
- **Simulation:** A chain of causes is created

```typescript
class Cause {
  constructor(causedBy = null) {
    this.causedBy = causedBy
  }
}

function findFirstCause(entity) {
  while (entity.causedBy !== null) entity = entity.causedBy
  return entity
}

function simulateCosmological(depth = 3) {
  if (depth < 1) depth = 1
  let universe = new Cause(null)
  for (let i = 1; i < depth; i++) {
    universe = new Cause(universe)
  }
  const firstCause = findFirstCause(universe)
  return firstCause !== null
}
```

### 3. Fine-Tuning Argument
- **Argument:** The physical constants of the universe are extremely unlikely to allow life by chance alone, suggesting a designer
- **Simulation:** Randomly simulate universes to see if one “supports life”

```typescript
function universeExists(probability = 1e-4) {
  return Math.random() < probability
}

function simulateFineTuning(count = 100000) {
  const results = Array.from({ length: count }, () => universeExists())
  return results.includes(true)
}
```

### 4. Moral Argument
- **Argument:** Objective moral values exist and require a moral lawgiver, identified as God.
- **Simulation:** A simple Being class models knowledge of good and evil

```typescript
function simulateMoral() {
  class Being {
    knowsGood = true
    knowsEvil = true
  }
  const creature = new Being()
  return creature.knowsGood && creature.knowsEvil
}
```

### 5. Design Argument
- **Argument:** Observing order, complexity, and purpose in nature suggests the existence of an intelligent designer.
- **Simulation:** Random patterns are generated to represent natural design

```typescript
function simulateDesign() {
  const patterns = Array.from({ length: 10 }, () => Math.random())
  const sum = patterns.reduce((a, b) => a + b, 0)
  return sum > 0
}
```

### 6. Beauty / Aesthetics Argument
- **Argument:** The existence of beauty and order in the universe points toward a transcendent source.
- **Simulation:** Random patterns are scored for beauty

```typescript
function simulateBeauty() {
  const patterns = Array.from({ length: 5 }, () => Math.random())
  const beautyScore = patterns.reduce((a, b) => a + b, 0)
  return beautyScore > 0
}
```

### 7. Reason / Logic Argument
- **Argument:** Humans can reason and the universe is logically intelligible, suggesting a rational foundation (God).
- **Simulation:** Reasoning is assumed always possible

```typescript
function simulateReason() {
  return true
}
```

### 8. Contingency Argument
- **Argument:** Everything contingent depends on a necessary being for its existence.
- **Simulation:** Check all contingent things exist

```typescript
function simulateContingency() {
  const contingentThings = Array(10).fill(true)
  return contingentThings.every(Boolean)
}
```

### 9. Sustainer Argument
- **Argument:** Contingent things exist because they are sustained. God is the necessary, self-sustaining being.
- **Simulation:** Model contingent things and God sustaining them

```typescript
function simulateSustainer() {
  const contingentThings = ['Earth', 'Sun', 'Stars', 'Creatures']
  const allSustained = contingentThings.every(() => true)
  const godExists = true
  const godSelfSustaining = true
  return allSustained && godExists && godSelfSustaining
}
```

### 10. Infinite Regress Argument
- **Argument:** Infinite regress of causes is impossible; a first uncaused cause must exist.
- **Simulation:** Build a chain of entities, return false to indicate impossibility

```typescript
function simulateInfiniteRegress(chainDepth = 1000) {
  class Entity {
    causedBy = null
    constructor(causedBy = null) {
      this.causedBy = causedBy
    }
  }
  let current = null
  for (let i = 0; i < chainDepth; i++) {
    current = new Entity(current)
  }
  return false
}
```

### 11. First Cause Argument
- **Argument:** Every effect has causes. Infinite regress is impossible, so a first uncaused cause exists (God).
- **Simulation:** Build a tree of causes, check for cycles

```typescript
function simulateFirstCause(chainDepth = 10, branches = 3) {
  class Entity {
    causedBy = []
    constructor(parents = []) {
      this.causedBy = parents
    }
  }
  function buildTree(depth, branchFactor, parentEntities = []) {
    if (depth <= 0) return []
    const entities = []
    for (let i = 0; i < branchFactor; i++) {
      const newEntity = new Entity(parentEntities)
      entities.push(newEntity)
      entities.push(...buildTree(depth - 1, branchFactor, [newEntity]))
    }
    return entities
  }
  const universe = buildTree(chainDepth, branches)
  const visited = new Set()
  function hasCycle(entity) {
    if (visited.has(entity)) return true
    visited.add(entity)
    for (const parent of entity.causedBy) {
      if (hasCycle(parent)) return true
    }
    visited.delete(entity)
    return false
  }
  const infiniteRegress = universe.some(e => hasCycle(e))
  const firstCauseExists = !infiniteRegress && universe.length > 0
  return firstCauseExists
}
```

## Tech Stack

* Frontend: React, TypeScript, MUI, Vite
* Code Highlighting: react-syntax-highlighter
* CI/CD: GitHub Actions (build + deploy to GitHub Pages)

## Contributing

* Fork the repo.
* Create a branch for your feature/fix.
* Submit a pull request with clear description and tests if applicable.

## License

GodSim is [MIT Licensed](https://github.com/aelassas/godsim/blob/main/LICENSE).
