<template>
  <main>
    <br />
    <nav>
      <div class="nav-left">
        <ul>
          <li>
            <img src="../assets/images/notification.png" />
          </li>
          <li>
            <img src="../assets/images/inbox.png" />
          </li>
          <li>
            <img src="../assets/images/video.png" />
          </li>
        </ul>
      </div>
      <div class="nav-right">
        <div class="search-box">
          <img src="../assets/images/search.png" />
          <input type="text" placeholder="Search" />
        </div>
        <div class="nav-user-icon online" onclick="settingsMenuToggle();">
          <img src="../assets/images/profile-pic.png" />
        </div>
      </div>

      <div class="settings-menu">
        <div id="dark-btn">
          <span></span>
        </div>
        <div class="settings-menu-inner">
          <div class="user-profile">
            <img src="../assets/images/profile-pic.png" />
            <div>
              <p>John Nicholson</p>
              <a href="#">See Your Profile</a>
            </div>
          </div>
          <hr />
          <div class="user-profile">
            <img src="../assets/images/feedback.png" />
            <div>
              <p>Give Feedback</p>
              <a href="#">Help us to improve the new design</a>
            </div>
          </div>
          <hr />

          <div class="settings-links">
            <img src="../assets/images/setting.png" class="settings-icon" />
            <a href="#">Settings & Privacy</a>
            <img src="../assets/images/arrow.png" width="10px" />
          </div>
          <div class="settings-links">
            <img src="../assets/images/help.png" class="settings-icon" />
            <a href="#">Help & Support</a>
            <img src="../assets/images/arrow.png" width="10px" />
          </div>
          <div class="settings-links">
            <img src="../assets/images/display.png" class="settings-icon" />
            <a href="#">Display & Accessibility</a>
            <img src="../assets/images/arrow.png" width="10px" />
          </div>
          <div class="settings-links">
            <img src="../assets/images/logout.png" class="settings-icon" />
            <a href="#">Logout</a>
            <img src="../assets/images/arrow.png" width="10px" />
          </div>
        </div>
      </div>
    </nav>

    <div class="container">
      <div class="left-sidebar">
        <div class="imp-links">
          <a href="#">
            <img src="../assets/images/news.png" />
            Latest news
          </a>
          <a href="#">
            <img src="../assets/images/friends.png" />
            Friends
          </a>
          <a href="#">
            <img src="../assets/images/group.png" />
            Groups
          </a>
          <a href="#">
            <img src="../assets/images/marketplace.png" />
            Marketplace
          </a>
          <a href="#">
            <img src="../assets/images/watch.png" />
            Watch
          </a>
          <a href="#"> See More </a>
        </div>
        <div class="shortcut-links">
          <p>Your Shortcuts</p>
          <a href="#">
            <img src="../assets/images/shortcut-1.png" />
            Web Developers
          </a>
          <a href="#">
            <img src="../assets/images/shortcut-2.png" />
            Web Design Course
          </a>
          <a href="#">
            <img src="../assets/images/shortcut-3.png" />
            Full Stact Development
          </a>
          <a href="#">
            <img src="../assets/images/shortcut-4.png" />
            Website Experts
          </a>
        </div>
      </div>
      <div class="main-content">
        <div class="story-gallery">
          <div class="story story1">
            <img src="../assets/images/upload.png" />
            <p>Post Story</p>
          </div>
          <div class="story story2">
            <img src="../assets/images/member-1.png" />
            <p>Alison</p>
          </div>
          <div class="story story3">
            <img src="../assets/images/member-2.png" />
            <p>Jackson</p>
          </div>
          <div class="story story4">
            <img src="../assets/images/member-3.png" />
            <p>Samona</p>
          </div>
          <div class="story story5">
            <img src="../assets/images/member-4.png" />
            <p>John</p>
          </div>
        </div>
        <div class="write-post-container">
          <div class="user-profile">
            <img src="../assets/images/profile-pic.png" />
            <div>
              <p>John Nicholson</p>
              <small>
                Public
                <i class="fas fa fa-caret-down"></i>
              </small>
            </div>
          </div>
          <div class="post-input-container">
            <textarea
              rows="3"
              placeholder="What's on your mind, John?"
            ></textarea>
            <div class="add-post-links">
              <a href="#">
                <img src="../assets/images/live-video.png" />
                Live Video
              </a>
              <a href="#">
                <img src="../assets/images/photo.png" />
                Photo/Video
              </a>
              <a href="#">
                <img src="../assets/images/feeling.png" />
                Feeling/Activity
              </a>
            </div>
          </div>
        </div>
        <div class="post-container">
          <div class="post-row">
            <div class="user-profile">
              <img src="../assets/images/member-3.png" />
              <div>
                <p>Samona Rose</p>
                <span>June 21 2021, 13:40</span>
              </div>
            </div>
            <a href="#">
              <i class="fa fa-ellipsis-v"></i>
            </a>
          </div>

          <p class="post-text">
            Subscribe <span>@LetsTryThis</span> YouTube Channel to watch more
            videos on website development and UI Designs.
          </p>
          <img src="../assets/images/feed-image-1.png" class="post-img" />
          <div class="post-row">
            <div class="activity-icons">
              <div>
                <img src="../assets/images/like-blue.png" />
                120
              </div>
              <div>
                <img src="../assets/images/comments.png" />
                19
              </div>
              <div>
                <img src="../assets/images/share.png" />
                120
              </div>
            </div>
            <div class="post-profile-icon">
              <img src="../assets/images/profile-pic.png" />
              <i class="fas fa fa-caret-down"></i>
            </div>
          </div>
        </div>
        <div class="post-container">
          <div class="post-row">
            <div class="user-profile">
              <img src="../assets/images/member-1.png" />
              <div>
                <p>Alison Mina</p>
                <span>June 21 2021, 3:40</span>
              </div>
            </div>
            <a href="#">
              <i class="fa fa-ellipsis-v"></i>
            </a>
          </div>

          <p class="post-text"></p>
          <img src="../assets/images/feed-image-2.png" class="post-img" />
          <div class="post-row">
            <div class="activity-icons">
              <div>
                <img src="../assets/images/like.png" />
                120
              </div>
              <div>
                <img src="../assets/images/comments.png" />
                19
              </div>
              <div>
                <img src="../assets/images/share.png" />
                120
              </div>
            </div>
            <div class="post-profile-icon">
              <img src="../assets/images/profile-pic.png" />
              <i class="fas fa fa-caret-down"></i>
            </div>
          </div>
        </div>
        <div class="post-container">
          <div class="post-row">
            <div class="user-profile">
              <img src="../assets/images/profile-pic.png" />
              <div>
                <p>John Nicholson</p>
                <span>June 21 2021, 13:40</span>
              </div>
            </div>
            <a href="#">
              <i class="fa fa-ellipsis-v"></i>
            </a>
          </div>

          <p class="post-text">
            Subscribe <span>@LetsTryThis</span> YouTube Channel to watch more
            videos on website development and UI Designs.
            <a href="#">#letstrythis</a>
            <a href="#">#youtube</a>
          </p>
          <img src="../assets/images/feed-image-3.png" class="post-img" />
          <div class="post-row">
            <div class="activity-icons">
              <div>
                <img src="../assets/images/like.png" />
                120
              </div>
              <div>
                <img src="../assets/images/comments.png" />
                19
              </div>
              <div>
                <img src="../assets/images/share.png" />
                120
              </div>
            </div>
            <div class="post-profile-icon">
              <img src="../assets/images/profile-pic.png" />
              <i class="fas fa fa-caret-down"></i>
            </div>
          </div>
        </div>
        <div class="post-container">
          <div class="post-row">
            <div class="user-profile">
              <img src="../assets/images/profile-pic.png" />
              <div>
                <p>John Nicholson</p>
                <span>June 21 2021, 13:40</span>
              </div>
            </div>
            <a href="#">
              <i class="fa fa-ellipsis-v"></i>
            </a>
          </div>

          <p class="post-text"></p>
          <img src="../assets/images/feed-image-4.png" class="post-img" />
          <div class="post-row">
            <div class="activity-icons">
              <div>
                <img src="../assets/images/like.png" />
                120
              </div>
              <div>
                <img src="../assets/images/comments.png" />
                19
              </div>
              <div>
                <img src="../assets/images/share.png" />
                120
              </div>
            </div>
            <div class="post-profile-icon">
              <img src="../assets/images/profile-pic.png" />
              <i class="fas fa fa-caret-down"></i>
            </div>
          </div>
        </div>
        <div class="post-container">
          <div class="post-row">
            <div class="user-profile">
              <img src="../assets/images/profile-pic.png" />
              <div>
                <p>John Nicholson</p>
                <span>June 21 2021, 13:40</span>
              </div>
            </div>
            <a href="#">
              <i class="fa fa-ellipsis-v"></i>
            </a>
          </div>

          <p class="post-text"></p>
          <img src="../assets/images/feed-image-5.png" class="post-img" />
          <div class="post-row">
            <div class="activity-icons">
              <div>
                <img src="../assets/images/like.png" />
                120
              </div>
              <div>
                <img src="../assets/images/comments.png" />
                19
              </div>
              <div>
                <img src="../assets/images/share.png" />
                120
              </div>
            </div>
            <div class="post-profile-icon">
              <img src="../assets/images/profile-pic.png" />
              <i class="fas fa fa-caret-down"></i>
            </div>
          </div>
        </div>
        <button type="button" class="load-more-btn">Load More</button>
      </div>
      <div class="right-sidebar">
        <div class="sidebar-title">
          <h4>Events</h4>
          <a href="#">See All</a>
        </div>
        <div class="event">
          <div class="left-event">
            <h3>18</h3>
            <span>March</span>
          </div>
          <div class="right-event">
            <h4>Social Media</h4>
            <p>
              <i class="fa fa-map-marker"></i>
              Willson Tech Park
            </p>
            <a href="#">More Info</a>
          </div>
        </div>
        <div class="event">
          <div class="left-event">
            <h3>22</h3>
            <span>June</span>
          </div>
          <div class="right-event">
            <h4>Mobile Marketing</h4>
            <p>
              <i class="fa fa-map-marker"></i>
              Willson Tech Park
            </p>
            <a href="#">More Info</a>
          </div>
        </div>

        <div class="sidebar-title">
          <h4>Advertisement</h4>
          <a href="#">Close</a>
        </div>
        <img src="../assets/images/advertisement.png" class="sidebar-ads" />

        <div class="sidebar-title">
          <h4>Conversation</h4>
          <a href="#">Hide Chat</a>
        </div>
        <div class="online-list">
          <div class="online">
            <img src="../assets/images/member-1.png" />
          </div>
          <p>Alison Mina</p>
        </div>
        <div class="online-list">
          <div class="online">
            <img src="../assets/images/member-2.png" />
          </div>
          <p>Jackson Aston</p>
        </div>
        <div class="online-list">
          <div class="online">
            <img src="../assets/images/member-3.png" />
          </div>
          <p>Samona Rose</p>
        </div>
        <div class="online-list">
          <div class="online">
            <img src="../assets/images/member-4.png" />
          </div>
          <p>John Doe</p>
        </div>
      </div>
    </div>

    <div class="footer">
      <p>Copyright 2021 - Lets Try This YouTube Channel</p>
    </div>

    <script type="application/javascript">
      var settingsMenu = document.querySelector(".settings-menu");
      var darkBtn = document.getElementById("dark-btn");

      function settingsMenuToggle() {
        settingsMenu.classList.toggle("settings-menu-height");
      }

      darkBtn.onclick = function () {
        darkBtn.classList.toggle("dark-btn-on");
        document.body.classList.toggle("dark-theme");
      };
    </script>
  </main>
  <!-- End #main -->
</template>

<script>
export default {};
</script>

<style>
@import url("../assets/css/chat.css");
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");
</style>
