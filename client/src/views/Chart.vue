<template>
  	<div class="cart-wrap">
		<div class="container">
	        <div class="row">
			    <div class="col-lg-8">
			        <div class="main-heading">Shopping Cart</div>
			        <div class="table-cart">
	                    <table>
	                        <thead>
	                            <tr>
	                                <th>Product</th>
	                                <th>Quantity</th>
	                                <th>Total</th>
	                                <th></th>
	                            </tr>
	                        </thead>
	                        <tbody>
	                            <tr>
	                                <td>
	                                	<div class="display-flex align-center">
		                                    <div class="img-product">
		                                        <img src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg" alt="" class="mCS_img_loaded">
		                                    </div>
		                                    <div class="name-product">
		                                        Apple iPad Mini
		                                        <br>G2356
		                                    </div>
		                                    <div class="price">
		                                        $1,250.00
		                                    </div>
	                                    </div>
	                                </td>
	                                <td class="product-count">
	                                    <form action="#" class="count-inlineflex">
										    <div class="qtyminus">-</div>
										    <input type="text" name="quantity" value="1" class="qty">
										    <div class="qtyplus">+</div>
										</form>
	                                </td>
	                                <td>
	                                    <div class="total">
	                                        $6,250.00
	                                    </div>
	                                </td>
	                                <td>
	                                    <a href="#" title="">
	                                        <img src="images/icons/delete.png" alt="" class="mCS_img_loaded">
	                                    </a>
	                                </td>
	                            </tr>
	                            <tr>
	                                <td>
	                                	<div class="display-flex align-center">
		                                    <div class="img-product">
		                                        <img src="https://www.91-img.com/pictures/laptops/asus/asus-x552cl-sx019d-core-i3-3rd-gen-4-gb-500-gb-dos-1-gb-61721-large-1.jpg" alt="" class="mCS_img_loaded">
		                                    </div>
		                                    <div class="name-product">
		                                        Apple iPad Mini
		                                        <br>G2356
		                                    </div>
		                                    <div class="price">
		                                        $1,250.00
		                                    </div>
	                                    </div>
	                                </td>
	                                <td class="product-count">
	                                    <form action="#" class="count-inlineflex">
										    <div class="qtyminus">-</div>
										    <input type="text" name="quantity" value="1" class="qty">
										    <div class="qtyplus">+</div>
										</form>
	                                </td>
	                                <td>
	                                    <div class="total">
	                                        $6,250.00
	                                    </div>
	                                </td>
	                                <td>
	                                    <a href="#" title="">
	                                        <img src="images/icons/delete.png" alt="" class="mCS_img_loaded">
	                                    </a>
	                                </td>
	                            </tr>
	                        </tbody>
	                    </table>
	                    <div class="coupon-box">
	                        <form action="#" method="get" accept-charset="utf-8">
	                            <div class="coupon-input">
	                                <input type="text" name="coupon code" placeholder="Coupon Code">
	                                <button type="submit" class="round-black-btn">Apply Coupon</button>
	                            </div>
	                        </form>
	                    </div>
			        </div>
			        <!-- /.table-cart -->
			    </div>
			    <!-- /.col-lg-8 -->
			    <div class="col-lg-4">
			        <div class="cart-totals">
			            <h3>Cart Totals</h3>
			            <form action="#" method="get" accept-charset="utf-8">
			                <table>
			                    <tbody>
			                        <tr>
			                            <td>Subtotal</td>
			                            <td class="subtotal">$2,589.00</td>
			                        </tr>
			                        <tr>
			                            <td>Shipping</td>
			                            <td class="free-shipping">Free Shipping</td>
			                        </tr>
			                        <tr class="total-row">
			                            <td>Total</td>
			                            <td class="price-total">$1,591.00</td>
			                        </tr>
			                    </tbody>
			                </table>
			                <div class="btn-cart-totals">
			                    <a href="#" class="update round-black-btn" title="">Update Cart</a>
			                    <a href="#" class="checkout round-black-btn" title="">Proceed to Checkout</a>
			                </div>
			                <!-- /.btn-cart-totals -->
			            </form>
			            <!-- /form -->
			        </div>
			        <!-- /.cart-totals -->
			    </div>
			    <!-- /.col-lg-4 -->
			</div>
		</div>
	</div>
