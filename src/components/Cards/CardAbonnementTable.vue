<template>
  <!-- Authors Table Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ padding: 0 }"
  >
    <template #title>
      <a-row type="flex" align="middle">
        <a-col :span="24" :md="12">
          <h5 class="font-semibold m-0">Tableau des Abonnements</h5>
        </a-col>
        <a-col
          :span="24"
          :md="12"
          style="display: flex; align-items: center; justify-content: flex-end"
        >
          <a-radio-group v-model="authorsHeaderBtns" size="small">
            <a-radio-button value="all">TOUT</a-radio-button>
            <a-radio-button value="online">ADMINISTRATEURS</a-radio-button>
          </a-radio-group>
        </a-col>
      </a-row>
    </template>
    <a-table :columns="columns" :data-source="data" :pagination="false">
      <template slot="author" slot-scope="author">
        <div class="table-avatar-info">
          <a-avatar shape="square" :src="author.avatar" />
          <div class="avatar-info">
            <h6>{{ author.name }}</h6>
            <p>{{ author.email }}</p>
          </div>
        </div>
      </template>

      <template slot="func" slot-scope="func">
        <div class="author-info">
          <h6 class="m-0">{{ func.job }}</h6>
          <p class="m-0 font-regular text-muted">{{ func.department }}</p>
        </div>
      </template>

      <template slot="status" slot-scope="status">
        <a-tag
          class="tag-status"
          :class="status ? 'ant-tag-primary' : 'ant-tag-muted'"
        >
          {{ status ? "ONLINE" : "OFFLINE" }}
        </a-tag>
      </template>

      <template slot="editBtn">
        <a-button @click="showModal1" style="color: blue">
          <Icon type="ios-eye" />
        </a-button>
        <a-button @click="showModal2" style="color: green">
          <Icon type="ios-brush" />
        </a-button>
        <a-button @click="showModal3" style="color: red">
          <Icon type="md-trash" />
        </a-button>
        <a-modal v-model="visible1" title="Basic Modal" @ok="handleOk1">
          <p>
            <Upload
              multiple
              type="drag"
              action="//jsonplaceholder.typicode.com/posts/"
            >
              <div style="padding: 20px 0">
                <Icon
                  type="ios-cloud-upload"
                  size="52"
                  style="color: #3399ff"
                ></Icon>
                <p>
                  Cliquez ou faites glisser le cahier de charge ici pour
                  télécharger
                </p>
              </div>
            </Upload>
          </p>
          <p>
            <Upload action="//jsonplaceholder.typicode.com/posts/">
              <Button icon="ios-cloud-upload-outline"
                >Ajouter un logo d'entreprise</Button
              >
            </Upload>
          </p>
          <p>
            <Input
              v-model="value15"
              type="text"
              placeholder="Entrez le nom de l'entreprise"
            />
          </p>
          <p>
            <Input
              v-model="value15"
              type="number"
              placeholder="Entrez le contact de l'entreprise"
            />
          </p>
          <p>
            <Input
              v-model="value15"
              type="number"
              placeholder="Entrez le montant en FCFA"
            />
          </p>
          <p>
            <DatePicker
              type="daterange"
              split-panels
              placeholder="Délai de réalisation du projet"
            ></DatePicker>
          </p>
        </a-modal>

        <a-modal v-model="visible2" title="Basic Modal" @ok="handleOk2">
          <p>
            <Upload
              multiple
              type="drag"
              action="//jsonplaceholder.typicode.com/posts/"
            >
              <div style="padding: 20px 0">
                <Icon
                  type="ios-cloud-upload"
                  size="52"
                  style="color: #3399ff"
                ></Icon>
                <p>
                  Cliquez ou faites glisser le cahier de charge ici pour
                  télécharger
                </p>
              </div>
            </Upload>
          </p>
          <p>
            <Upload action="//jsonplaceholder.typicode.com/posts/">
              <Button icon="ios-cloud-upload-outline"
                >Ajouter un logo d'entreprise</Button
              >
            </Upload>
          </p>
          <p>
            <Input
              v-model="value15"
              type="text"
              placeholder="Entrez le nom de l'entreprise"
            />
          </p>
          <p>
            <Input
              v-model="value15"
              type="number"
              placeholder="Entrez le contact de l'entreprise"
            />
          </p>
          <p>
            <Input
              v-model="value15"
              type="number"
              placeholder="Entrez le montant en FCFA"
            />
          </p>
          <p>
            <DatePicker
              type="daterange"
              split-panels
              placeholder="Délai de réalisation du projet"
            ></DatePicker>
          </p>
        </a-modal>

        <a-modal v-model="visible3" title="Basic Modal" @ok="handleOk3">
          <p>
            <Upload
              multiple
              type="drag"
              action="//jsonplaceholder.typicode.com/posts/"
            >
              <div style="padding: 20px 0">
                <Icon
                  type="ios-cloud-upload"
                  size="52"
                  style="color: #3399ff"
                ></Icon>
                <p>
                  Cliquez ou faites glisser le cahier de charge ici pour
                  télécharger
                </p>
              </div>
            </Upload>
          </p>
          <p>
            <Upload action="//jsonplaceholder.typicode.com/posts/">
              <Button icon="ios-cloud-upload-outline"
                >Ajouter un logo d'entreprise</Button
              >
            </Upload>
          </p>
          <p>
            <Input
              v-model="value15"
              type="text"
              placeholder="Entrez le nom de l'entreprise"
            />
          </p>
          <p>
            <Input
              v-model="value15"
              type="number"
              placeholder="Entrez le contact de l'entreprise"
            />
          </p>
          <p>
            <Input
              v-model="value15"
              type="number"
              placeholder="Entrez le montant en FCFA"
            />
          </p>
          <p>
            <DatePicker
              type="daterange"
              split-panels
              placeholder="Délai de réalisation du projet"
            ></DatePicker>
          </p>
        </a-modal>
      </template>
    </a-table>
  </a-card>
  <!-- / Authors Table Card -->
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => [],
    },
    columns: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      // Active button for the "Authors" table's card header radio button group.
      authorsHeaderBtns: "all",
      visible1: false,
      visible2: false,
      visible3: false,
    };
  },
  methods: {
    ok() {
      this.$Message.info("Clicked ok");
    },
    cancel() {
      this.$Message.info("Clicked cancel");
    },
    showModal1() {
      this.visible1 = true;
    },
    handleOk1(e) {
      console.log(e);
      this.visible1 = false;
    },

    showModal2() {
      this.visible2 = true;
    },
    handleOk2(e) {
      console.log(e);
      this.visible2 = false;
    },

    showModal3() {
      this.visible1 = true;
    },
    handleOk3(e) {
      console.log(e);
      this.visible1 = false;
    },
  },
};
</script>