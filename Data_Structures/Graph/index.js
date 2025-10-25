// Graph Traversal Implementation - For Learning Purpose

class Graph {

    constructor() {
        this.adjacencyList = {};
    }

    // Add a vertex (node)

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) {
            this.adjacencyList[vertex] = [];
        }
    }

    // Add an edge (connection between two vertices)

    addEdge(v1, v2) {
        if (!this.adjacencyList[v1]) this.addVertex(v1);
        if (!this.adjacencyList[v2]) this.addVertex(v2);
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    // Remove an edge between two vertices

    removeEdge(v1, v2) {
        if (this.adjacencyList[v1]) {
            this.adjacencyList[v1] = this.adjacencyList[v1].filter(
                vertex => vertex !== v2
            );
        }
        if (this.adjacencyList[v2]) {
            this.adjacencyList[v2] = this.adjacencyList[v2].filter(
                vertex => vertex !== v1
            );
        }
    }

    // Remove a vertex and all edges connected to it

    removeVertex(vertex) {
        if (!this.adjacencyList[vertex]) return;
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }

    // Depth-First Search (Recursive)

    depthFirstSearchRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if (!visited[neighbor]) dfs(neighbor);
            });
        })(start);

        return result;
    }

    // Depth-First Search (Iterative)

    depthFirstSearchIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (stack.length) {
            const currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    stack.push(neighbor);
                }
            });
        }

        return result;
    }

    // Depth-First Search Wrapper

    depthFirstSearch(start) {
        return this.depthFirstSearchRecursive(start);
    }

    // Breadth-First Search (BFS)

    breadthFirstSearch(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        visited[start] = true;

        while (queue.length) {
            const currentVertex = queue.shift();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if (!visited[neighbor]) {
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }

        return result;
    }
}

// Example Graph for Learning

const graph = new Graph();

// Add Vertices

graph.addVertex('S');
graph.addVertex('P');
graph.addVertex('U');
graph.addVertex('X');
graph.addVertex('Q');
graph.addVertex('Y');
graph.addVertex('V');
graph.addVertex('R');
graph.addVertex('W');
graph.addVertex('T');

// Add Edges (Connections)
graph.addEdge('S', 'P');
graph.addEdge('S', 'U');
graph.addEdge('P', 'X');
graph.addEdge('U', 'X');
graph.addEdge('P', 'Q');
graph.addEdge('U', 'V');
graph.addEdge('X', 'Q');
graph.addEdge('X', 'Y');
graph.addEdge('X', 'V');
graph.addEdge('Q', 'R');
graph.addEdge('Y', 'R');
graph.addEdge('Y', 'W');
graph.addEdge('V', 'W');
graph.addEdge('R', 'T');
graph.addEdge('W', 'T');

// DFS (Recursive)

console.log("DFS Recursive:", graph.depthFirstSearch('S'));

// DFS (Iterative)

console.log("DFS Iterative:", graph.depthFirstSearchIterative('S'));

// BFS
console.log("BFS:", graph.breadthFirstSearch('S'));
