// Priority Queue for Dijkstra — always returns the node with the smallest distance

class PriorityQueue {

    constructor() {
        this.values = [];
    }

    enqueue(val, priority) {
        this.values.push({ val, priority });
        this.sort();
    }

    dequeue() {
        return this.values.shift();
    }

    sort() {
        this.values.sort((a, b) => a.priority - b.priority);
    }

}

// Base Graph class

class Graph {

    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }

    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }

    removeEdge(v1, v2) {
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }

    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
}

// Weighted Graph class inherits Graph

class WeightedGraph extends Graph {
    constructor() {
        super();
    }

    // Overriding addEdge for weighted edges

    addEdge(v1, v2, weight) {
        this.adjacencyList[v1].push({ node: v2, weight });
        this.adjacencyList[v2].push({ node: v1, weight });
    }

    // Dijkstra’s algorithm implementation

    Dijkstra(start, finish) {
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        const path = []; // to return at end
        let smallest;

        // Initial setup

        for (let vertex in this.adjacencyList) {

            if (vertex === start) {
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;

        }

        // As long as there are nodes to visit

        while (nodes.values.length) {

            smallest = nodes.dequeue().val;

            if (smallest === finish) {
                // Done — build path
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                path.push(start);
                return path.reverse();
            }

            if (smallest || distances[smallest] !== Infinity) {

                for (let neighbor of this.adjacencyList[smallest]) {
                    let candidate = distances[smallest] + neighbor.weight;
                    let nextNeighbor = neighbor.node;

                    if (candidate < distances[nextNeighbor]) {

                        // updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        previous[nextNeighbor] = smallest;
                        nodes.enqueue(nextNeighbor, candidate);
                    }

                }

            }

        }

    }

}

// Example usage

var g = new WeightedGraph();

g.addVertex('A');
g.addVertex('Z');
g.addVertex('C');
g.addVertex('D');
g.addVertex('E');
g.addVertex('H');
g.addVertex('Q');
g.addVertex('G');

g.addEdge('A', 'Z', 7);
g.addEdge('A', 'C', 8);
g.addEdge('Z', 'Q', 2);
g.addEdge('C', 'G', 4);
g.addEdge('D', 'Q', 8);
g.addEdge('E', 'H', 1);
g.addEdge('H', 'Q', 3);
g.addEdge('Q', 'C', 6);
g.addEdge('G', 'Q', 9);

console.log("A → E:", g.Dijkstra('A', 'E')); // ["A", "Z", "Q", "H", "E"]
console.log("A → Q:", g.Dijkstra('A', 'Q')); // ["A", "Z", "Q"]
console.log("A → G:", g.Dijkstra('A', 'G')); // ["A", "C", "G"]
console.log("A → D:", g.Dijkstra('A', 'D')); // ["A", "Z", "Q", "D"]
