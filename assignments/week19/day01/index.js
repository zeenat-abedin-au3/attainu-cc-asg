class Graph {
    constructor() {
        this.adjList = {}
    }

    addVertex(vertex) {
        if (!this.adjList[vertex]) this.adjList[vertex] = []
    }

    addEdge(v1, v2) {
        this.adjList[v1].push(v2)
        this.adjList[v2].push(v1)
    }

    removeEdge(v1, v2) {
        this.adjList[v1] = this.adjList[v1].filter(v => v !== v2)
        this.adjList[v2] = this.adjList[v2].filter(v => v !== v1)
    }

    removeVertex(vertex) {
        while (this.adjList[vertex].length) {
            const adjacentVertex = this.adjList[vertex].pop()
            this.removeEdge(vertex, adjacentVertex)
        }
        delete this.adjList[vertex]
    }

    depthFirstSearch(start) {
        const result = []
        const visited = {}
        const stack = [start]
        let currentVertex

        visited[start] = true
        while (stack.length) {
            currentVertex = stack.pop()
            result.push(currentVertex)

            this.adjList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    stack.push(neighbor)
                }
            })
        }
        return result
    }

    breadthFirst(start) {
        const queue = [start]
        const result = []
        const visited = {}
        let currentVertex

        while (queue.length) {
            currentVertex = queue.shift()
            result.push(currentVertex)
            visited[currentVertex] = true

            this.adjList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true
                    queue.push(neighbor)
                }
            })
        }

        return result
    }
}

const graph = new Graph()

graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")

graph.addEdge("A", "B")
graph.addEdge("A", "C")
graph.addEdge("B", "D")
graph.addEdge("C", "E")
graph.addEdge("D", "E")

console.log(graph.depthFirstSearch("A"))
console.log(graph.breadthFirst("A")) 
