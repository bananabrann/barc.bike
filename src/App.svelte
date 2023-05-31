<script lang="ts">
  import Footer from "./lib/Footer.svelte";
  import bikesSvg from "./assets/bikes.svg";
</script>

<main>

  <img id="bikesSvg" src={bikesSvg} alt="bikes" />


  <section id="more-info">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis doloremque ipsa error voluptas impedit, nihil atque nostrum sunt officiis facilis optio perspiciatis? Aut pariatur debitis odit sapiente tenetur! Reiciendis, molestiae?
    </p>
    
  </section>

  <Footer />

</main>

<style lang="scss">
  // #more-info is nicely padded and with background color of #5aa02c
  #more-info {
    padding: 1rem;
    background-color: #5aa02c;
    color: #fff;
    margin: 0;
  }

  #bikesSvg {
    width: 100%;
    margin-bottom: -20px;
  }



</style>
