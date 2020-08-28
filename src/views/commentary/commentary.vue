<template>
  <div class="commentary-wrapper">
    <div class="ct-carousel">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../assets/commentary/pic1.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/commentary/pic2.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/commentary/pic3.jpg" />
          </div>
          <div class="swiper-slide">
            <img src="../../assets/commentary/pic4.jpg" />
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <div class="ct-roll">
      <roll>
        <!-- <roll-item class="roll-item">
          <img src="../../assets/play/1.jpg" slot="rollImg" />
          <div class="itemC" slot="rollContent">
            <p>Memories</p>
            <p>歌手 Maroon</p>
            <p>播放量 9999</p>
          </div>
          <div class="itemR" slot="rollContent">
            <i></i>
            <i></i>
          </div>
        </roll-item>-->

        <roll-item class="roll-item" v-for="item in this.goods" :key="item.id">
          <!-- <img :src="getImgUrl(item)" slot="rollImg" /> -->
          <img :src="item.backgroundUrl" slot="rollImg" />
          <div class="itemC" slot="rollContent">
            <p>{{item.backgroundUrl}}</p>
            <p>{{ item.name }}</p>
            <p>歌手 {{ item.artists[0].name }}</p>
          </div>
          <div class="itemR" slot="rollContent">
            <i></i>
            <i></i>
          </div>
        </roll-item>
      </roll>
    </div>
  </div>
</template>

<script>
import roll from "../../components/common/roll/roll.vue";
import rollItem from "../../components/common/roll/rollItem.vue";

import { getCommentary, getSongDetail, getAlbum } from "network/song";

export default {
  components: {
    roll,
    rollItem,
  },
  data() {
    return {
      goods: [],
      jsonLength: 0,
      imgUrl: "",
      songId: 0,
    };
  },
  created() {
    this.getCommentaryGoods();
  },
  methods: {
    getCommentaryGoods() {
      let _this = this;
      getCommentary()
        .then((res) => {
          _this.goods.push(...res.result.songs);
          // this.jsonLength = res.result.songs.length;
          //console.log(_this.goods);
          for (let i in _this.goods) {
            let item = _this.goods[i];
            //console.log(_this.goods);
            _this.getCommentaryImg(item.album.id , i , _this);
          }
        })
        .catch((err) => {
          console.log(err);
        });

    },
    getCommentaryImg(id , i , _this) {
      //console.log(_this.goods);
      getAlbum(id)
        .then((res) => {
          console.log( res.songs);
          for (let a of res.songs) {
            if (a.id == _this.goods[i].id) {
              // console.log(item.id)
              // console.log(_this.goods[i].id);
              // console.log(_this.goods);
              _this.goods[i].backgroundUrl = a.al.picUrl; //定义属性
              //console.log(_this.goods[i-1].backgroundUrl) //有
            }
          }
          console.log(_this.goods);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getImgUrl(item) {
      // console.log(item.backgroundUrl);
      console.log(this.goods);
      return item.backgroundUrl;
    },
  },
  mounted() {
    var swiper = new Swiper(".swiper-container", {
      pagination: ".swiper-pagination",
      slidesPerView: 1, //设置slider容器能够同时显示的slides数量
      paginationClickable: true, //点击分页器的指示点分页器会控制Swiper切换。
      //spaceBetween: 30,//slide之间的距离（单位px）
      loop: true,
      speed: 2000,
      autoplay: true,
      //用户操作swiper之后，是否禁止autoplay.默认为true：停止。
      autoplayDisableOnInteraction: false,
      //拖动释放时不会输出信息，阻止click冒泡。拖动Swiper时阻止click事件。
      preventLinksPropagation: true,
    });
  },
};
</script>

<style scoped>
.commentary-wrapper {
  background-color: rgb(243, 242, 242);
  position: absolute;
  top: 13%;
  bottom: 10%;
  left: 0;
  right: 0;
}
.ct-carousel {
  height: 35%;
  width: 100%;
  background-color: green;
}
html,
body {
  position: relative;
  height: 100%;
}
.swiper-container {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.swiper-slide {
  text-align: center;
  font-size: 0px;
  background: #fff;
  /* Center slide text vertically */
  display: -webkit-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-align-items: center;
  align-items: center;
}
.swiper-slide img {
  width: 100%;
  height: 100%;
}
.ct-roll {
  height: 65%;
  width: 100%;
}
.roll-item img {
  height: 100%;
}
.itemC {
  float: left;
  width: 75%;
  font-size: 0.5rem;
  color: grey;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  padding: 5% 0 5% 5%;
}
.itemC p {
  line-height: 1rem;
}
.itemC p:first-child {
  font-size: 1rem;
  color: blue;
}
.itemR {
  float: right;
  height: 100%;
  width: 20%;
  position: relative;
}
.itemR i {
  display: block;
  height: 30%;
  width: 100%;
  position: absolute;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
.itemR i:first-child {
  top: 3%;
  background-image: url(../../assets/rollitem/shoucang1.svg);
}
.itemR i:last-child {
  bottom: 2%;
  background-image: url(../../assets/rollitem/xiazai.svg);
}
</style>