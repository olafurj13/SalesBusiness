angular.module("project3App").run(["$templateCache", function($templateCache) {$templateCache.put("index.html","<!DOCTYPE html>\r\n<html ng-app=\"project3App\">\r\n<head>\r\n	<title>WEPO Assignment 3 - Online Web Store</title>\r\n	<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n	<meta charset=\"utf-8\">\r\n	<link rel=\"stylesheet\" href=\"styles/vendor.css\">\r\n	<link rel=\"stylesheet\" href=\"styles/app.css\">\r\n	<script src=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js\" integrity=\"sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS\" crossorigin=\"anonymous\"></script>\r\n	<link rel=\"stylesheet\" href=\"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css\" integrity=\"sha384-1q8mTJOASx8j1Au+a5WDVnPi2lkFfwwEAa8hDDdjZlpLegxhjVME1fgjWPGmkzs7\" crossorigin=\"anonymous\">\r\n</head>\r\n\r\n	<main class=\"container-fluid\">\r\n		<div class=\"Main clearfix\" ng-view id=\"content\"></div>\r\n	</main>\r\n\r\n	<toaster-container></toaster-container>\r\n	\r\n	<!-- inject:vendor:js -->\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:app:js -->\r\n	<!-- endinject -->\r\n\r\n	<!-- inject:templates:js -->\r\n	<!-- endinject -->\r\n</body>\r\n\r\n</html>\r\n");
$templateCache.put("components/product/addproduct.html","");
$templateCache.put("components/product/editproduct.html","");
$templateCache.put("components/sellers/addseller.html","<div>ADD SELLER TODO</div>\n\n<div>\n	id<input ng-model=\"id\" type=\"number\"/>\n	name<input ng-model=\"name\" type=\"text\"/>\n	category<input ng-model=\"category\" type=\"text\"/>\n	imagePath<input ng-model=\"imagePath\" type=\"text\"/>\n	<button type=\"button\" class=\"btn btn-primary\" ng-click=\"addSeller()\">Add Seller</button>\n</div>\n\n<div>\n	<button type=\"button\" class=\"btn btn-primary\" ng-click=\"back()\">Back Seller</button>\n</div>\n\n\n");
$templateCache.put("components/sellers/editseller.html","<div>EDIT SELLER TODO</div>\n\n<div>\n	name<input ng-model=\"seller.name\" type=\"text\"/>\n	category<input ng-model=\"seller.category\" type=\"text\"/>\n	imagePath<input ng-model=\"seller.imagePath\" type=\"text\"/>\n	<button type=\"button\" class=\"btn btn-primary\" ng-click=\"editSeller()\">Edit Seller</button>\n</div>\n\n<div>\n	<button type=\"button\" class=\"btn btn-primary\" ng-click=\"back()\">Back Seller</button>\n</div>\n");
$templateCache.put("components/sellers/index.html","\r\n<div class=\"row\">\r\n	<div class = \"cold-md-4\">\r\n		<h1>Söluaðilar</h1>\r\n	</div>\r\n\r\n</div>\r\n<div class= \"row\">\r\n	<div class=\"col-md-8\"></div>\r\n	<div class=\"col-md-4\">\r\n		<button type=\"button\" class=\"btn btn-primary\" ng-click=\"addSeller(\'/seller\')\">Add Seller</button>\r\n		<p>\r\n	</div>\r\n</div>\r\n\r\n<div class=\"row\"> \r\n	<div class=\"col-md-12\">\r\n		<table class=\"table table-hover\">\r\n			<tr table-sort=\"Sellers\" class=\"info\">\r\n				<th data-columnName=\"Sellers\">Nafn Seljanda</th>\r\n      			<th data-columnName=\"Sellers\">Flokkur</th>\r\n      		</tr>\r\n  			<tr ng-repeat=\"seller in sellers | orderBy:predicate:reverse\">\r\n    			<td><a ng-href=\"#/seller/{{seller.id}}\"> {{seller.name}}</a></td>\r\n    			<td>{{ seller.category}}</td>\r\n  			</tr>\r\n		</table>\r\n	</div>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n <!-- a) For each column that should be sortable, add the data-columnName attribute,\r\n * with the value of the sort expression: \r\n \r\n <tr table-sort=\"Name\">\r\n *     <th data-columnName=\"Name\">Name</th>\r\n *     < etc. for each column in the table ;\r\n  </tr>\r\n *\r\n *  b) in your ng-repeat for the table rows, ensure you are using orderBy filter\r\n * with predicate and reverse (which are scope variables created by this\r\n * directive): \r\n *\r\n * <tr ng-repeat=\"stuff in stuffz | orderBy:predicate:reverse\">\r\n *\r\n <tr table-sort=\"-Name\">\r\n\r\n * If the sort order should be reversed initially, place a minus sign in front of\r\n *      the name of the default column: -->\r\n ");
$templateCache.put("components/sellers/seller.html","<div>SELLER TODO</div>\n\n<div>\n\n</div>\n	<img src=\"{{seller.imagePath}}\"/>\n<div>\n	{{seller}} 	<button type=\"button\" class=\"btn btn-primary\" ng-click=\"editSeller()\">Edit Sellers</button>\n</div>\n\n<div>\n	<button type=\"button\" class=\"btn btn-primary\" ng-click=\"back()\">Back To Sellers</button>\n</div>\n\n\n");
$templateCache.put("shared/notify/centris-notify-undo.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<!-- Note: basically the same template as the default template,\r\n	     but with an added \"Undo\" button. Note: we don\'t assume that\r\n	     there will be any need for custom HTML in the title/message,\r\n	     so that support has been removed. -->\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{title}}\r\n	</div>\r\n	<div>\r\n		<a class=\"centris-notify-undo pull-right\"\r\n			ng-click=\"centrisUndo(message.type, message.id)\"\r\n			translate=\"Undo\" />\r\n	</div>\r\n</div>");
$templateCache.put("shared/notify/centris-notify.tpl.html","<div class=\"{{toastClass}} {{toastType}}\" ng-click=\"tapToast()\">\r\n	<div class=\"{{titleClass}}\"\r\n		translate=\"AppTitle\">\r\n	</div>\r\n	<div class=\"{{messageClass}}\">\r\n		{{message}}\r\n	</div>\r\n</div>");}]);