
<?php

    $counterFile = 'counter.txt' ;

    // jQuery ajax request is sent here
    if ( isset($_GET['increase']) )
    {
        if ( ( $counter = @file_get_contents($counterFile) ) === false ) die('Error : file counter does not exist') ;
        file_put_contents($counterFile,++$counter) ;
        echo $counter ;
        return false ;
    }

    if ( ! $counter = @file_get_contents($counterFile) )
    {
        if ( ! $myfile = fopen($counterFile,'w') )
            die('Unable to create counter file !!') ;
        chmod($counterFile,0644);
        file_put_contents($counterFile,0) ;
    }

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Tell the browser to be responsive to screen width -->
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">
    <!-- Favicon icon -->
    <link rel="icon" type="image/png" sizes="16x16" href="src/assets/images/favicon.png">
    <title>AdminMart admin Template - The Ultimate Multipurpose admin template</title>
    <!-- Custom CSS -->
    <link href="src/dist/css/pandalocker.min.css" rel="stylesheet">
    <style type="text/css">
        .onp-sl-header{
            font-size:24px!important;
            font-family: Gilmer-Heavy,sans-serif;
        }
    </style>
    <link href="src/dist/css/style.min.css" rel="stylesheet">
    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
    <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->
    <script src="src/assets/libs/jquery/dist/jquery.min.js"></script>
    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-121685638-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-121685638-2');
    </script>
    
</head>

