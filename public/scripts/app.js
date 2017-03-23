/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement(tweetObj) {
    var tweet = `<article>
          <header>
            <img src="/images/Ernest.png"  width="60px" height="60px" border-style="solid"> ${tweetObj.user.name}
          </header>
          <div>
          <p>This tweet was posted a few minutes ago</p> ${tweetObj.user.content}
          </div>
            <footer> ${tweetObj.user.createdAt}
              <p> 10 days ago</p>
              <i class="fa fa-retweet" aria-hidden="true"></i>
              <i class="fa fa-heart" aria-hidden="true"></i>
              <i class="fa fa-flag" aria-hidden="true"></i>
            </footer>
        </article>`;

    // <div id="one">one</div>
    var d1 = document.getElementById('new-tweets');
    d1.insertAdjacentHTML('afterbegin', tweet);
}

function renderTweets(tweetsArr) {
    tweetsArr.forEach((tweet) => {
        $('#tweets').append(createTweetElement(tweet));
    });
}