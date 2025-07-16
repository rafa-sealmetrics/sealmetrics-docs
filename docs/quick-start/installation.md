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
<!-- Sealmetrics Tracking Script -->
<script>
(function(s,e,a,l,m,t,r,i,c,s) {
  s[c] = s[c] || function() { (s[c].q = s[c].q || []).push(arguments) };
  s[c].l = 1 * new Date(); a = e.createElement(l), m = e.getElementsByTagName(l)[0];
  a.async = 1; a.src = r; m.parentNode.insertBefore(a, m)
})(window, document, 'sealmetrics', 'script', 'https://cdn.sealmetrics.com/v1/seal.js');

sealmetrics('init', 'YOUR_SITE_ID');
</script>
