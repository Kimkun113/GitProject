var sotienvay = +prompt("số tiền vay");
var sonam = +prompt("số năm gửi ngân hàng");
var laisuat = +prompt("lãi suất ngân hàng/năm");
var sotienphaitra = sotienvay + sonam *(sotienvay * (laisuat/100));
document.write( "số tiền phải trả sau"+ sotienphaitra);