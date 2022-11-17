<template>
  <div id="luck185">
      <Icon type="md-home" id="home" @click="goHome()" size='40'/>
      <div id="box">
          <p id="name">{{text}}</p>
          <Button id='start' type="primary" label="large" @click="start()">{{ message }}</Button>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            text: 'Are your ready?',
            message: '开始',
            class_name:["陈锘羽","陈思皓","陈雨蝶","董浩","方翊霖","关景励","黄贝儿","黄晓敏","黄煜岚","赖子淇","黎世洲","李博涵","李辉","李振强","廖迎孜","林琦皓","刘珈宁","刘钰婷","慕湘伊","潘美婷","彭智翔","丘言安","饶顺雨","石馨兰","谭皓文","唐静璇","田玉姣","谢伟深","徐志展","许晋淞","闫爱心","袁雅宜","张新瑜","张雅芝","赵嘉敏","赵隽早","赵岂","周思涵","邹家逸","古骐源"],
            btn: true,
            id: null,
            i: 0,
        }
    },
    methods: {
        start(){
            if(this.btn){
                this.btn = !this.btn;
                this.message = '停止';
                this.setime()
            }else{
                this.btn = !this.btn;
                this.message = '开始';
                clearTimeout(this.id);
            }
        },
        luck(){
            var len = this.class_name.length;
            this.text = this.class_name[this.i]
            this.i++
            if(this.i===len){
                this.i = 0;
            }
        },
        setime(){
            this.id = setInterval(this.luck,50);
        },
        goHome(){
            this.$router.push('/');
        }
    }
}
</script>

<style scoped>
    #luck185::before{
        content: '';
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-image: url('../assets/img/luck.jpg');
        background-size:cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    #box{
        position: absolute;
        background-color: white;
        height: 300px;
        width: 500px;
        border-radius: 5px;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        filter: opacity(90%);
    }
    #name{
        filter: opacity(100%);
        font-family: 'Songti SC', 'Noto Serif SC', STZhongsong, STKaiti, KaiTi, Roboto, serif;
        margin-top: 80px;
        font-size: 50px;
    }
    #start{
        filter: opacity(100%);
        font-family: 'Songti SC', 'Noto Serif SC', STZhongsong, STKaiti, KaiTi, Roboto, serif;
        margin-top: 30px;
        color: #131313;
    }
</style>