</template>
<script>

		$(document).ready(function() {
		    var slider = $("#slider");
		    var thumb = $("#thumb");
		    var slidesPerPage = 4; //globaly define number of elements per page
		    var syncedSecondary = true;
		    slider.owlCarousel({
		        items: 1,
		        slideSpeed: 2000,
		        nav: false,
		        autoplay: false, 
		        dots: false,
		        loop: true,
		        responsiveRefreshRate: 200
		    }).on('changed.owl.carousel', syncPosition);
		    thumb
		        .on('initialized.owl.carousel', function() {
		            thumb.find(".owl-item").eq(0).addClass("current");
		        })
		        .owlCarousel({
		            items: slidesPerPage,
		            dots: false,
		            nav: true,
		            item: 4,
		            smartSpeed: 200,
		            slideSpeed: 500,
		            slideBy: slidesPerPage, 
		        	navText: ['<svg width="18px" height="18px" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="25px" height="25px" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
		            responsiveRefreshRate: 100
		        }).on('changed.owl.carousel', syncPosition2);
		    function syncPosition(el) {
		        var count = el.item.count - 1;
		        var current = Math.round(el.item.index - (el.item.count / 2) - .5);
		        if (current < 0) {
		            current = count;
		        }
		        if (current > count) {
		            current = 0;
		        }
		        thumb
		            .find(".owl-item")
		            .removeClass("current")
		            .eq(current)
		            .addClass("current");
		        var onscreen = thumb.find('.owl-item.active').length - 1;
		        var start = thumb.find('.owl-item.active').first().index();
		        var end = thumb.find('.owl-item.active').last().index();
		        if (current > end) {
		            thumb.data('owl.carousel').to(current, 100, true);
		        }
		        if (current < start) {
		            thumb.data('owl.carousel').to(current - onscreen, 100, true);
		        }
		    }
		    function syncPosition2(el) {
		        if (syncedSecondary) {
		            var number = el.item.index;
		            slider.data('owl.carousel').to(number, 100, true);
		        }
		    }
		    thumb.on("click", ".owl-item", function(e) {
		        e.preventDefault();
		        var number = $(this).index();
		        slider.data('owl.carousel').to(number, 300, true);
		    });


            $(".qtyminus").on("click",function(){
                var now = $(".qty").val();
                if ($.isNumeric(now)){
                    if (parseInt(now) -1> 0)
                    { now--;}
                    $(".qty").val(now);
                }
            })            
            $(".qtyplus").on("click",function(){
                var now = $(".qty").val();
                if ($.isNumeric(now)){
                    $(".qty").val(parseInt(now)+1);
                }
            });
		});
export default {
  
}
</script>
<style scoped>
.cart-wrap {
	padding: 40px 0;
	font-family: 'Open Sans', sans-serif;
}
.main-heading {
	font-size: 19px;
	margin-bottom: 20px;
}
.table-cart table {
    width: 100%;
}
.table-cart thead {
    border-bottom: 1px solid #e5e5e5;
    margin-bottom: 5px;
}
.table-cart thead tr th {
    padding: 8px 0 18px;
    color: #484848;
    font-size: 15px;
    font-weight: 400;
}
.table-cart tr td {
    padding: 40px 0 27px;
    vertical-align: middle;
}
.table-cart tr td:nth-child(1) {
    width: 52%;
}
.table-cart tr td:nth-child(2) {
    width: 26%;
}
.table-cart tr td:nth-child(3) {
    width: 13.333%;
}
.table-cart tr td:nth-child(4) {
    width: 8.667%;
    text-align: right;
}
.table-cart tr td .img-product {
    width: 72px;
    float: left;
    margin-left: 8px;
    margin-right: 31px;
    line-height: 63px;
}
.table-cart tr td .img-product img {
	width: 100%;
}
.table-cart tr td .name-product {
    font-size: 15px;
    color: #484848;
    padding-top: 8px;
    line-height: 24px;
    width: 50%;
}
.table-cart tr td .price {
    text-align: right;
    line-height: 64px;
    margin-right: 40px;
    color: #989898;
    font-size: 16px;
    font-family: 'Nunito';
}
.table-cart tr td .quanlity {
    position: relative;
}
.product-count .qtyminus,
.product-count .qtyplus {
	width: 34px;
    height: 34px;
    background: transparent;
    text-align: center;
    font-size: 19px;
    line-height: 34px;
    color: #000;
    cursor: pointer;
    font-weight: 600;
}
.product-count .qtyminus {
    line-height: 32px;
}
.product-count .qtyminus {
	border-radius: 3px 0 0 3px; 
}
.product-count .qtyplus {
	border-radius: 0 3px 3px 0; 
}
.product-count .qty {
	width: 60px;
	text-align: center;
	border: none;
}
.count-inlineflex {
	display: inline-flex;
	border: solid 2px #ccc;
	border-radius: 20px;  
}
.total {
	font-size: 24px;
	font-weight: 600;
	color: #8660e9;
}
.display-flex {
	display: flex;
}
.align-center {
	align-items: center;
}

.coupon-box {
    padding: 63px 0 58px;
    text-align: center;
    border: 2px dotted #e5e5e5;
    border-radius: 10px;
    margin-top: 55px;
}
.coupon-box form input {
    display: inline-block;
    width: 264px;
    margin-right: 13px;
    height: 44px;
    border-radius: 25px;
    border: solid 2px #cccccc;
    padding: 5px 15px;
    font-size: 14px;
}
input:focus {
	outline: none;
	box-shadow: none;
}
.round-black-btn {
	border-radius: 25px;
    background: #212529;
    color: #fff;
    padding: 8px 35px;
    display: inline-block;
    border: solid 2px #212529; 
    transition: all 0.5s ease-in-out 0s;
    cursor: pointer;
}
.round-black-btn:hover,
.round-black-btn:focus {
	background: transparent;
	color: #212529;
	text-decoration: none;
}
.cart-totals {
	border-radius: 3px;
	background: #e7e7e7;
	padding: 25px;
}
.cart-totals h3 {
	font-size: 19px;
    color: #3c3c3c;
    letter-spacing: 1px;
    font-weight: 500;
}
.cart-totals table {
	width: 100%;
}
.cart-totals table tr th,
.cart-totals table tr td {
	width: 50%;
    padding: 3px 0;
    vertical-align: middle;
}
.cart-totals table tr td:last-child {
	text-align: right;
}
.cart-totals table tr td.subtotal {
	font-size: 20px;
    color: #6f6f6f;
}
.cart-totals table tr td.free-shipping {
	font-size: 14px;
    color: #6f6f6f;
}
.cart-totals table tr.total-row td {
	padding-top: 25px;
}
.cart-totals table tr td.price-total {   
	font-size: 24px;
    font-weight: 600;
    color: #8660e9;
}
.btn-cart-totals {
	text-align: center;
	margin-top: 60px;
	margin-bottom: 20px;
}
.btn-cart-totals .round-black-btn {
	margin: 10px 0; 
}
</style>