<template>
  <!-- Profile Information Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full card-profile-information"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
    :headStyle="{ paddingRight: 0 }"
  >
    <template #title>
      <h6 class="font-semibold m-0">Informations sur le profil</h6>
    </template>
    <a-button type="link" slot="extra" @click="modal1 = true">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          class="fill-muted"
          d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
          fill="#111827"
        />
        <path
          class="fill-muted"
          d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
          fill="#111827"
        />
      </svg>
      <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel"
      >
        <p>Content of dialog</p>
        <p>Content of dialog</p>
        <p>Content of dialog</p>
      </Modal>
    </a-button>

    <p class="text-dark">
      Salut, je suis Alec Thompson, Décisions : Si vous ne pouvez pas décider,
      la réponse est non. Si deux chemins également difficiles, choisissez celui
      plus douloureux à court terme (l'évitement de la douleur crée une illusion
      d'égalité).
    </p>
    <hr class="my-25" />
    <a-descriptions title="Oliver Liam" :column="1">
      <a-descriptions-item label="Full Name">
        Sarah Emily Jacob
      </a-descriptions-item>
      <a-descriptions-item label="Mobile">
        (44) 123 1234 123
      </a-descriptions-item>
      <a-descriptions-item label="Email">
        sarahjacob@mail.com
      </a-descriptions-item>
      <a-descriptions-item label="Location"> USA </a-descriptions-item>
      <a-descriptions-item label="Social">
        <a href="#" class="mx-5 px-5">
          <a-icon type="twitter" style="color: #3ea1ec" />
        </a>
        <a href="#" class="mx-5 px-5">
          <a-icon type="facebook" style="color: #344e86" />
        </a>
        <a href="#" class="mx-5 px-5">
          <a-icon type="instagram" style="color: #e1306c" />
        </a>
      </a-descriptions-item>
    </a-descriptions>
  </a-card>
  <!-- / Profile Information Card -->
</template>

<script>
export default {
  data() {
    return {
      modal1: false,
    };
  },
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
  },
};
</script>