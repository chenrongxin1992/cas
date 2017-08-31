/**
 *  @Author:    chenrongxin
 *  @Create Date:   2017-05-15
 *  @Description:   会议预定显示路由
 */
var express = require('express')
var router = express.Router()
// var logger = require('../../log/logConfig').logger
// const logic = require('../../logic/logic')

/*
 * 显示会议室预定情况
 */
router.get('/meeting',function(req,res){
	console.log('----- checkResult -----')
	let ticket = req.query,
		ticket1 = req.params
	console.log(ticket)
	console.log(ticket1)
	if(typeof ticket != 'undefined' || ticket != null){
		console.log('check ticket -->',ticket)
		//$URL = $CASserver . "serviceValidate?ticket=" . $_GET["ticket"] . "&service=". $ReturnURL;		//CAS webservices 地址
		let url = CASserver + 'serviceValidate?ticket=' + ticket + '&service=' + ReturnURL
		console.log('check url -->',url)

		request(url, function (error, response, body) {
	      if (!error && response.statusCode == 200) {
	        console.log(body);
	      }
	    })
	}
})

module.exports = router