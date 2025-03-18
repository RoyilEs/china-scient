<template>
  <section id = "china">
    <div ref="chart" style="width: 100%; height: 600px;"></div>
  </section>

</template>

<script>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts';
import chinaMap from 'echarts/map/json/china.json'; // 中国地图数据

export default {
  setup() {
    const chart = ref(null);
    let myChart = null;

    // 初始化中国地图
    const initChinaMap = () => {
      echarts.registerMap('china', chinaMap); // 注册中国地图
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
          text: ['高', '低'],
          calculable: true,
          inRange: {
            color: ['#e0ffff', '#006edd']
          }
        },
        series: [
          {
            name: '数据名称',
            type: 'map',
            map: 'china', // 使用注册的中国地图
            roam: true, // 允许缩放和平移
            label: {
              show: true,
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
      myChart.setOption(option);
    };

    // 跳转到省级地图
    const jumpToProvince = (provinceName) => {
      // 动态加载省级地图数据
      import(`echarts/map/json/province/${provinceName}.json`).then((provinceMap) => {
        echarts.registerMap(provinceName, provinceMap); // 注册省级地图
        const option = {
          title: {
            text: `${provinceName}地图`,
            left: 'center'
          },
          series: [
            {
              name: '数据名称',
              type: 'map',
              map: provinceName, // 使用注册的省级地图
              roam: true,
              label: {
                show: true,
                fontSize: 10
              },
              data: [
                // 省级地图的数据
              ]
            }
          ]
        };
        myChart.setOption(option);
      }).catch((error) => {
        console.error('加载地图失败:', error)
      });
    };

    onMounted(() => {
      if (chart.value) {
        myChart = echarts.init(chart.value);
        initChinaMap();

        // 监听地图点击事件
        myChart.on('click', (params) => {
          const provinceName = params.name;
          switch (provinceName) {
            case '广东':
              jumpToProvince('guangdong'); // 跳转到广东省地图
              break;
            case '北京':
              window.location.href = 'https://www.example.com/beijing'; // 跳转到北京的链接
              break;
              // 其他省份...
            default:
              break;
          }
        });
      }
    });

    return {
      chart
    };
  }
};
</script>