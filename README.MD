###### Documentation

### Brand-asset.js is JS-library for simple making images-links for logotypes

##### Connecting brand-asset.js

```html
<head>
  <script type="text/javascript" src="http://best-equations.ru/ba.js/"></script>
</head>
```
or download code file

#### Commands:
### ba(image, link, width)
Example:
```js
ba("samsung.img", "https://samsung.com", "20vh");
```
###### image:
Image link.
###### link:
Brand website link.
If you set "" or "-" or don't set this argument, only image setted by default.
###### width:
Optionaly argument, 250px by default. The height is set automatically.

### bastore(store, product, width)
Example:
```js
bastore("google_play", "com.instagram.android", "40px");
```
###### store:
Store (App Store ("app_store"), Google Play ("google_play")).
If the value is not "app_store" or "google_play", this argument specifies a link to a custom store image.
###### product:
Poduct name.
If the store is "google_play", this argument must be the name of the application package ("com.instagram.android", "com.google.android.youtube").
If the store is "app_store", this argument should simply be a link to the product in the App Store ("https://apps.apple.com/ru/app/youtube/id544007664" for example).
If the store is custom, this argument is just a link to the product.
###### width:
Optionaly argument, 250px by default. The height is set automatically.
