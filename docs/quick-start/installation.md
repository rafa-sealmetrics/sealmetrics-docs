---
title: Installation
sidebar_position: 1
description: Install Sealmetrics tracking script on your website in minutes. No cookies, no consent needed.
---

# Installation

Get Sealmetrics running on your website in under 5 minutes.

## 1. Get Your Tracking Script

1. Log in to your [Sealmetrics dashboard](https://app.sealmetrics.com)
2. Go to **Settings** → **Installation**
3. Copy your unique tracking script

## 2. Add to Your Website

Add the script before the closing `</head>` tag on every page you want to track.

```html
<script>
/* SealMetrics Tracker Code */
(function() {
var options = {
   account: '6877c5da3738f4296a4916fb',
   event: 'pageview',
   use_session: 1,
};
var url="//app.sealmetrics.com/tag/v2/tracker";function loadScript(callback){var script=document.createElement("script");script.src=url;script.async=true;script.onload=function(){if(typeof callback==="function"){callback();}};script.onerror=function(){console.error("Error loading script: "+url);};document.getElementsByTagName("head")[0].appendChild(script);}loadScript(function(){options.id=Math.floor((Math.random()*999)+1);if(window.sm){var instance=new window.sm(options);instance.track(options.event);}else{console.error("sm2 plugin is not available");}});
})();
/* End SealMetrics Tracker Code */
</script>
