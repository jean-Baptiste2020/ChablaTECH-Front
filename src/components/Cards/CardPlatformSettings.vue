<template>
  <!-- Platform Settings Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: 0 }"
  >
    <template #title>
      <h6 class="font-semibold m-0">Paramètres de la plate-forme</h6>
    </template>
    <ul class="list settings-list">
      <li>
        <h6 class="list-header text-sm text-muted">COMPTE</h6>
      </li>
      <li>
        <a-switch v-model="emailForFollows" />
        <span>Envoyez-moi un e-mail lorsque quelqu'un me suit</span>
      </li>
      <li>
        <a-switch v-model="emailForAnswers" />
        <span>Envoyez-moi un e-mail lorsque quelqu'un me répond</span>
      </li>
      <li>
        <a-switch v-model="emailForMentions" />
        <span>Envoyez-moi un e-mail lorsque quelqu'un me mentionne</span>
      </li>
      <li>
        <h6 class="list-header text-sm text-muted m-0">APPLICATION</h6>
      </li>
      <li>
        <a-switch v-model="emailForNewProjects" />
        <span>Nouveaux lancements et projets</span>
      </li>
      <li>
        <a-switch v-model="emailForProductUpdates" />
        <span>Mises à jour mensuelles des produits</span>
      </li>
      <li>
        <a-switch v-model="emailForNewsletter" />
        <span>S'inscrire à la Newsletter</span>
      </li>
    </ul>
  </a-card>
  <!-- / Platform Settings Card -->
</template>

<script>
export default {
  data() {
    return {
      // Binded model property for "Platform Settings" switch button for "Email ... follows me" .
      emailForFollows: true,

      // Binded model property for "Platform Settings" switch button for "Email ... answers me" .
      emailForAnswers: false,

      // Binded model property for "Platform Settings" switch button for "Email ... mentions me" .
      emailForMentions: true,

      // Binded model property for "Platform Settings" switch button for "New launches and projects" .
      emailForNewProjects: true,

      // Binded model property for "Platform Settings" switch button for "Monthly product updates" .
      emailForProductUpdates: false,

      // Binded model property for "Platform Settings" switch button for "Subscribe to newsletter" .
      emailForNewsletter: true,
    };
  },
};
</script>