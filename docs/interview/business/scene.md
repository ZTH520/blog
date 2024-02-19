# 各种场景

## 浏览器

1. **如何在不使用websocket的情况下实现本地多标签页间的聊天室通信？**
    - **SharedWorker:** SharedWorker 是一种可以被多个脚本（即多个浏览器标签页、内嵌框架或者Worker）共享的 Web Worker。通过 SharedWorker 不同的标签页可以共享同一个工作线程，从而实现数据的交换和通信。
    - **Broadcast Channel API:** 这是一个允许我们向同源的不同浏览器标签页、iframe 或者窗口发送消息的API。通过创建一个 BroadcastChannel 对象，不同的标签页可以订阅同一个频道并相互通信。
    - **LocalStorage/SessionStorage:** 当一个标签页对 LocalStorage 或 SessionStorage 进行更新时，其他标签页可以通过监听 `storage` 事件来获取更新。
    - **IndexedDB:** IndexedDB是运行在浏览器上的非关系型数据库，可以用来存储大量数据。通过IndexedDB，不同的标签页可以共享数据，并通过监听数据库的变化来实现通信。
    - **轮询(Polling):** 轮询是一种服务器和客户端通信的技术，客户端定期向服务器发送请求并接收响应。虽然这种方法效率较低，但在没有WebSocket的情况下，它可以作为一种替代方案。

