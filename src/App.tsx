import React, { useState } from 'react'
import { Button, Container, Typography, TextField, Box } from '@mui/material'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { coy } from 'react-syntax-highlighter/dist/esm/styles/prism'

import {
  simulateOntological,
  simulateCosmological,
  simulateFineTuning,
  simulateMoral,
  simulateDesign,
  simulateBeauty,
  simulateReason,
  simulateContingency,
  simulateSustainer,
  simulateInfiniteRegress,
  simulateFirstCause,
} from './main'

const App: React.FC = () => {
  const [ontologicalResult, setOntologicalResult] = useState('')
  const [cosmologicalResult, setCosmologicalResult] = useState('')
  const [fineTuningResult, setFineTuningResult] = useState('')
  const [chainDepth, setChainDepth] = useState<number>(10)
  const [simulationCount, setSimulationCount] = useState<number>(100000)
  const [moralResult, setMoralResult] = useState('')
  const [designResult, setDesignResult] = useState('')
  const [beautyResult, setBeautyResult] = useState('')
  const [reasonResult, setReasonResult] = useState('')
  const [contingencyResult, setContingencyResult] = useState('')
  const [sustainerResult, setSustainerResult] = useState('')
  const [infiniteRegressResult, setInfiniteRegressResult] = useState('')
  const [firstCauseResult, setFirstCauseResult] = useState('')

  const ontologicalCode = `class Being {
  constructor(existsInReality = false) {
    this.existsInReality = existsInReality
  }
}

function isGreater(being1, being2) {
  return being1.existsInReality && !being2.existsInReality
}

function simulateOntological() {
  const god = new Being(false)
  const maximalBeing = new Being(true)
  if (isGreater(maximalBeing, god)) god.existsInReality = true
  return god.existsInReality
}`

  const cosmologicalCode = `class Cause {
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
}`

  const fineTuningCode = `function universeExists(probability = 1e-60) {
  return Math.random() < probability
}

function simulateFineTuning(count: number = 100000, probability = 1e-4) {
  const results = Array.from({ length: count }, () => universeExists(probability))
  return results.includes(true)
}`

  const moralCode = `function simulateMoral() {
  class Being {
    knowsGood = true
    knowsEvil = true
  }
  const creature = new Being()
  return creature.knowsGood && creature.knowsEvil
}}`

  const designCode = `function simulateDesign() {
  const patterns = Array.from({ length: 10 }, () => Math.random())
  const sum = patterns.reduce((a, b) => a + b, 0)
  return sum > 0
}`

  const beautyCode = `function simulateBeauty() {
  const patterns = Array.from({ length: 5 }, () => Math.random())
  const beautyScore = patterns.reduce((a, b) => a + b, 0)
  return beautyScore > 0
}`

  const reasonCode = `function simulateReason() {
  return true  // assume reasoning is always possible
}`

  const contingencyCode = `function simulateContingency() {
  const contingentThings = Array(10).fill(true)
  return contingentThings.every(Boolean)
}`

  const sustainerCode = `function simulateSustainer() {
  // List of contingent things in the universe
  const contingentThings = ['Earth', 'Sun', 'Stars', 'Creatures']

  // Each contingent thing needs a sustainer
  const allSustained = contingentThings.every(() => true) // assume God sustains them

  // God exists as the necessary, self-sustaining being
  const godExists = true
  const godSelfSustaining = true

  // Return overall result
  return allSustained && godExists && godSelfSustaining
}`

  const infiniteRegressCode = `function simulateInfiniteRegress(chainDepth: number = 1000) {
  class Entity {
    causedBy: Entity | null
    constructor(causedBy: Entity | null = null) {
      this.causedBy = causedBy
    }
  }

  // Attempt to build a chain of causes
  let current: Entity | null = null
  for (let i = 0; i < chainDepth; i++) {
    current = new Entity(current)
  }

  // Infinite regress is logically impossible
  // Return false to represent impossibility
  return false
}`

  const firstCauseCode = `function simulateFirstCause(chainDepth: number = 10, branches: number = 3) {
  class Entity {
    causedBy: Entity[] = []
    constructor(parents: Entity[] = []) {
      this.causedBy = parents
    }
  }

  // Build a tree of causes
  function buildTree(depth: number, branchFactor: number, parentEntities: Entity[] = []): Entity[] {
    if (depth <= 0) return []
    const entities: Entity[] = []
    for (let i = 0; i < branchFactor; i++) {
      const newEntity = new Entity(parentEntities)
      entities.push(newEntity)
      entities.push(...buildTree(depth - 1, branchFactor, [newEntity]))
    }
    return entities
  }

  const universe = buildTree(chainDepth, branches)

  // Detect cycles (impossible infinite regress)
  const visited = new Set<Entity>()
  function hasCycle(entity: Entity): boolean {
    if (visited.has(entity)) return true
    visited.add(entity)
    for (const parent of entity.causedBy) {
      if (hasCycle(parent)) return true
    }
    visited.delete(entity)
    return false
  }

  // If any entity is part of a cycle, infinite regress detected
  const infiniteRegress = universe.some(e => hasCycle(e))

  // If no infinite regress, first uncaused cause exists
  const firstCauseExists = !infiniteRegress && universe.length > 0
  return firstCauseExists
}`

  return (
    <Container maxWidth="md" sx={{ mt: 6, mb: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>
        GodSim - God Proof Simulator
      </Typography>

      {/* Introduction */}
      <Typography mt={2} mb={2}>
        Have you ever wondered if it's possible to simulate philosophical arguments using code? That's exactly what inspired me to build <a href="https://github.com/aelassas/godsim" target="_blank" rel="noopener noreferrer">GodSim</a> -
        an interactive simulator of classical and modern arguments for the existence of God, all implemented with React and TypeScript. Each argument
        is accompanied by a code simulation, showing the logic behind the proof. Each proof simulates a philosophical argument programmatically.
        The simulator demonstrates logical reasoning, not empirical proof.
      </Typography>
      <Typography mt={1} mb={2}>
        I wanted to create a fun, hands-on way to explore deep philosophical concepts while practicing modern web development techniques.
        GodSim lets you experiment with 11 different proofs, see their results in real-time, and even inspect the underlying JavaScript
        logic behind each argument.
      </Typography>
      <Typography mt={1} mb={4}>
        Whether you're a developer curious about philosophy, or someone interested in computational simulations, GodSim combines reasoning,
        probability, and interactivity in one project.
      </Typography>

      {/* Ontological Argument */}
      <Box sx={{ mb: 6, p: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h5">1. Ontological Argument</Typography>
        <Typography mt={1}>
          The ontological argument states that God, defined as the greatest conceivable being, must exist
          in reality because existence is a necessary attribute of greatness.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => setOntologicalResult(simulateOntological().toString())}
        >
          Simulate
        </Button>
        <Typography mt={2}>Result: {ontologicalResult}</Typography>
        <SyntaxHighlighter language="typescript" style={coy} wrapLongLines>
          {ontologicalCode}
        </SyntaxHighlighter>
      </Box>

      {/* Cosmological Argument */}
      <Box sx={{ mb: 6, p: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h5">2. Cosmological Argument</Typography>
        <Typography mt={1}>
          The cosmological argument posits that everything that exists has a cause. To avoid infinite regress,
          there must be a first uncaused cause, which is identified as God.
        </Typography>
        <TextField
          label="Chain depth"
          type="number"
          value={chainDepth}
          onChange={e => setChainDepth(Number(e.target.value))}
          sx={{ mr: 2, mt: 2 }}
        />
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => setCosmologicalResult(simulateCosmological(chainDepth).toString())}
        >
          Simulate
        </Button>
        <Typography mt={2}>Result: {cosmologicalResult}</Typography>
        <SyntaxHighlighter language="typescript" style={coy} wrapLongLines>
          {cosmologicalCode}
        </SyntaxHighlighter>
      </Box>

      {/* Fine-Tuning Argument */}
      <Box sx={{ mb: 6, p: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h5">3. Fine-Tuning Argument</Typography>
        <Typography mt={1}>
          The fine-tuning argument observes that the physical constants of the universe are extremely unlikely
          to allow life by chance alone. This improbability suggests the existence of a designer.
        </Typography>
        <TextField
          label="Simulation count"
          type="number"
          value={simulationCount}
          onChange={e => setSimulationCount(Number(e.target.value))}
          sx={{ mr: 2, mt: 2 }}
        />
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => setFineTuningResult(simulateFineTuning(simulationCount).toString())}
        >
          Simulate
        </Button>
        <Typography mt={2}>Result: {fineTuningResult}</Typography>
        <SyntaxHighlighter language="typescript" style={coy} wrapLongLines>
          {fineTuningCode}
        </SyntaxHighlighter>
      </Box>

      {/* Moral Argument */}
      <Box sx={{ mb: 6, p: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h5">4. Moral Argument</Typography>
        <Typography mt={1}>
          The moral argument states that objective moral values exist and require a moral lawgiver, identified as God.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => setMoralResult(simulateMoral().toString())}
        >
          Simulate
        </Button>
        <Typography mt={2}>Result: {moralResult}</Typography>
        <SyntaxHighlighter language="typescript" style={coy} wrapLongLines>
          {moralCode}
        </SyntaxHighlighter>
      </Box>

      {/* Teleological / Design Argument */}
      <Box sx={{ mb: 6, p: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h5">5. Design Argument</Typography>
        <Typography mt={1}>
          Observing order, complexity, and purpose in nature suggests the existence of an intelligent designer.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => setDesignResult(simulateDesign().toString())}
        >
          Simulate
        </Button>
        <Typography mt={2}>Result: {designResult}</Typography>
        <SyntaxHighlighter language="typescript" style={coy} wrapLongLines>
          {designCode}
        </SyntaxHighlighter>
      </Box>

      {/* Beauty / Aesthetics */}
      <Box sx={{ mb: 6, p: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h5">6. Beauty / Aesthetics Argument</Typography>
        <Typography mt={1}>
          The existence of beauty and order in the universe points toward a transcendent source.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => setBeautyResult(simulateBeauty().toString())}
        >
          Simulate
        </Button>
        <Typography mt={2}>Result: {beautyResult}</Typography>
        <SyntaxHighlighter language="typescript" style={coy} wrapLongLines>
          {beautyCode}
        </SyntaxHighlighter>
      </Box>

      {/* Reason / Logic */}
      <Box sx={{ mb: 6, p: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h5">7. Reason / Logic Argument</Typography>
        <Typography mt={1}>
          The fact that humans can reason and that the universe is logically intelligible suggests a rational foundation (God).
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => setReasonResult(simulateReason().toString())}
        >
          Simulate
        </Button>
        <Typography mt={2}>Result: {reasonResult}</Typography>
        <SyntaxHighlighter language="typescript" style={coy} wrapLongLines>
          {reasonCode}
        </SyntaxHighlighter>
      </Box>

      {/* Contingency */}
      <Box sx={{ mb: 6, p: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h5">8. Contingency Argument</Typography>
        <Typography mt={1}>
          Everything contingent (could not exist) depends on a necessary being for its existence.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => setContingencyResult(simulateContingency().toString())}
        >
          Simulate
        </Button>
        <Typography mt={2}>Result: {contingencyResult}</Typography>
        <SyntaxHighlighter language="typescript" style={coy} wrapLongLines>
          {contingencyCode}
        </SyntaxHighlighter>
      </Box>

      {/* Sustainer */}
      <Box sx={{ mb: 6, p: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h5">9. Sustainer Argument</Typography>
        <Typography mt={1}>
          Contingent things (creatures, planets, stars, universes) exist because something sustains them.
          Without a sustaining cause, they would cease to exist.
          Since the universe and creatures exist right now, something must be continuously sustaining them.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => setSustainerResult(simulateSustainer().toString())}
        >
          Simulate
        </Button>
        <Typography mt={2}>Result: {sustainerResult}</Typography>
        <SyntaxHighlighter language="typescript" style={coy} wrapLongLines>
          {sustainerCode}
        </SyntaxHighlighter>
      </Box>

      {/* Infinite Regress */}
      <Box sx={{ mb: 6, p: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h5">10. Infinite Regress Argument</Typography>
        <Typography mt={1}>
          Every effect has a cause, and if there were an infinite regress of causes, there would be no first cause and nothing could exist;
          yet we observe that things do exist right now, which means an infinite regress is impossible. Therefore, there must be a first uncaused
          cause that brings all contingent things into existence, a being that is necessary, self-existent, and uncaused—this being is
          God Almighty, the ultimate source and sustainer of everything.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => setInfiniteRegressResult(simulateInfiniteRegress().toString())}
        >
          Simulate
        </Button>
        <Typography mt={2}>Result: {infiniteRegressResult}</Typography>
        <SyntaxHighlighter language="typescript" style={coy} wrapLongLines>
          {infiniteRegressCode}
        </SyntaxHighlighter>
      </Box>

      {/* First Cause */}
      <Box sx={{ mb: 6, p: 3, borderRadius: 2, boxShadow: 3, backgroundColor: '#fff' }}>
        <Typography variant="h5">11. First Cause Argument</Typography>
        <Typography mt={1}>
          Every effect has one or more causes, and if there were an infinite regress or cycles of causes,
          nothing could ultimately exist; yet we observe that things do exist, which makes infinite regress
          logically impossible. Therefore, there must be a first uncaused cause that is self-existent, necessary,
          and independent of anything else—this being is God Almighty, who sustains all contingent things.
          In the simulation, we model each entity as an object that can have multiple causes, forming a
          tree-like structure; the code recursively checks for cycles, which represent impossible infinite regress,
          and if no cycles exist and entities are present, it confirms the existence of a first uncaused cause.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          onClick={() => setFirstCauseResult(simulateFirstCause().toString())}
        >
          Simulate
        </Button>
        <Typography mt={2}>Result: {firstCauseResult}</Typography>
        <SyntaxHighlighter language="typescript" style={coy} wrapLongLines>
          {firstCauseCode}
        </SyntaxHighlighter>
      </Box>

    </Container>
  )
}

export default App
