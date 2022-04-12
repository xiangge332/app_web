<template>
  <div id="Topapp">
        <div class="banner">
            <div class="tp">
                <p id="welcome">xiangge332の传送点</p>
            </div>
            <a href="javascript:void(0)" @click="down()"><Icon type="ios-arrow-down" size='80' id="down"/></a>
        </div>
        <div class="knife">
            <p>朴实无华的分割线</p>
            <p>_(:з」∠)_</p>
        </div>
        <div class="address">
            <List item-layout="vertical" id="list">
                <ListItem v-for="item in list" :key="item.title" class="text">
                    <p id="main">{{item.title}}</p>
                    {{item.detailed}}
                    <br/>
                    <Button type="primary" @click="to(item.path)" id="fly">前往</Button>
                </ListItem>
            </List>
        </div>
        <Footer class="layout-footer-center">没有了┑(￣Д ￣)┍</Footer>
  </div>
</template>

<script>
    // import axios from 'axios'

    export default {
        data(){
            return{
                list: [{"title":"185点名器","detailed":"185班随机点名器","path":"/luck"}],
            }
        },
        methods: {
            down(){
                document.querySelector("#list").scrollIntoView(true);
            },
            to(toW){
                // let path = '/#' + this.toW;
                this.$router.push({path:toW});
                console.log(toW);
            },
            // getSome(){
            //     axios.get('https://cdn.jsdelivr.net/gh/xiangge332/poto@latest/eles/list.json',{headers:{'content-type': 'application/json; charset=utf-8    '}})
            //     .then(res => {
            //         this.list = res.data;
            //         console.log(this.list);
            //     // console.log(res);
            //     }).catch(err => {
            //     console.log(err);
            // })
            // }
        }
        // created() {
        //     this.getSome();
        // }
    }
</script>

<style scoped>
    #Topapp::before{
        content: '';
        position: fixed;
        width: 100%;
        height: 100%;
        z-index: -1;
        background-image: url('../assets/img/backgroung.png');
        background-size:cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: blur(3px);
    }
    .banner{
        position: relative;
        display: flex;
        height: 100vh;
        width: 100%;
    }
    .tp{
        height: 300px;
        width: 800px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        filter: opacity(50%);
        border-radius: 15px;
    }
    #welcome{
        font-size: 75px;
        letter-spacing: 5px;
        color: #131313;
        position: absolute;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    #down{
        color: #0aa1ff;
        display: inline-flex;
        position: absolute;
        bottom: 2rem;
        z-index: 9;
        left: 50%;
        transform: translate(-50%);
    }
    .knife{
        text-align: center;
        border-top: 2px solid black;
        border-bottom: 2px solid black;
        width: 100%;
        height: 80px;
        font-family: 'Songti SC', 'Noto Serif SC', STZhongsong, STKaiti, KaiTi, Roboto, serif;
        color: #ffffff;
        font-size: 25px;
        background-color: rgb(0, 0, 0);
        filter: opacity(50%);
    }
    .address{
        text-align: center;
        /* overflow: hidden; */
        width: 100%;
        /* position:relative; */
    }
    #list{
        background-color: white;
        filter: opacity(80%);
        font-family: 'Songti SC', 'Noto Serif SC', STZhongsong, STKaiti, KaiTi, Roboto, serif;
        height: auto;
        width: 1000px;
        margin-left: auto;
        margin-right: auto;
        /* position: absolute; */
        /* left: 50%; */
        /* transform: translate(-50%); */   
        font-size: 25px;
        text-align:center;
    }
    /* .text{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        position: absolute;
        height: 100%;
        width: 100%;
        left: auto;
        right: auto;          
        
    } */
    #main{
        font-size: 32px;
        margin-bottom: 35px;
    }
    /* #fly{
        position:absolute;
        left:50%;
        margin-left:-25px;
        text-align: center;
        bottom: 20px;
    } */
    .layout-footer-center{
        background-color: #d7d1d1;
        filter: opacity(90%);
        text-align: center;
        font-size: 15px;
    }
</style>