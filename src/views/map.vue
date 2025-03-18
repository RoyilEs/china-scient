<template>
  <div ref="chart" style="width: 100%; height: 600px;"></div>
</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import 'echarts/map/js/china'; // 引入中国地图数据

export default {
  setup() {
    const chart = ref(null);

    onMounted(() => {
      if (chart.value) {
        const myChart = echarts.init(chart.value);

        // 配置项
        const option = {
          title: {
            text: '中国地图',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          visualMap: {
            min: 0,
            max: 1000,
            left: 'left',
            top: 'bottom',
            text: ['高', '低'], // 文本，默认为数值文本
            calculable: true,
            inRange: {
              color: ['#e0ffff', '#006edd'] // 颜色范围
            }
          },
          series: [
            {
              name: '数据名称',
              type: 'map',
              mapType: 'china', // 使用中国地图
              roam: true, // 是否允许缩放和平移
              label: {
                show: true, // 显示省份名称
                fontSize: 10
              },
              data: [
                { name: '北京', value: 1000 },
                { name: '上海', value: 800 },
                { name: '广东', value: 700 },
                { name: '浙江', value: 600 },
                { name: '四川', value: 500 },
                // 其他省份数据...
              ]
            }
          ]
        };

        // 设置配置项
        myChart.setOption(option);

        // 窗口大小变化时调整图表大小
        window.addEventListener('resize', () => {
          myChart.resize();
        });
      }
    });

    return {
      chart
    };
  }
};
</script>