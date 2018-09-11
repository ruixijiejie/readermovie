Page({
    data: {
        motto: 'Hello World',

    },
    //事件处理函数
    bindViewTap: function(event) {
        // wx.navigateTo({
        //     url: '../posts/post'
        // });
        wx.switchTab({
            url: '../posts/post'
        });
        // wx.redirectTo({         // 平级跳转，没有返回按钮
        //   url: '../posts/post'
        // });

        // wx.navigateTo({
        //   url: 'String',
        //   success: function(res){
        //     // success
        //   },
        //   fail: function() {
        //     // fail
        //   },
        //   complete: function() {
        //     // complete成功失败都执行
        //   }
        // });



    },
    onteztop:function(){
        console.log(" ssssonteztop")
    },

    onHide:function(){
        // 当页面隐藏
        console.log("onHide")
    },
    onUnload:function(){
        //当页面关闭
        console.log("onUnload")
    }

})
