<template>
  <!-- Conversations Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0, paddingBottom: '16px' }"
  >
    <template #title>
      <h6 class="font-semibold m-0">Conversations</h6>
    </template>
    <a-list
      class="conversations-list"
      item-layout="horizontal"
      :split="false"
      :data-source="data"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-button slot="actions" type="link" @click="modal1 = true">
          RÉPLIQUE
        </a-button>
        <a-list-item-meta :title="item.title" :description="item.code">
          <a-avatar
            slot="avatar"
            :size="48"
            shape="square"
            :src="item.avatar"
          />
        </a-list-item-meta>
      </a-list-item>
      <Modal
        v-model="modal1"
        title="Common Modal dialog box title"
        @on-ok="ok"
        @on-cancel="cancel"
      >
        <p>Contenu du message reçu</p>
        <p>
          <Input
            v-model="value17"
            type="textarea"
            placeholder="Entrez vore message..."
          />
        </p>
      </Modal>
    </a-list>
  </a-card>
  <!-- / Conversations Card -->
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
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