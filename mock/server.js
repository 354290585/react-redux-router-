var app = require('koa')();
var router = require('koa-router')();
var homeDiscount = require('./home/discount')
var homeLikeList = require('./home/likelist')
var searchListData = require('./search/list')
var DetailInfo = require('./detail/info')
var Comment = require('./detail/comment')
var Order = require('./order/order')
//首页---广告---超值特惠
router.get('/api/home/discount',function *(next){
    this.body = homeDiscount;
})
//首页---推荐列表---猜你喜欢
router.get('/api/home/like/:city/:page',function *(next){
    const params = this.params;
    const paramsCity = params.city;
    const paramsPage = params.page;

    console.log('当前城市:' + paramsCity)
    console.log('当前页数:' + paramsPage)

    this.body = homeLikeList; 
})
// 搜索结果页 - 搜索结果 - 三个参数
router.get('/api/search/:page/:city/:category/:keyword',function *(next){
    console.log('搜索结果页 - 搜索结果')
    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)
    console.log('关键字：' + paramsKeyword)
    this.body = searchListData;
})
// 搜索结果页 - 搜索结果 - 2个参数
router.get('/api/search/:page/:city/:category',function *(next){
    console.log('搜索结果页 - 搜索结果')
    // 参数
    const params = this.params
    const paramsPage = params.page
    const paramsCity = params.city
    const paramsCategory = params.category
    const paramsKeyword = params.keyword

    console.log('当前页数：' + paramsPage)
    console.log('当前城市：' + paramsCity)
    console.log('当前类别：' + paramsCategory)
    console.log('关键字：' + paramsKeyword)
     this.body = searchListData;
})
// 详情页 - 商户信息
router.get('/api/detail/info/:id',function *(next){
    console.log('详情页 - 商户信息')
    const params = this.params;
    const paramsID = params.id;
    console.log('当前ID：' + paramsID)
    this.body = DetailInfo;
})
router.get('/api/detail/comment/:page/:id', function *(next) {
    console.log('详情页 - 用户点评')

    const params = this.params
    const page = params.page
    const id = params.id

    console.log('当前评论商户id: ' + id)
    console.log('当前页数评论: ' + page)

    this.body = Comment;
})
//用户订单数据
router.get('/api/orderlist/:username',function *(next){
    console.log('用户订单页')

    const params = this.params;
    const username = params.username;
    console.log('-----------用户名:'+username)
    this.body = Order;
})


//启动服务,并生成路由
app.use(router.routes());
app.use(router.allowedMethods());
app.listen(3000);