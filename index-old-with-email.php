
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
    <!-- Sendinblue Download Form CSS (We recommend to place the below code in head tag of your website html) -->
    <style>
        @font-face {
            font-display: block;
            font-family: Roboto;
            src: url(https://assets.sendinblue.com/font/Roboto/Latin/normal/normal/7529907e9eaf8ebb5220c5f9850e3811.woff2) format("woff2"), url(https://assets.sendinblue.com/font/Roboto/Latin/normal/normal/25c678feafdc175a70922a116c9be3e7.woff) format("woff")
        }

        @font-face {
            font-display: fallback;
            font-family: Roboto;
            font-weight: 600;
            src: url(https://assets.sendinblue.com/font/Roboto/Latin/medium/normal/6e9caeeafb1f3491be3e32744bc30440.woff2) format("woff2"), url(https://assets.sendinblue.com/font/Roboto/Latin/medium/normal/71501f0d8d5aa95960f6475d5487d4c2.woff) format("woff")
        }

        @font-face {
            font-display: fallback;
            font-family: Roboto;
            font-weight: 700;
            src: url(https://assets.sendinblue.com/font/Roboto/Latin/bold/normal/3ef7cf158f310cf752d5ad08cd0e7e60.woff2) format("woff2"), url(https://assets.sendinblue.com/font/Roboto/Latin/bold/normal/ece3a1d82f18b60bcce0211725c476aa.woff) format("woff")
        }

        #sib-container input:-ms-input-placeholder {
            text-align: left;
            font-family: "Helvetica", sans-serif;
            color: #c0ccda;
            border-width: px;
        }

        #sib-container input::placeholder {
            text-align: left;
            font-family: "Helvetica", sans-serif;
            color: #c0ccda;
            border-width: px;
        }
    </style>
    <link rel="stylesheet" href="https://assets.sendinblue.com/component/form/2ef8d8058c0694a305b0.css">
    <link rel="stylesheet" href="https://assets.sendinblue.com/component/clickable/b056d6397f4ba3108595.css">
    <link rel="stylesheet" href="https://assets.sendinblue.com/component/progress-indicator/f86d65a4a9331c5e2851.css">
    <link rel="stylesheet" href="https://sibforms.com/forms/end-form/build/sib-styles.css">
    <!-- End - Sendinblue Download Form CSS -->
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
            jQuery(document).on('click','.downloadcount',function(){
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

<!-- AdminMart Download Form Modal -->
<div class="modal fade" id="download-modal">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        
            <!-- Modal Header -->
            <div class="modal-header">
                <h4 class="modal-title">Download template</h4>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
            </div>
            <!-- End - Modal Header -->
            <!-- Modal body -->
            <div class="modal-body" style="background: #f5f8fa; padding:35px;">
                <p>To download this template just enter your email please. You will receive your download link shortly.</p>
                <div class="simple-download d-none">
                    <form class="simple-download-form" method="POST" action="">
                        <p class="status alert alert-warning" role="alert" style="display: none;">Sending mail...</p>
                        <div class="form-group">
                            <input class="form-control emailid rounded-pill" maxlength="100" type="email" id="emailid" name="emailid" placeholder="Email Address" required />
                        </div>
                        <button type="submit" id="submit-btn" name="submit-btn" class="submit-btn btn btn-custom btn-info btn-shadow-v1 font-tofino-medium mb-4 py-2">Submit</button>
                    </form>
                </div>
                <!-- Sendinblue Download Form (We recommend to place the below code where you want the form in your website html)  -->
                <div class="sib-form p-0">
                    <div id="sib-form-container" class="sib-form-container">
                        <div id="error-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-width:px; border-color:#ff4949;max-width:540px; border-width:px;">
                            <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
                                <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
                                    <path d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"
                                    />
                                </svg>
                                <span class="sib-form-message-panel__inner-text">Opps! Something went wrong. Email not sent.</span>
                            </div>
                        </div>
                        <div></div>
                        <div id="success-message" class="sib-form-message-panel" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#085229; background-color:#e7faf0; border-radius:3px; border-width:px; border-color:#13ce66;max-width:540px; border-width:px;">
                            <div class="sib-form-message-panel__text sib-form-message-panel__text--center">
                                <svg viewBox="0 0 512 512" class="sib-icon sib-notification__icon">
                                    <path d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"
                                    />
                                </svg>
                                <span class="sib-form-message-panel__inner-text">Download link has been sent successfully in email. If you did not get an email download the template from here: <a href="https://github.com/adminmart/Adminmart-lite">https://github.com/adminmart/Adminmart-lite</a></span>
                            </div>
                        </div>
                        <div></div>
                        <div id="sib-container" class="sib-container--large sib-container--vertical" style="padding: 0;background: #f5f8fa;">
                            <form id="sib-form" method="POST" action="https://224e9a3e.sibforms.com/serve/MUIEAExF2xvtab7XGbac9qmSOZUgE8E43GASjV7JFU1FpmTubtKtrqW8PW50ZGiY1q4Wwbyd9GTHgHpma17OndyuQoEZ3EgjRMNfhauqYNOuS9E2H4a3015k8X0LcYoL6QpTq80g99ZRot6W9YYOhik6KEVDTtMxjbTAS9LuwVf8yO6PSKD4t6lncWioQQQaB2vNLEg6yMCer3-a"
                                data-type="subscription">
                                <div class="form-group">
                                    <div class="sib-input sib-form-block" style="padding: 0;">
                                        <div class="form__entry entry_block">
                                            <div class="form__label-row ">
                                                <label class="entry__label" style="font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858; border-width:px;" for="FIRSTNAME" data-required="*">Name</label>
                                                <div class="entry__field">
                                                    <input class="input form-control" maxlength="200" type="text" id="FIRSTNAME" name="FIRSTNAME" autocomplete="off" placeholder="Full Name" data-required="true" required />
                                                </div>
                                            </div>
                                            <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-width:px; border-color:#ff4949;"></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="sib-input sib-form-block" style="padding: 0;">
                                        <div class="form__entry entry_block">
                                            <div class="form__label-row ">
                                                <label class="entry__label" style="font-size:16px; text-align:left; font-weight:700; font-family:&quot;Helvetica&quot;, sans-serif; color:#3c4858; border-width:px;" for="EMAIL" data-required="*">Email</label>
                                                <div class="entry__field">
                                                    <input class="input form-control" maxlength="200" type="email" id="EMAIL" name="EMAIL" autocomplete="off" placeholder="Email Address" data-required="true" required />
                                                </div>
                                            </div>
                                            <label class="entry__error entry__error--primary" style="font-size:16px; text-align:left; font-family:&quot;Helvetica&quot;, sans-serif; color:#661d1d; background-color:#ffeded; border-radius:3px; border-width:px; border-color:#ff4949;"></label>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="sib-form-block" style="padding: 0; text-align: left">
                                        <button class="sib-form-block__button sib-form-block__button-with-loader btn btn-custom btn-info btn-shadow-v1 downloadcount font-tofino-medium" style=""
                                            form="sib-form" type="submit">
                                            <svg class="icon clickable__icon progress-indicator__icon sib-hide-loader-icon" viewBox="0 0 512 512">
                                                <path d="M460.116 373.846l-20.823-12.022c-5.541-3.199-7.54-10.159-4.663-15.874 30.137-59.886 28.343-131.652-5.386-189.946-33.641-58.394-94.896-95.833-161.827-99.676C261.028 55.961 256 50.751 256 44.352V20.309c0-6.904 5.808-12.337 12.703-11.982 83.556 4.306 160.163 50.864 202.11 123.677 42.063 72.696 44.079 162.316 6.031 236.832-3.14 6.148-10.75 8.461-16.728 5.01z"
                                                />
                                            </svg>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                                <input type="text" name="email_address_check" value="" class="input--hidden">
                                <input type="hidden" name="locale" value="en">
                            </form>
                        </div>
                    </div>
                </div>
                <!-- End - Sendinblue Download Form -->
                <p class="small">When this form is submitted, I will add you to my mailing list to notify you about future updates and other Bootstrapious news.</p>
                <p class="small">Don't worry, I won't share your email with anyone. You can unsubscribe anytime.</p>
            </div>
            <!-- End - Modal body -->
        </div>
    </div>
</div>
<!-- End - AdminMart Download Form Modal -->

<!-- Sendinblue Download Form JS (We recommend to place the below code in footer or bottom of your website html)  -->
<script>
    window.REQUIRED_CODE_ERROR_MESSAGE = 'Please choose a country code';
    window.EMAIL_INVALID_MESSAGE = window.SMS_INVALID_MESSAGE = "Invalid Email. Please try again.";
    window.REQUIRED_ERROR_MESSAGE = "This field cannot be left blank.";
    window.GENERIC_INVALID_MESSAGE = "The information provided is invalid. Please review the field format and try again.";
    window.translation = {
        common: {
            selectedList: '{quantity} list selected',
            selectedLists: '{quantity} lists selected'
        }
    };
    var AUTOHIDE = Boolean(0);
</script>
<script src="https://sibforms.com/forms/end-form/build/main.js"></script>
<script src="https://www.google.com/recaptcha/api.js?hl=en"></script>
<!-- End - Sendinblue Download Form JS -->
<!-- End - Sendinblue Download Form -->

<!-- Email Send Custom JS -->
<script type="text/javascript">

    /*Perform AJAX on simple-download-form submit*/
    jQuery( 'form.simple-download-form' ).on( 'submit', function( e ){
        var p_status = jQuery( 'p.status', this );
        p_status.fadeIn();

        var emailid = jQuery( '.emailid', this ).val(); alert(emailid);

        jQuery.ajax( {
            type: 'POST',
            dataType: 'json',
            url: 'ajaxemail.php',
            data: { 'emailid'   : emailid, }, success: function( data ){

                if ( data.status ){

                    p_status.removeClass( 'alert-warning' );
                    p_status.addClass( 'alert-success' );
                    alert ('Sent');

                } else {

                    p_status.removeClass( 'alert-warning' );
                    p_status.addClass( 'alert-danger' );
                    alert ('Not Sent');
                }
                p_status.text( data.message );
                p_status.fadeIn();
            }
        });
        e.preventDefault();
    });

</script>
<!-- End - Email Send Custom JS -->

</html>