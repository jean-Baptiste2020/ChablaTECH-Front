<template>
  <div>
    <a-card
      :bordered="false"
      class="card-info-2 mb-24 h-full"
      style="z-index: 6"
    >
      <div
        class="col-content h-full"
        style="background-image: url('/images/info-card-p.png')"
      >
        <div class="card-content">
          <h5 style="color: black">Work with the best</h5>
          <p style="color: black">
            Wealth creation is an evolutionarily recent positive-sum game. It is
            all about who take the opportunity first.
          </p>
        </div>
        <div class="card-footer">
          <a-button type="primary"> Fermer </a-button>
        </div>
      </div>
    </a-card>
    <canvas id="Canvas"></canvas>

    <script src="./assets/js/app.js" type="application/javascript"></script>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: true,
    };
  },
  created() {
    this.visible = true;
  },
};
</script>
<style>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
}
</style>