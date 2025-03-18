<script setup>
import { ref, onMounted } from 'vue';
import WelcomeItem from "@/components/WelcomeItem.vue";
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import TheWelcome from "@/components/theWelcome.vue";

const dataItems = [
  {
    name: '丁真珍珠（汉语名：丁真）',
    description: '藏族，四川文化旅游宣传推广大使、中国内地男歌手，生活在四川省甘孜藏族自治州理塘县。2021年7月20日，由丁真发起的中国扶贫基金会小马第一爱心基金成立，首笔善款将用于为理塘的山地播种树木；10月15日，参加《抖音美好奇妙夜》。2021年12月5日丁真被评选为2021年度微博最具文化传播力红人和2021年度微博新锐红人；微博2021最具人气颜值红人。',
    image: 'src/assets/ding.png'
  },
  {
    name: '谷爱凌（Gu Ailing Eileen）',
    description: ' 2003年9月3日出生于美国加利福尼亚州圣弗朗西斯科，昵称“青蛙公主”，中国女子自由式滑雪运动员。<br />\n' +
        '            2022年2月8日，谷爱凌夺得2022年北京冬奥会自由式滑雪女子大跳台金牌。2月15日，获得2022年北京冬季奥运会女子自由式滑雪坡面障碍技巧银牌。2月18日，获得北京冬奥会自由式滑雪女子U型场地技巧金牌。',
    image: "src/assets/gu.png"
  },
];

const selectedItem = ref(null);

function selectRandomItem() {
  const randomIndex = Math.floor(Math.random() * dataItems.length);
  selectedItem.value = dataItems[randomIndex];
  console.log(selectedItem.value);
}

onMounted(() => {
  selectRandomItem();
});

</script>

<template>
  <div class="container" v-if="selectedItem">
    <div class="card">
      <div class="content">
        <h2>{{ selectedItem.name }}</h2>
        <p>{{ selectedItem.description }}</p>
      </div>
      <div class="image">
        <img :src= 'selectedItem.image' alt="2" />
      </div>
    </div>
  </div>
  <div class="nav-container">
    <the-welcome></the-welcome>
  </div>
</template>

<style scoped>

.container .card {
  position: relative;
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
  width: auto;
  height: 400px;
  min-height: 40rem; /* 设置最小高度以适应内容 */
  margin: 2rem;
  overflow: hidden; /* 确保内容不会溢出容器 */
}

/* 默认状态下图片显示 */
.container .card img {
  position: absolute;
  top: 50%; /* 垂直居中 */
  left: 50%; /* 水平居中 */
  transform: translate(-50%, -50%); /* 使用transform进行精确居中 */
  height: 40rem;
  transition: opacity 0.7s, visibility 0.7s, height 0.7s;
}

/* 悬浮时图片隐藏 */
.container .card:hover img {
  opacity: 0;
  visibility: hidden;
  height: 0; /* 可选：减小图片尺寸以释放空间 */
}

/* 默认状态下内容隐藏 */
.container .card .content {
  opacity: 0;
  visibility: hidden;
  position: relative;
  text-align: center; /* 文字居中 */
  padding: 2rem;
  transition: opacity 0.7s, visibility 0.7s;
}

/* 悬浮时内容显示 */
.container .card:hover .content {
  opacity: 1;
  visibility: visible;
}

.container .card .content h2 {
  color: #171616; /* 考虑到背景颜色，这里改为白色或其他对比色 */
  text-transform: uppercase;
  font-size: 1.5rem;
  line-height: 1em;
}

.container .card .content p {
  color: #171616; /* 同样，考虑到对比度 */
  text-decoration: none;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

.nav-container {
  margin: 0;
  align-items: center;
  height: 500px;
  width: auto; /* 设置导航栏宽度 */
  padding-left: 2rem; /* 给导航栏一些左边距 */
  box-sizing: border-box;
}

/* 导航列表 */
.navigation {
  list-style-type: none;
  padding: 0;
}

.navigation li {
  margin-bottom: 1rem;
  cursor: pointer;
  font-size: 1.2rem;
  transition: color 0.3s ease; /* 添加简单的悬停效果 */
}

.navigation li:hover {
  color: #8B4513; /* 鼠标悬停时改变颜色 */
}

/* 内容区域容器 */
.content-container {
  width: 70%; /* 设置内容区宽度 */
}
</style>