new Vue({
	el:"#app",
	data:{
		// 数组
		productList:[],
		// 是否全选
		checkAllFlag:false,
		// 总金额
		totalMoney:0,
		// 当前选中项数据
		currentProduct:'',
		isShowModal:false
	},
	// 局部过滤
	filters:{
		// 给金额加单位
		formatMoney(value){
			return '￥'+value;
		}
	},
	// 加载完成后需要调用的函数
	mounted:function(){
		this.cartView();
	},
	methods:{
		cartView:function(){
			// 模拟数据
			var res={
			  "status":1,
			  "result":{
			    "totalMoney":59,
			    "list":[
			      {
			        "productId":"600100002115",
			        "productName":"黄鹤楼香烟",
			        "productPrice":19,
			        "productQuentity":1,
			        "productImage":"../img/goods-1.jpg",
			        "parts":[
			          {
			            "partsId":"10001",
			            "partsName":"打火机"
			          }
			        ]
			      },
			      {
			        "productId":"600100002120",
			        "productName":"加多宝",
			        "productPrice":8,
			        "productQuentity":5,
			        "productImage":"../img/goods-2.jpg",
			        "parts":[
			          {
			            "partsId":"20001",
			            "partsName":"吸管"
			          }
			        ]
			      }
			    ]
			  },
			  "message":""
			};

			if(res&&res.status==1){
				this.productList=res.result.list;
			}
		},
		// 加减数量
		change:function(productList,value){
			if(value<0){
				productList.productQuentity--;
				if(productList.productQuentity<0){
					productList.productQuentity=0;
				}
			}else{
				productList.productQuentity++;
			}
			//数量改变 ，总金额也会改变
			this.calcMoney();
			
		},
		// 单个选中
		checkFlag:function(item){
			// 检测 如果没有这个属性，则插入
			if(typeof item.isCheck == 'undefined'){
				this.$set(item,'isCheck',true);
			}else{
				item.isCheck=!item.isCheck;
			}
			this.isCheckAll();
			this.calcMoney();
		},
		// 全选、取消全选
		allCheck:function(flag){
			this.checkAllFlag=flag;
			var _this=this;
			this.productList.forEach(function(item,index){
					if(typeof item.isCheck == 'undefined'){
						_this.$set(item,'isCheck',true);
					}else{
						item.isCheck=_this.checkAllFlag
					}
			})
			this.calcMoney();
		},
		// 是否全选
		isCheckAll:function(){
			let  flag = true;
			this.productList.forEach(function(item){
				if(!item.isCheck){
					flag = false;
				}
			})
			if(flag){
				this.checkAllFlag = true;
			}else{
				this.checkAllFlag = false;
			}
		},
		// 总计金额计算
		calcMoney:function(){
			let totalMoney = 0;
			this.productList.forEach(function(item){
				if(item.isCheck){
					totalMoney+=item.productPrice*item.productQuentity;
				}
			});
			this.totalMoney = totalMoney;
		},
		// 点击删除按钮
		delteItem:function(item){
			this.isShowModal=true;
			this.currentProduct = item;
			console.log(1212);
		},
		// 点击modal的确定删除按钮
		deleteDate:function(){
			console.log('dsadad');
			this.isShowModal=true;
			var index = this.productList.indexOf(this.currentProduct);
			this.productList.splice(index,1);

		}



	}

})

// 全局过滤器
Vue.filter('money',function(value,type){
	return value+type;
})