var userAgentStr = window.navigator.userAgent;
if(/Mobile/.test(userAgentStr)){
    alert('Mobile');
}else{
    alert('PC');
}
if (/MicroMessenger/.test(userAgentStr)) {
    alert('WeChat(微信)');
}else if(/AlipayClient/.test(userAgentStr)) {
    alert('Alipay(支付宝)');
}else if(/QQTheme/.test(userAgentStr)) {
    alert('QQ');
}else if(/HeyTapBrowser/.test(userAgentStr)) {
    alert('HeyTapBrowser(HeyTap)');
}else if(/VivoBrowser/.test(userAgentStr)) {
    alert('VivoBrowser(vivo)');
}else if(/MQQBrowser/.test(userAgentStr)) {
    alert('MQQBrowser(QQ浏览器移动版)');
}else if(/QQBrowser/.test(userAgentStr)) {
    alert('QQBrowser(QQ浏览器)');
}else if(/baiduboxapp/.test(userAgentStr)) {
    alert('baiduboxapp(百度app)');
}else if(/Weibo/.test(userAgentStr)) {
    alert('Weibo(新浪微博)');
}else if(/iqiyi/.test(userAgentStr)) {
    alert('iqiyi(爱奇艺)');
}else if(/aweme/.test(userAgentStr)) {
    alert('aweme(抖音)');
}else if(/kdtUnion_iting/.test(userAgentStr)) {
    alert('kdtUnion_iting(喜马拉雅)');
}else if(/DingTalk/.test(userAgentStr)) {
    alert('DingTalk(钉钉)');
}else if(/UCBrowser/.test(userAgentStr)) {
    alert('UCBrowser(UC浏览器)');
}else if(/SamsungBrowser/.test(userAgentStr)) {
    alert('SamsungBrowser(三星浏览器)');
}else if(/HUAWEIEVA/.test(userAgentStr)) {
    alert('huaweiBrowser(华为浏览器)');
}else if(/NokiaBrowser/.test(userAgentStr)) {
    alert('NokiaBrowser(诺基亚浏览器)');
}else if(/Opera/.test(userAgentStr)) {
    alert('Opera(欧朋)');
}else if(/Firefox/.test(userAgentStr)) {
    alert('Firefox(火狐)');
}else if(/Chrome/.test(userAgentStr)) {
    alert('Chrome(谷歌)');
}else if(/Safari/.test(userAgentStr)) {
    alert('Safari(苹果)');
}else{
    alert('other');
}
