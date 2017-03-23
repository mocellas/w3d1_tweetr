/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement(tweetObj) {
    var $tweet = $('<article></article>');
    // Header
    var $header = $('<header></header>');
    var $avatar = $('<img>').addClass('tweet-thumbnail');
    $avatar.attr('src',tweetObj.user.avatars.small);
    $header.append($avatar);
    //var $headerText = $('<h3></h3>').text(tweetObj.user.name);
    //$header.append($headerText);
    var $username = $(`<div class="hardcoded">${tweetObj.user.handle}</div>`);
        $header.append($username);
        $tweet.append($header);

    // Body
    var $tweetText = $('<p></p>').text(tweetObj.content.text);
    $tweet.append($tweetText);

    // Footer
    var $footer = $('<footer></footer>');
    var postTimeDiff = new Date(new Date().getTime() - new Date(tweetObj.created_at).getTime());
    var postDaysAgo = Math.round(postTimeDiff/1000/60/60/24);
    var $span = $('<span></span>').addClass('tweet-timestamp').text(postDaysAgo + " days ago");
    $footer.append($span);
    var $div = $('<div></div>').addClass('tweet-interact-icons');

    //Hover
    var $iconsRetweet = $('<i class="fa fa-retweet" aria-hidden="true"></i>');
    var $iconsHeart = $('<i class="fa fa-heart" aria-hidden="true"></i>');
    var $iconsFlag = $('<i class="fa fa-flag" aria-hidden="true"></i>');
    $div.append($iconsFlag).append($iconsRetweet).append($iconsHeart);
    $footer.append($div);
    $tweet.append($footer);
    return $tweet;
}



function renderTweets(tweetsArr) {
    tweetsArr.forEach((tweet) => {
        $('#tweets').append(createTweetElement(tweet));
    });
}