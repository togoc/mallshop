<template>
  <div class="home">
    <Header></Header>
    <Container></Container>
    <Footer></Footer>
  </div>
</template>


<script>
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";
import Container from "../components/home/Container";
export default {
  components: {
    Header,
    Footer,
    Container
  }
};
</script>



<style scoped>
.home {
    margin-top: 90px;
}
</style>