<template>
  <div class='container'>
    <app-header></app-header>
    <app-middle></app-middle>
    <app-product-grid></app-product-grid>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Middle from "./components/Middle.vue";
import ProductGrid from "./components/Products.vue";
// import Graph from "../src/Graph";
export default {
  created() {
    // let hasDirection = true;
    // let graph = new Graph(hasDirection);
    // let vert1 = "A";
    // let vert2 = "B";
    // let vert3 = "C";
    // let vert4 = "D";
    // let vert5 = "E";
    // graph.addVertex(vert1);
    // graph.addVertex(vert2);
    // graph.addVertex(vert3);
    // graph.addEdge(vert1, vert2, 3);
    // graph.addEdge(vert1, vert3, 2);
    // // console.log(graph);
    // // console.log(graph.getEdge(vert1,vert2));
    // graph.topo();
    // // hasDirection = false;
    // let graph2 = new Graph(hasDirection);
    // graph2.addVertex(vert1);
    // graph2.addVertex(vert2);
    // graph2.addVertex(vert3);
    // graph2.addVertex(vert4);
    // graph2.addVertex(vert5);
    // graph2.addEdge(vert1, vert2, 3);
    // graph2.addEdge(vert1, vert3, 2);
    // graph2.addEdge(vert4, vert1, 4);
    // graph2.addEdge(vert5, vert1, 5);
    // graph2.addEdge(vert4, vert5, 6);
    // console.log(graph);
    // console.log(graph.getEdge(vert1,vert2));
    // graph2.topo();
    // graph2.deleteEdge(vert1, vert3);
    // console.log(graph2.shortestPath(vert4, vert1));
    // console.log(graph2);

    // graph.getNeighbours("C").forEach((element) => {
    //   console.log(element);
    // });
    // graph.getAdjMat().forEach((array) => {
    //   array.forEach((element)=> console.log(element));
    // });
  },
  components: {
    appHeader: Header,
    appMiddle: Middle,
    appProductGrid: ProductGrid,
  },
};
</script>
<style>
.myWidth {
  max-width: 1700px;
}
</style>
