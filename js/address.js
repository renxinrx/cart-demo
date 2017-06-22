new Vue({
	el:"#address",
	data:{
		delivery:0,
		addressList:[],
		newList:[],
		currentIndex:0,
		limitNum:3,
		num:3,
	},
	mounted:function(){
		this.$nextTick(function(){
			this.addView();
		
		})
	},
	computed:{
		filterList:function(){
			return this.addressList.slice(0,this.limitNum);
		}
	},
	filters:{
		formatMoney:function(value){
			return "￥"+value;
		}
	},
	methods:{
		addView:function(){
			var addressDate={
			  "status":0,
			  "message":"",
			  "result":[
			    {
			      "addressId":"100001",
			      "userName":"JackBean",
			      "streetName":"北京市朝阳区朝阳公园",
			      "postCode":"100001",
			      "tel":"12345678901",
			      "isDefault":true
			    },
			    {
			      "addressId":"100002",
			      "userName":"JackBean",
			      "streetName":"北京市朝阳区朝阳公园",
			      "postCode":"100001",
			      "tel":"12345678901",
			      "isDefault":false
			    },
			    {
			      "addressId":"100003",
			      "userName":"JackBean",
			      "streetName":"北京市朝阳区朝阳公园",
			      "postCode":"100001",
			      "tel":"12345678901",
			      "isDefault":false
			    },
			    {
			      "addressId":"100004",
			      "userName":"JackBean",
			      "streetName":"北京市朝阳区朝阳公园",
			      "postCode":"100001",
			      "tel":"12345678901",
			      "isDefault":false
			    },
			    {
			      "addressId":"100005",
			      "userName":"JackBean",
			      "streetName":"北京市朝阳区朝阳公园",
			      "postCode":"100001",
			      "tel":"12345678901",
			      "isDefault":false
			    }
			  ]
			};

			if(addressDate && addressDate.status==0){
				this.addressList = addressDate.result;
			}
		},
		setDefault:function(addressId){
			this.addressList.forEach(function(item,index){
				if(item.addressId==addressId){
					item.isDefault=true;
				}else{
					item.isDefault=false;
				}
			})
		},
		
		
	}

})