<body>
    <!-- ============================================================== -->
    <!-- Main wrapper -->
    <!-- ============================================================== -->
    <div id="main-wrapper" class="landingpage-fonts bg-white">
        <!-- ============================================================== -->
        <!-- Header part -->
        <!-- ============================================================== -->
        <header class="topbar-v2 bg-white">
            <div class="container bg-banner">
                <!-- Start Header -->
                <div class="header">
                    <nav class="navbar navbar-expand-md navbar-light px-lg-0">
                        <a class="navbar-brand pr-0 pr-md-3 mr-0" href="#">
                            <img src="src/assets/images/landingpage/logo.png" class="brand-img" alt="logo">
                        </a>
                        <ul class="navbar-nav">
                            <li class="nav-item border-left mt-1">
                                <a class="nav-link py-0 d-flex align-items-center" href="docs/docs.html" target="_blank">
                                    <i data-feather="file-text" class="data-icon mr-2 ml-2 ml-md-0"></i>
                                    <span class="font-tofino-medium font-16">Documentation</span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                    <div class="row header-banner align-items-start">
                        <div class="col-lg-5 mt-5 pt-0 pt-lg-5">
                            <h2 class="font-gilmer-heavy feature-title">Build Web Application or Dashboard Faster with AdminMart</h2>
                            <h4 class="text-muted font-tofino-book mt-4 custom-lh">Free Bootstrap4 Admin theme built with html/css, ready to use for your next project.</h4>
                            <div class="pt-4 pb-4">

                                <a href="javascript:void(0)" class="btn btn-custom btn-info btn-shadow-v1 downloadcount123 font-tofino-medium" data-toggle="modal" data-target="#download-modal">
                                    <i data-feather="download" class="data-icon mr-2 mb-1"></i>
                                    Free Download</a>
                                <a href="http://adminmart.com/src/html/index.html" target="_blank" class="text-decoration-none font-17 text-dark ml-4 font-tofino-medium border-bottom border-dark">Live
                                    Preview</a>
                            </div>
                            
                            <div class="d-flex align-items-center mt-4 justify-content-center justify-content-lg-start">
                                <img src="src/assets/images/landingpage/brand-logos.png" alt="logos" />
                            </div>
                            <div class="mt-4 pt-2">Total Downloads : <span class="badge badge-pill bg-light"><i class="fa fa-download p-1"></i> <span id="counter"><?php echo $counter ; ?></span></span></div>
                        </div>
                        <div class="col-lg-7">
                            <img class="banner-img mt-md-4 mt-lg-0" src="src/assets/images/landingpage/banne-img.png" alt="db">
                        </div>
                    </div>
                </div>
                <!-- End Header -->
            </div>
        </header>
        <!-- ============================================================== -->
        <!-- Header part -->
        <!-- ============================================================== -->
        <!-- ============================================================== -->
        <!-- Page wrapper part -->
        <!-- ============================================================== -->
        <div class="page-wrapper">
            <!-- ============================================================== -->
            <!-- Listing part -->
            <!-- ============================================================== -->
            
            <section>
                <div class="container bg-section py-5 my-0 my-lg-4">
                    <div class="row mt-0 mt-md-5">
                        <div class="col-lg-8">
                            <img src="src/assets/images/landingpage/section-img.png" class="img-fluid pr-4 mr-2">
                        </div>
                        <div class="col-lg-4">
                            <h2 class="font-gilmer-heavy mt-4 mt-lg-0 feature-title">Clean and Modern User Interface with Easy to Use Code</h2>
                            <h4 class="text-muted font-tofino-book mt-4 custom-lh">Free Bootstrap4 Admin theme built with html/css, ready to use for your next project.</h4>
                            <ul class="list-unstyled my-4 feature-list">
                                <li class="font-tofino-regular font-15 my-1"><i data-feather="check-circle"
                                        class="stroke-primary list-icon mr-2"></i> Minimal base Design
                                </li>
                                <li class="font-tofino-regular font-15 my-1"><i data-feather="check-circle"
                                        class="stroke-primary list-icon mr-2"></i> Latest Bootstrap Version
                                </li>
                                <li class="font-tofino-regular font-15 my-1"><i data-feather="check-circle"
                                        class="stroke-primary list-icon mr-2"></i> 25+ Page Templates</li>
                                <li class="font-tofino-regular font-15 my-1"><i data-feather="check-circle"
                                        class="stroke-primary list-icon mr-2"></i> 5+ Table & Form Explamples</li>
                                <li class="font-tofino-regular font-15 my-1"><i data-feather="check-circle"
                                        class="stroke-primary list-icon mr-2"></i> 5+ Chart Examples & Lots more...</li>
                            </ul>
                            <div class="pt-3 pb-4">
                                <a href="javascript:void(0)" class="btn downloadcount123 btn-custom btn-info btn-shadow-v1 font-tofino-medium" data-toggle="modal" data-target="#download-modal">
                                    <i data-feather="download" class="data-icon mr-2 mb-1"></i>
                                    Free Download</a>
                                <a href="http://adminmart.com/src/html/index.html" target="_blank" class="text-decoration-none text-dark font-17 ml-4 font-tofino-medium border-bottom border-dark">Live
                                    Preview</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ============================================================== -->
            <!-- why project section part -->
            <!-- ============================================================== -->
            <section class="py-5 my-0 my-lg-4 position-relative">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-7">
                            <h1 class="font-gilmer-heavy">Why choose AdminMart for your Project?</h1>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row mt-5 bg-section-v2">
                        <div class="col-lg-5">
                            <div class="">
                                <div class="card card-custom-shadow">
                                    <div class="card-body">
                                        <div class="d-flex p-3">
                                            <div class="pr-4"><span class="icon2 feature-icon feature-icon1"></span></div>
                                            <div class="">
                                                <h6 class="font-18">Free for Commercial Projects</h6>
                                                <p class="font-tofino-regular mt-4 mb-0">The design effort we put & the team we  world class. Our all template.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card card-custom-shadow">
                                    <div class="card-body">
                                        <div class="d-flex p-3">
                                            <div class="pr-4"><span class="icon2 feature-icon feature-icon4"></span></div>
                                            <div class="">
                                                <h6 class="font-18">Lifetime Free Updates</h6>
                                                <p class="font-tofino-regular mt-4 mb-0">The design effort we put & the team we  world class. Our all template.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="card card-custom-shadow">
                                    <div class="card-body">
                                        <div class="d-flex p-3">
                                            <div class="pr-4"><span class="icon2 feature-icon feature-icon2"></span></div>
                                            <div class="">
                                                <h6 class="font-18">Ready to Use Elements</h6>
                                                <p class="font-tofino-regular mt-4 mb-0">The design effort we put & the team we  world class. Our all template.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-7 pl-4">
                            <img src="src/assets/images/landingpage/right-img.png" class="feature-img ml-3 pl-1">
                        </div>
                    </div>
                </div>
            </section>
            <!-- ============================================================== -->
            <!-- updation part -->
            <!-- ============================================================== -->
            <section class="py-4 border-top border-bottom">
                <div class="container">
                    <div class="d-block d-lg-flex justify-content-between align-items-center">
                        <div class="text-center py-3 py-lg-0">
                            <span class="font-tofino-regular">Released 15th June, 2019</span>
                        </div>
                        <div class="text-center py-3 py-lg-0">
                            <span class="font-tofino-regular">Updated 15th June, 2019</span>
                        </div>
                        <div class="text-center py-3 py-lg-0">
                            <span class="font-tofino-regular">Bootstrap Version 4.3.1</span>
                        </div>
                        <div class="text-center py-3 py-lg-0">
                            <span class="font-tofino-regular">License <a href="#" class="text-decoration-none border-bottom border-info ml-2">MIT License</a></span>
                        </div>
                        <div class="text-center py-3 py-lg-0">
                            <span class="font-tofino-regular"><a href="#" class="text-decoration-none border-bottom border-info ml-2">View Change Log</a></span>
                        </div>
                    </div>
                </div>
            </section>
            <!-- ============================================================== -->
            <!-- Link section -->
            <!-- ============================================================== -->
            <div class="my-5 text-center">
                <a href="javascript:void(0)" class="btn btn-custom btn-info downloadcount123 btn-shadow-v1 font-tofino-medium" data-toggle="modal" data-target="#download-modal">
                    <i data-feather="download" class="data-icon mr-2 mb-1"></i>
                    Free Download</a>
                <a href="http://adminmart.com/src/html/index.html" target="_blank" class="text-decoration-none text-dark font-17 ml-4 font-tofino-medium border-bottom border-dark">Live
                    Preview</a>
            </div>
            <!-- ============================================================== -->
            <!-- para section -->
            <!-- ============================================================== -->
            <section class="py-5">
                <div class="container text-center">
                    <div class="row justify-content-center">
                        <div class="col-md-11">
                            <p class="font-tofino-regular font-18">Are you looking for the best premium or <a href="#" class="text-dark font-tofino-medium">free Bootstrap Admin Templates</a>, UI Kits or Angular Dashboards for your projects? You are in the right place, as <a href="https://www.wrappixel.com/" class="text-dark font-tofino-medium">WrapPixel is here to offer you all of that and so much more</a>. You can find a variety of templates, bundles and a great number of features. In addition, you can get free as well as paid templates very fast.</p>
                        </div>
                    </div>
                </div>
            </section>
            
            <!-- Footer section -->
            <footer class="py-4">
                <p class="mb-0 text-center">
                    copyright 2019. All rights reserved by AdminMart.
                </p>
            </footer>
        </div>
        <!-- ============================================================== -->
        <!-- End page wrapperHeader part -->
        <!-- ============================================================== -->
    </div>
