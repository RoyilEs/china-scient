<template>
  <div class="container">
    <div ref="chart" style="width: 600px; height: 400px;"></div>
  </div>

</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import 'echarts/map/js/china'; // 引入中国地图数据

export default {
  setup() {
    const chart = ref(null);

    onMounted(() => {
      // 初始化图表
      const myChart = echarts.init(chart.value);

      // 配置项和数据
      const option = {
        title: {
          text: 'ECharts 示例'
        },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [
          {
            name: '销量',
            type: 'bar',
            data: [5, 20, 36, 10, 10, 20]
          }
        ]
      };

      // 使用刚指定的配置项和数据显示图表。
      myChart.setOption(option);
    });

    return {
      chart
    };
  }
};
</script>

<style scoped>
 .container {
   display: grid;
   gap: 30px;
   max-width: 1200px;
   margin: 70px auto;
   padding: 0 20px;
 }
</style>