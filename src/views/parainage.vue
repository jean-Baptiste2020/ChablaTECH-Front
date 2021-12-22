<template>
  <div>
    <a-row :gutter="24">
      <a-col :span="12" :lg="8" :xl="6" class="mb-24">
        <!-- Salary Card -->
        <a-card :bordered="false" class="widget-2 h-full">
          <a-statistic :value="1000000" prefix="(Chabla)">
            <template #title>
              <div class="icon">
                <img src="/images/chablaM.png" alt="" />
              </div>
              <h5>Solde</h5>
              <h6 style="color: green">1000 FCFA</h6>
            </template>
          </a-statistic>
        </a-card>
        <!-- / Salary Card -->
      </a-col>
      <a-col :span="12" :lg="8" :xl="6" class="mb-24">
        <!-- Paypal Card -->
        <a-card :bordered="false" class="widget-2 h-full">
          <a-statistic :value="1000000" prefix="(Actifs)">
            <template #title>
              <div class="icon">
                <img src="/images/parrain.png" alt="" />
              </div>
              <h5>Filleuls</h5>
              <h6 style="color: blue">10 inscrits</h6>
            </template>
          </a-statistic>
        </a-card>
        <!-- Paypal Card -->
      </a-col>
    </a-row>

    <a-row :gutter="24" type="flex" align="stretch">
      <a-col :span="24" :lg="8" class="mb-24">
        <!-- Active Users Card -->
        <a-card :bordered="false" class="dashboard-bar-chart">
          <img src="/images/free.png" style="heigth: 50%; width: 100%" alt="" />
          <div class="card-title">
            <h6>Nom Produit</h6>
            <p>Prix: <span class="text-success">1 Chabla</span></p>
          </div>
          <a-row class="card-footer" type="flex" justify="center" align="top">
            <a-button style="width: 100%">Acheter</a-button>
          </a-row>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
// Bar chart for "Active Users" card.
import CardBarChart from "../components/Cards/CardBarChart";

// Line chart for "Sales Overview" card.
import CardLineChart from "../components/Cards/CardLineChart";
export default {
  components: {
    CardBarChart,
    CardLineChart,
  },
};
</script>

<style>
::selection {
  background: #1890ff;
}
::selection {
  background: #1890ff;
}
::selection {
  color: #fff;
  background: #1890ff;
}
::selection {
  color: #fff;
  background: #1890ff;
}
élément {
}
.layout-default.layout-pricing .pricing-wrapper {
  margin-top: -300px;
}
.ant-layout,
.ant-layout * {
  box-sizing: border-box;
}
*,
::after,
::before {
  box-sizing: border-box;
}
.layout-default .ant-layout-footer {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  text-align: center;
}
.ant-layout-footer {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
}
.layout-default {
  text-align: left;
}
body {
  font-family: open sans, Helvetica, Arial, sans-serif;
  letter-spacing: -0.3px;
}
body {
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, PingFang SC,
    Hiragino Sans GB, Microsoft YaHei, Helvetica Neue, Helvetica, Arial,
    sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol;
  font-variant: tabular-nums;
  line-height: 1.5;
  font-feature-settings: "tnum";
}
html {
  --antd-wave-shadow-color: $color-primary;
}
html {
  --antd-wave-shadow-color: #1890ff;
}
html {
  font-family: sans-serif;
  line-height: 1.15;
  -webkit-text-size-adjust: 100%;
}
</style>