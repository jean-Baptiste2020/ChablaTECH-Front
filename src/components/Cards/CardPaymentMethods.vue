<template>
  <!-- Payment Methods Card -->
  <a-card
    :bordered="false"
    class="header-solid h-full"
    :bodyStyle="{ paddingTop: 0 }"
  >
    <template #title>
      <a-row type="flex" align="middle">
        <a-col :span="24" :md="12">
          <h6 class="font-semibold m-0">Méthodes de Payement</h6>
        </a-col>
        <a-col
          :span="24"
          :md="12"
          style="display: flex; align-items: center; justify-content: flex-end"
        >
          <a-dropdown>
            <a-menu slot="overlay" @click="handleMenuClick">
              <a-menu-item key="1">
                <a-icon type="money-collect" theme="outlined" />MTN
              </a-menu-item>
              <a-menu-item key="2">
                <a-icon type="money-collect" theme="outlined" />MOOV
              </a-menu-item>
            </a-menu>
            <a-button style="margin-left: 8px" type="primary">
              CHANGER DE NUMERO
            </a-button>
          </a-dropdown>
        </a-col>
      </a-row>
    </template>
    <a-row :gutter="[24, 24]">
      <a-col :span="24" :md="12">
        <a-card class="payment-method-card">
          <img src="images/mtn.png" alt="" />
          <h6 class="card-number">{{ num1 }}</h6>
          <a-input placeholder="NUMERO MTN" v-model="num1" v-if="input1" />
          <a-icon
            type="issues-close"
            theme="outlined"
            v-if="butC1"
            @click="valid1"
          />
          <a-button type="link" @click="mtn" v-if="butO1">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-gray-7"
                d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
              />
              <path
                class="fill-gray-7"
                d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
              />
            </svg>
          </a-button>
        </a-card>
      </a-col>
      <a-col :span="24" :md="12">
        <a-card class="payment-method-card">
          <img src="images/moov.jpg" alt="" />
          <h6 class="card-number">{{ num2 }}</h6>
          <a-input placeholder="NUMERO MOOV" v-model="num2" v-if="input2" />
          <a-icon
            type="issues-close"
            theme="outlined"
            v-if="butC2"
            @click="valid2"
          />
          <a-button type="link" @click="moov" v-if="butO2">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                class="fill-gray-7"
                d="M13.5858 3.58579C14.3668 2.80474 15.6332 2.80474 16.4142 3.58579C17.1953 4.36683 17.1953 5.63316 16.4142 6.41421L15.6213 7.20711L12.7929 4.37868L13.5858 3.58579Z"
              />
              <path
                class="fill-gray-7"
                d="M11.3787 5.79289L3 14.1716V17H5.82842L14.2071 8.62132L11.3787 5.79289Z"
              />
            </svg>
          </a-button>
        </a-card>
      </a-col>
    </a-row>
  </a-card>
  <!-- Payment Methods Card -->
</template>

<script>
export default {
  data() {
    return {
      num1: "",
      num2: "",

      input1: false,
      input2: false,
      butO1: true,
      butO2: true,
      butC1: false,
      butC2: false,
    };
  },

  methods: {
    mtn() {
      this.input1 = true;
      this.input2 = false;
      this.butO1 = false;
      this.butC1 = true;
      this.butO2 = true;
      this.butC2 = false;
    },
    valid1() {
      this.input1 = false;
      this.input2 = false;
      this.butO1 = true;
      this.butC1 = false;
      this.butO2 = true;
      this.butC2 = false;
    },
    valid2() {
      this.input1 = false;
      this.input2 = false;
      this.butO1 = true;
      this.butC1 = false;
      this.butO2 = true;
      this.butC2 = false;
    },
    moov() {
      this.input1 = false;
      this.input2 = true;

      this.butO1 = true;
      this.butC1 = false;
      this.butO2 = false;
      this.butC2 = true;
    },
  },
};
</script>