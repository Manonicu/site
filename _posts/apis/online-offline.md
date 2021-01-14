---
date: "2019-02-10"
title: "online&offline"
tags: js
description: "当浏览器从在线与离线状态中切换时，这两个事件会在页面的 body 上触发"
---

> 当浏览器从在线与离线状态中切换时，这两个事件会在页面的 body 上触发，并冒泡到 document 和 window。可使用 window、document、document.body、添加监听事件`addEventListener`。

## 使用方法

```javascript
//网络状态
window.addEventListener("load", () => {
	const updateOnlineStatus = () => {
		this.online = navigator.onLine;
	};

	window.addEventListener("online", updateOnlineStatus);
	window.addEventListener("offline", updateOnlineStatus);
});
```