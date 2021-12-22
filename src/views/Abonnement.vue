<template>
  <a-row :gutter="24" type="flex" align="stretch">
    <a-col :span="24" :lg="8" class="mb-24">
      <!-- Active Users Card -->
      <a-card :bordered="false" class="dashboard-bar-chart">
        <img src="/images/free.png" style="heigth: 25%; width: 100%" alt="" />
        <div class="card-title">
          <h6>Pack Gratuit</h6>
          <p>Durée: <span class="text-success">illimité</span></p>
        </div>
        <div class="card-content">
          <p>
            Cet Pack permet une aide financière aux personnes dans le besoins
            qui aurons à parrainer au moins 18 personnes.
          </p>
        </div>
        <a-row class="card-footer" type="flex" justify="center" align="top">
          <a-button style="width: 100%">Prendre</a-button>
        </a-row>
      </a-card>
    </a-col>
    <a-col :span="24" :lg="8" class="mb-24">
      <!-- Active Users Card -->
      <a-card :bordered="false" class="dashboard-bar-chart">
        <img src="/images/Gold.png" style="heigth: 50%; width: 70%" alt="" />
        <div class="card-title">
          <h6>Pack Or 2$</h6>
          <p>Durée: <span class="text-success">1 an</span></p>
        </div>
        <div class="card-content">
          <p>
            Cet Pack permet une aide financière aux personnes dans le besoins
            qui aurons à parrainer au moins 10 personnes.
          </p>
        </div>
        <a-row class="card-footer" type="flex" justify="center" align="top">
          <a-button style="width: 100%">Prendre</a-button>
        </a-row>
      </a-card>
    </a-col>
    <a-col :span="24" :lg="8" class="mb-24">
      <!-- Active Users Card -->
      <a-card :bordered="false" class="dashboard-bar-chart">
        <img src="/images/diamond.png" style="heigth: 50%; width: 70%" alt="" />
        <div class="card-title">
          <h6>Pack Diamand 3$</h6>
          <p>Durée: <span class="text-success">1 an</span></p>
        </div>
        <div class="card-content">
          <p>
            Cet Pack permet une aide financière aux personnes dans le besoins
            qui aurons à parrainer au moins 6 personnes.
          </p>
        </div>
        <a-row class="card-footer" type="flex" justify="center" align="top">
          <a-button style="width: 100%">Prendre</a-button>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
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