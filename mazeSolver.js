const CELL = {
  Hallway: 0,
  Wall: 1,
  Visited: 'x',
  Path: '>',
}

const grid = [
  [1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1],
  [1, 0, 0, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0],
  [1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1],
  [0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0],
  [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1],
  [0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 0, 1],
  [1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
  [0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1],
  [1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1],
  [1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0],
  [0, 1, 0, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1],
  [1, 1, 1, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1],
  [1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1],
  [0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1],
  [1, 1, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
  [1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1],
  [1, 0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0],
  [1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 0, 1],
  [0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1],
]

const copyGrid = grid => {
  const newGrid = []

  grid.forEach(subGrid => {
    newGrid.push([...subGrid])
  })

  return newGrid
}

const getBorderSymbols = (grid, symbol) => {
  let positions = []

  grid[0].forEach((pos, index) => (pos === symbol ? positions.push({ y: 0, x: index }) : null))
  grid[grid.length - 1].forEach((pos, index) =>
    pos === symbol ? positions.push({ y: grid.length - 1, x: index }) : null
  )

  for (let i = 0; i <= grid.length - 1; i++) {
    if (grid[i][0] === symbol) {
      positions.push({ y: i, x: 0 })
    }

    if (grid[i][grid[i].length - 1] === symbol) {
      positions.push({ y: i, x: grid[i].length - 1 })
    }
  }

  return positions
}

const drawMap = grid => {
  grid.forEach(grid => {
    console.log(
      `${grid
        .map(key => {
          if (key === CELL.Visited) return `\x1b[33m${CELL.Visited}\x1b[0m`
          if (key === CELL.Hallway) return `\x1b[34m${CELL.Hallway}\x1b[0m`
          if (key === CELL.Wall) return `\x1b[30m${CELL.Wall}\x1b[0m`
          if (key === CELL.Path) return `\x1b[32m${CELL.Path}\x1b[0m`

          return key
        })
        .join(' ')}`
    )
  })
}

const dfs = (x, y, entrance, grid, prevPath) => {
  let currentPath = [...(prevPath || []), { y, x }]

  if (
    x < 0 ||
    y < 0 ||
    x >= grid[0].length ||
    y >= grid.length ||
    grid[y][x] === CELL.Wall || // is a wall
    grid[y][x] === CELL.Visited // visited
  )
    return [false, { y: null, x: null }, currentPath] // Invalid cell

  // Is not an entrance and is an exit cell
  if (!(entrance.y === y && entrance.x === x) && isCellAtExit(x, y, grid)) {
    grid[y][x] = CELL.Visited
    return [true, { y, x }, currentPath] // Exit found
  }

  grid[y][x] = CELL.Visited

  let result = dfs(x + 1, y, entrance, grid, currentPath)
  if (result[0]) return result

  result = dfs(x - 1, y, entrance, grid, currentPath)
  if (result[0]) return result

  result = dfs(x, y + 1, entrance, grid, currentPath)
  if (result[0]) return result

  result = dfs(x, y - 1, entrance, grid, currentPath)
  if (result[0]) return result

  return [false, { x, y }, currentPath]
}

const isCellAtExit = (x, y, grid) => {
  return x === 0 || y === 0 || x === grid[0].length - 1 || y === grid.length - 1
}

const doMaze = grid => {
  const mazeOpenings = getBorderSymbols(grid, CELL.Hallway)

  let foundExit = false
  let exitPath = []

  if (mazeOpenings.length < 2) {
    console.log('Impossible maze. Entrance or exit is missing.')
    return
  }

  mazeOpenings.forEach(opening => {
    if (foundExit) {
      return
    }

    console.log('Trying entrance', opening)

    const res = dfs(opening.x, opening.y, opening, copyGrid(grid))
    foundExit = res[0]

    if (foundExit) {
      exitPath = res[2]

      console.log('FOUND EXIT!')
      console.log('Entrance:', opening, 'Exit:', { x: res[1]['x'], y: res[1]['y'] })
      console.log('Path:', exitPath)
      return
    }
  })

  if (!foundExit) {
    console.log('This maze is impossible.')
  }

  exitPath.forEach(coord => {
    grid[coord.y][coord.x] = CELL.Path
  })

  drawMap(grid)
}

doMaze(grid)
