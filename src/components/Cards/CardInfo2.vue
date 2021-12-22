<template>
  <!-- Information Card 2 -->
  <a-card :bordered="false" class="card-info-2 h-full">
    <div
      class="col-content h-full"
      style="background-image: url('images/info-card-2.jpg')"
    >
      <div class="card-content">
        <h5>Faites vous de l'argent</h5>
        <p>
          Juste après l'achat d'un pack un lien de parrainage vous serez
          attribuer ci-dessous.
        </p>
      </div>
      <div class="card-footer">
        <a-input disabled placeholder="Aucun lien de parrainage" />
      </div>
    </div>
  </a-card>
  <!-- / Information Card 2 -->
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>