<template lang="html">
  <div>
    <div slot="header" class="clearfix">
      <h1 style="line-height: 36px; color: #20A0FF">豆瓣电影排行TOP20</h1>
    </div>
    <el-row>
      <el-col :span="5" v-for="movie in movies" style="margin:20px">
        <el-card class="box-card bookshelf" :body-style="{ padding:'5px' }">
          <img :src="movie.images.large" class="image">
          <div>
            <div class="title">{{movie.title}} ({{movie.year}}) </div>
            <div class="subtitle">原名：{{movie.original_title}}</div>
            <div class="douban-rate">豆瓣评分：{{movie.rating.average}}</div>
          </div>
        </el-card>
      </el-col>
    </el-row>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            movies: [],
            currentDate: new Date()
        }
    },
    mounted() {
        this.$http.jsonp('https://api.douban.com/v2/movie/top250?count=20', {}, {
            headers: {

            },
            emulateJSON: true
        }).then(function(response) {
            // 这里是处理正确的回调

            this.movies = response.data.subjects

        }, function(response) {
            // 这里是处理错误的回调
            console.log(response)
        });
    }
}
</script>

<style lang="css">
  .bookshelf:hover{
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  .title{
    color: #20A0FF;
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .subtitle{
    color: #9e9e9e;
    font-size: 14px;
    line-height: 1.5;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .douban-rate{
    color: #13ce66;
    font-size: 14px;
    line-height: 1.5;
  }

  .image {
    /*margin: 5px auto 5px;*/
    margin: auto;
    display: block;
    height: 300px;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }

  .clearfix:after {
      clear: both
  }
</style>