</body>
<!-- ============================================================== -->
<!-- All Jquery -->
<!-- ============================================================== -->

<script src="src/assets/libs/popper.js/dist/umd/popper.min.js"></script>
<script src="src/assets/libs/bootstrap/dist/js/bootstrap.min.js"></script>
<script type="text/javascript">
            jQuery(document).on('click','.dcount',function(){
                jQuery('#counter').html('Loading...') ;
                var ajax = jQuery.ajax({
                    method : 'get',
                    url : 'index.php', // Link to this page
                    data : { 'increase' : '1' }
                }) ;
                ajax.done(function(data){
                    jQuery('#counter').html(data) ;
                }) ;
                ajax.fail(function(data){
                    alert('ajax fail : url of ajax request is not reachable') ;
                }) ;
            }) ;
        </script>
<script src="src/dist/js/jquery.ui.highlight.min.js"></script>
<script src="src/dist/js/pandalocker.js"></script>
<script src="src/dist/js/feather.min.js"></script>
<script type="text/javascript">
    $(function () {
        feather.replace();
        $('a.nav-link, .dm-btn').on('click', function (event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 10
            }, 1000);
            event.preventDefault();
        });
    }); 
</script>

<script>
$(document).ready(function ($) {
   $('.ctod').sociallocker({
    theme: 'flat',
    facebook:{
       appId: '127988287842860'
    },
    buttons:{
       order: ["facebook-share","twitter-tweet"],
       counters: true,
       lazy: true
    },
    text: {
      header: "Like us To Unlock This Content",
      message: "This content is locked. Like us on Twitter, Facebook or Google plus to unlock it."
    },
   });
});
</script>
<div class="modal fade" id="download-modal">
    <div class="modal-dialog modal-dialog-centered">

        <div class="modal-content">
             <div class="modal-header">
                <h4 class="modal-title">Download template</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>

            <div class="modal-body" style="background: #f5f8fa; padding:35px;">
                <div class="ctod text-center">
                <h3>Thanks for sharing</h3>
                <a href="package.zip" class="btn btn-custom dcount btn-info btn-shadow-v1 font-tofino-medium">
                    <i data-feather="download" class="data-icon mr-2 mb-1"></i> Click to Download</a>
                </div>
            </div>
        </div>
    </div>
</div>
<!-- End - Email Send Custom JS -->

</html>