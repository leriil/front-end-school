export default class Graph {
  constructor(hasDirection) {
    this.hasDirection = hasDirection;
    this.maxVert = 20;
    this.vertexList = [];
    this.adjMat = Array(this.maxVert)
      .fill(0)
      .map(() => Array(this.maxVert).fill(0));
    this.nVert = 0;
    this.sortedArray = [];
  }
  addVertex(vertex) {
    this.vertexList.push(vertex);
    this.nVert++;
  }
  getVertex(index) {
    return this.vertexList[index];
  }
  addEdge(vertex1, vertex2, weight) {
    this.adjMat[this.vertexList.indexOf(vertex1)][
      this.vertexList.indexOf(vertex2)
    ] = weight;
    if (!this.hasDirection) {
      this.adjMat[this.vertexList.indexOf(vertex2)][
        this.vertexList.indexOf(vertex1)
      ] = weight;
    }
  }
  deleteEdge(vertex1, vertex2) {
    this.adjMat[this.vertexList.indexOf(vertex1)][
      this.vertexList.indexOf(vertex2)
    ] = 0;
    if (!this.hasDirection) {
      this.adjMat[this.vertexList.indexOf(vertex2)][
        this.vertexList.indexOf(vertex1)
      ] = 0;
    }
  }
  getEdge(vertex1, vertex2) {
    return this.adjMat[this.vertexList.indexOf(vertex1)][
      this.vertexList.indexOf(vertex2)
    ];
  }
  deleteVertex(vertIndex) {
    if (vertIndex != this.nVert - 1) {
      for (let j = vertIndex; j < this.nVert - 1; j++) {
        this.vertexList[j] = this.vertexList[j + 1];
      }
      for (let row = vertIndex; row < this.nVert - 1; row++) {
        this.moveRowUp(row);
      }
      for (let col = vertIndex; col < this.nVert - 1; col++) {
        this.moveColLeft(col);
      }
    }
    this.nVert--;
  }
  getNeighbours(vertex) {
    let neighbours = new Set();
    let vertexIndex = this.vertexList.indexOf(vertex);
    for (let row = 0; row < this.nVert; row++) {
      if (this.adjMat[row][vertexIndex] > 0) {
        neighbours.add(this.getVertex(row));
      }
      if (row === vertexIndex) {
        for (let col = 0; col < this.nVert; col++) {
          if (this.adjMat[row][col] > 0) {
            neighbours.add(this.getVertex(col));
          }
        }
      }
    }
    return neighbours;
  }
  getAdjMat() {
    let mat = Array(this.nVert)
      .fill(0)
      .map(() => Array(this.nVert));
    for (let row = 0; row < this.nVert; row++) {
      for (let col = 0; col < this.nVert; col++) {
        mat[row][col] = this.adjMat[row][col];
      }
    }
    return mat;
  }
  topo() {
    if (this.hasDirection) {
      let originNVerts = this.nVert;
      let topoAdjMat = [];
      this.adjMat.forEach(array => {
        topoAdjMat.push(array.slice());
      });

      let topovertexList = this.vertexList.slice();
      while (this.nVert > 0) {
        let currentVertex = this.noSuccessors();
        if (currentVertex === -1) {
          throw new Error('The graph has cycles!');
        }
        this.sortedArray.unshift(this.getVertex(currentVertex));
        this.deleteVertex(currentVertex);
      }
      console.log('Topologically sorted array: ');
      this.sortedArray.forEach(element => {
        console.log(element);
      });
      this.nVert = originNVerts;
      this.adjMat = topoAdjMat;
      this.vertexList = topovertexList;
    } else console.log('The graph has no direction!');
  }
  noSuccessors() {
    let isEdge;
    for (let i = 0; i < this.nVert; i++) {
      isEdge = false;
      for (let j = 0; j < this.nVert; j++) {
        if (this.adjMat[i][j] > 0) {
          isEdge = true;
          break;
        }
      }
      if (!isEdge) {
        return i;
      }
    }
    return -1;
  }
  moveRowUp(row) {
    for (let col = 0; col < this.nVert - 1; col++) {
      this.adjMat[row][col] = this.adjMat[row + 1][col];
    }
  }
  moveColLeft(col) {
    for (let row = 0; row < this.nVert - 1; row++) {
      this.adjMat[row][col] = this.adjMat[row][col + 1];
    }
  }
}
