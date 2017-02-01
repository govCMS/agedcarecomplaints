<?php
/**
 * @file
 * page.tpl.php - Returns the HTML for a single Drupal page.
 */
?>
<!-- Purple navigation bar on the top -->
<div id="top_nav">
  <div class="container">
    <div class="menu-top-container">
      <ul id="menu-top" class="menu">
        <li id="menu-item-212"
            class="lang-item menu-item menu-item-type-post_type menu-item-object-page menu-item-212">
          <a href="/in-your-language">In your Language</a></li>
        <li id="menu-item-186"
            class="subscribe-item menu-item menu-item-type-post_type menu-item-object-page menu-item-186">
          <a href="/subscribe">Subscribe</a></li>
        <li id="menu-item-179"
            class="latest-item menu-item menu-item-type-post_type menu-item-object-page menu-item-179">
          <a href="/latest-news">Latest News</a></li>
        <li id="menu-item-228"
            class="faq-item menu-item menu-item-type-post_type menu-item-object-page menu-item-228">
          <a href="/faqs">FAQs</a></li>
        <li id="menu-item-415"
            class="order-item menu-item menu-item-type-post_type menu-item-object-page menu-item-415">
          <a href="/resources/order-resources">Order Resources</a></li>
      </ul>
    </div>
    <div class="search_box" role="search">
      <?php print $search_box; ?>
    </div><!-- End search_box -->
  </div><!-- End container -->
</div>

<header id="header" role="banner">
  <div class="container">
    <div class="logo">
      <a href="http://agedcarecomplaints-wp.local/"><img
          src="http://agedcarecomplaints-wp.local/wp-content/themes/agedcarecomplaints/images/logo.png"
          alt="Australian Government, Aged Care Complaints"></a>
    </div><!-- End logo -->
    <div class="quote">
      <img
        src="http://agedcarecomplaints-wp.local/wp-content/themes/agedcarecomplaints/images/quote.png"
        alt="Aged Care Complaints | ">
    </div><!-- End quote -->
    <div class="lodge-header">
      <a
        href="http://agedcarecomplaints-wp.local/raising-a-complaint/lodge-a-complaint/">
        <div class="lodge-label">Lodge a complaint</div>
      </a>
      <div class="lodge-no">1800 550 552</div>
    </div><!-- End lodge-header -->
    <button id="_navigation" role="button"
            aria-label="Show and Hide Navigation Menu"><span
        class="lines"></span><span class="words screen-reader-text">Menu</span>
    </button>
    <div id="mob-nav">
      <nav role="navigation" id="mainnav">
        <div class="search_box" role="search">
          <?php print $search_box; ?>
        </div><!-- End search_box -->
        <h2 role="heading" aria-level="2" class="screen-reader-text"
            id="mainnav-h">Main navigation</h2>
        <div class="menu">
          <?php print render($page['navigation']); ?>
        </div>
      </nav>
    </div><!-- End mob-nav -->
  </div> <!-- End container -->
</header>

<div id="main-nav">
  <div class="container">
    <nav role="navigation">
      <div class="menu-main-container">
        <?php print render($page['navigation']); ?>
      </div>
    </nav>
  </div>
  <!-- End container -->
</div>

  <?php if (!empty($page['highlighted'])): ?>
    <div class="row">
      <div class="col-md-12 col-no-padding">
        <div
          class="highlighted jumbotron"><?php print render($page['highlighted']); ?></div>
      </div>
    </div>
  <?php endif; ?>

    <div id="content" class="content">

        <?php print $messages; ?>
        <section id="main-content-section"
                 class="<?php print $content_column_class; ?> content-section"
                 role="main">
          <a id="main-content"></a>
          <?php if (!empty($tabs)): ?>
            <?php print render($tabs); ?>
          <?php endif; ?>
          <?php if (!empty($page['help'])): ?>
            <?php print render($page['help']); ?>
          <?php endif; ?>
          <?php if (!empty($action_links)): ?>
            <ul class="action-links"><?php print render($action_links); ?></ul>
          <?php endif; ?>
          <div id="page-content">
            <?php print render($page['content']); ?>
          </div>
        </section>
    </div>
  </div>


<?php if (!empty($page['footer_menu'])): ?>
  <div id="footer-menu" class="container">
    <div class="row">
      <div class="col-md-9">
        <?php print render($page['footer_menu']); ?>
      </div>
      <div class="col-md-3">
        <div class="print-friendly">This site is print friendly</div>
      </div>
    </div>
  </div>
<?php endif; ?>

<?php if (!empty($page['footer'])): ?>
  <footer id="footer" class="footer <?php print $container_class; ?>">
    <div class="footer-container"><?php print render($page['footer']); ?></div>
    <div id="footer-nav">
      <div class="container">
        <p>Copyright © Commonwealth of Australia</p>
        <nav role="navigation">
          <div class="menu-footer-container">
            <ul id="menu-footer" class="menu">
              <li id="menu-item-185"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-185">
                <a
                  href="/sitemap/">Sitemap</a>
              </li>
              <li id="menu-item-216"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-216">
                <a href="/accessibility/">Accessibility</a>
              </li>
              <li id="menu-item-243"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-243">
                <a
                  href="/copyright-disclaimer/">Copyright</a>
              </li>
              <li id="menu-item-1346"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-1346">
                <a href="/terms-of-use/">Terms
                  of use</a></li>
              <li id="menu-item-696"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-696">
                <a
                  href="/website-privacy-notice/">Privacy</a>
              </li>
              <li id="menu-item-2333"
                  class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2333">
                <a href="/about/contact-us/">Contact
                  Us</a></li>
            </ul>
          </div>
        </nav>
      </div><!-- End container -->
    </div>
  </footer>
<?php endif; ?>
