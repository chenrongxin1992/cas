var express = require('express');
var router = express.Router();
const http = require('http')
const request = require('request')

let MyServer = "http://csse.szu.edu.cn",
	CASserver = "https://auth.szu.edu.cn/cas.aspx/",
	ReturnURL = "http://csse.szu.edu.cn/book";
	//ReturnURL = 'http://210.39.15.162:81/reserve/meeting'

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login',function(req,res){
	console.log('----- login -----')
	// header("Location: ". $CASserver ."login?service=". $ReturnURL);		//认证后返回ticket
	let url = CASserver + 'login?service=' + ReturnURL
	console.log('check url -->',url)
	res.redirect(url)
})

router.get('/logout',function(req,res){
	console.log('----- logout -----')
	//session_destroy();
	//header("Location: ". $CASserver ."logout?ReturnUrl=". $ReturnURL);		//注销ticket
	let url = CASserver + 'logout?ReturnUrl=' + ReturnURL
	console.log('check url -->',url)
	res.redirect(url)
})

router.get('/checkResult',function(req,res){
	console.log('----- checkResult -----')
	let ticket = req.query.ticket
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

module.exports = router;
