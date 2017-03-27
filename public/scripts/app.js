/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Fake data taken from tweets.json
var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

const createTweetElement = function (tweet) {
  return `
  <article class="tweet">
    <header>
      <img class="avatar"src="${tweet.user.avatars.small}">
      <h2 class="user-name">${tweet.user.name}</h2>
      <small class="user-handle">${tweet.user.handle}</small>
    </header>
    <div class="tweet-body">
      <p>${tweet.content.text}</p>
    </div>
    <footer>
      <small class="age">10 days ago</small>
      <span class="actions">
        <a href="#"><i class="fa fa-flag" <="" i=""></i></a>
        <a href="#"><i class="fa fa-retweet" <="" i=""></i></a>
        <a href="#"><i class="fa fa-heart" <="" i=""></i></a>
      </span>
    </footer>
  </article>
  <p>
  `;
}

function renderTweets(tweets) {
  $("#new-tweets").append(tweets.map(createTweetElement));
}

$(document).on("ready", function() {
  renderTweets(data)
 });


// 1) console log user's typed message on submit
        function userTweets(tweet){
          if (tweet === null) {
            console.log("First if", userTweets);
            // () is a way to invoke a function
            // '' is value of empty string of Type String
          } else if (tweet === '') {
            console.log("Second If", usertTweets);
          } else if (tweet.length > 140)
            console.log("First else", userTweets)
        // 2) add some validation on what the user typed
        //     - not null
        //     - not "" or not 0 characters
        //     - under 140 characters
      };




