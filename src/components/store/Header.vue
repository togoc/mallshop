<template>
  <div class="shop">
    <div class="shop_header">
      <div class="shop_header_top">
        <div class="shop_header_top_img">
          <img src="./images/shop.jpg" alt />
        </div>
        <div class="shop_header_name">
          <div class="shop_header_name_item">
            <p>苏宁易购旗舰店</p>
            <div>
              <span>品牌旗舰店</span>
            </div>
          </div>
          <div class="shop_header_name_collection">
            <span>收藏</span>
            <div class="shop_header_name_fans">
              <span>233.2万粉丝</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.shop {
  background-image: url(./images/shop_bg.jpg);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}

.shop_header {
  padding: 0 7px;
  height: 120px;
  display: flex;
  align-items: flex-end;
  font-size: 0.9em;
  background-color: rgba(0, 0, 0, 0.4);
}
.shop_header_top {
  height: 66px;
  display: flex;
  flex-direction: row;
  width: 100%;
}
.shop_header_top_img > img {
  width: 66px;
  flex: 2 1 auto;
  height: 66px;
  display: block;
}
.shop_header_name {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.shop_header_name_item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 7px;
  height: 100%;
  flex: 1 1 auto;
}
.shop_header_name_item p {
  font-size: 1.1em;
  margin: 5px 0;
  color: white;
}
.shop_header_name_item span {
  font-size: 0.8em;
  background-color: #dd2727;
  color: white;
}
.shop_header_name_collection {
  height: 100%;
  display: flex;
  flex: 1 1 auto;
  justify-content: flex-end;
  align-items: center;
}
.shop_header_name_collection > span {
  /* 58 46 */
  width: 55px;
  height: 46px;
  padding: 0 2px;
  background-color: #dd2727;
  line-height: 46px;
  text-align: center;
  color: white;
}
.shop_header_name_fans {
  width: 55px;
  height: 46px;
  padding: 0 2px;
  display: flex;
  color: white;
  justify-content: center;
  align-items: center;
  background-color: #d0021b;
}
.shop_header_name_fans > span {
  text-align: center;
}
</style>