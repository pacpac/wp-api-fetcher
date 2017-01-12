/* 
 * PACPAC LLC 2017
 * Greg Zaytsev
 */

function pacpac_fetch_wp_posts() {
    
    var WP_API = "http://yourdomain/wp-json/wp/v2/posts?per_page=5";
    
    $.ajax({
        dataType: "json",
        url: WP_API,
        mimeType: "application/json",
        success: function(result){
            var container = document.getElementById("ft-blog-feed");
            $.each(result, function(i, obj) {
                var entry = obj;

                var divDate = document.createElement("div");
                var divTitle = document.createElement("div");
                var linkTitle = document.createElement("a");
                
                pubDate = new Date(obj.date);
                stringDate = pubDate.toLocaleDateString();
                divDate.setAttribute("class", "news_date");
                divDate.appendChild(document.createTextNode(stringDate));
                container.appendChild(divDate);
                
                linkTitle.setAttribute("href", obj.link);
                linkTitle.setAttribute('style', "text-decoration:none;");
                divTitle.setAttribute("class", "news_title");
                linkTitle.appendChild(document.createTextNode(entry.title.rendered));
                divTitle.appendChild(linkTitle);
                container.appendChild(divTitle);
            });
            var divSeeMore = document.getElementById("ft-blog-feed-see-more");
            container.appendChild(divSeeMore);
        }
    });
};

$(function() {
    pacpac_fetch_wp_posts();
});
