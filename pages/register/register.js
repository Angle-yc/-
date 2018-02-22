Page({
  data:{
    
  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    
  },
  formSubmit:function(event){
      console.log(event)
    //   wx.showToast({
    //     title: '成功',
    //     icon: 'loading',
    //     duration: 2000
    //     })
        var accoutPswd = event.detail.value.accoutPswd;
        var accoutPswd1 = event.detail.value.accoutPswd1;
        var accoutName = event.detail.value.accoutName;
        if (accoutPswd == accoutPswd1 && accoutPswd != "" && accoutName != ""){
            wx.request({
              url: 'http://service.woyao.skydragon-inc.com/api/users',
              data: {},
              method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
              // header: {}, // 设置请求的 header
              success: function(res){
                // success
                console.log(res)
              },
              fail: function(res) {
                // fail
              },
              complete: function(res) {
                // complete
              }
            })
            
        }

  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    
  },

})