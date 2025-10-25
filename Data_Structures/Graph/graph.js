// Graph Data Structure Implementation (Undirected)

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

    // Add an edge (connection) between two vertices

    addEdge(vertex1, vertex2) {

        if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
        if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);

        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);

    }

    // Remove an edge between two vertices

    removeEdge(vertex1, vertex2) {

        if (this.adjacencyList[vertex1]) {
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(
                v => v !== vertex2
            );
        }

        if (this.adjacencyList[vertex2]) {
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(
                v => v !== vertex1
            );
        }

    }

    // Remove a vertex and all its connected edges

    removeVertex(vertex) {

        if (!this.adjacencyList[vertex]) return;

        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }

        delete this.adjacencyList[vertex];

    }

}

// Example usage

const graph = new Graph();

// Adding vertices

graph.addVertex('A');
graph.addVertex('B');
graph.addVertex('C');
graph.addVertex('D');
graph.addVertex('E');
graph.addVertex('F');

// Adding edges

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'D');
graph.addEdge('C', 'E');
graph.addEdge('D', 'E');
graph.addEdge('D', 'F');
graph.addEdge('E', 'F');

console.log("Adjacency List:", graph.adjacencyList);

// Remove Edge & Vertex examples

graph.removeEdge('D', 'E');
graph.removeVertex('F');

console.log("After removals:", graph.adjacencyList);
