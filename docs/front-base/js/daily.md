# 日常积累

## 批量下载文件

```js
const downloadFile = (list, index) => {
  if (index >= list.length) return;
  const { name, url } = list[index];
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.responseType = 'blob';
  xhr.onload = () => {
      let url = window.URL.createObjectURL(xhr.response);
      let a = document.createElement('a');
      a.href = url;
      a.download = name;
      a.click();
      downloadFile(list, index + 1);
  };
  xhr.send();
};
```

## 下载图片

```js
const downloadFile = (imgSrc) => {
  const image = new Image();
  const name = imgSrc?.split?.('/').pop() || Math.random().toString(32).slice(2);

  image.setAttribute('crossOrigin', 'anonymous');

  image.onload = () => {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;

    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, image.width, image.height);
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.download = name;
      a.href = url;
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    });
  };
  image.src = imgSrc;
};
```
