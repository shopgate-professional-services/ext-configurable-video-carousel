# Shopgate Connect - Extension configurable-video-carousel

General extension that will create a configurable video carousel as a widget.
*Important* Carousel slide auto play is disabled

## Demo & Examples
[See here](demo/index.md)

## About Widget Configuration
- `buttonFontColor` (string): Color of the internal font for carousel buttons
- `backgroundColor` (string): Background for the lazy loaded video
- `buttonBorder` (string): Border css for carousel buttons
- `buttonPadding` (string): Padding css for carousel buttons
- `buttonBoxShadow` (string): Box shadow css for carousel buttons
- `buttonBackground` (string): Background color for carousel buttons
- `buttonBorderRadius` (string): Border Radius css for carousel buttons
- `buttonSize` (number): Setting to determine size of carousel buttons
- `buttonType` (string): Setting to render text or arrows in carouselt buttons. Values are "arrow" or "text"
- `buttonWrapperWidth` (string): Width setting for carousel button container
- `spaceBetweenSlider` (number): Setting to determine space between slides
- `numberSlidesPerView` (number): Setting to determine number of slides per view
- `slideInfo` (Object): Info to render slides in carousel
  - `type` (string): Video or Image
  - `src` (string): Src Value for video or image
  - `alt` (string): alternative value title for video or image
- `widgetWidth` (string): Value for width of widget

## Example Widget Configuration
```
<!--Widget
{
  "type": "@shopgate-project/configurable-video-carousel/ConfigurableCarousel",
  "settings": {
    "backgroundColor": "grey",
    "buttonBackground": "#fff",
    "buttonBorder": "none",
    "buttonBorderRadius": "50%",
    "buttonBoxShadow": "0 8px 13px rgba(0, 0, 0, 0.25)",
    "buttonFontColor": "#5ccee3",
    "buttonPadding": "0",
    "buttonSize": 20,
    "buttonType": "arrow",
    "buttonWrapperWidth": "60%",
    "numberSlidesPerView": 1,
    "spaceBetweenSlides": 30,
    "slideInfo": [ 
      { 
        "alt":"monin 1",
        "type":"video",
        "src":"https://www.youtube.com/embed/A5hoC4b5xes"
      },
      { 
        "alt":"monin 2",
        "type":"video",
        "src":"https://www.youtube.com/embed/hWOs7aqnhBg"
      },
      { 
        "alt":"monin 3",
        "type":"video",
        "src":"https://www.youtube.com/embed/LuEroM5JTTM"
      },
      { 
        "alt":"monin 4",
        "type":"video",
        "src":"https://www.youtube.com/embed/XSBqhoAc5vI"
      },
      { 
        "alt":"Mountain Cat",
        "type":"image",
        "src":"http://data.shopgate.com/shop_widget_images/24797/3692ec7a133d85701f713e624ceb4d51.min.jpeg"
      }
    ],
    "widgetWidth": "95%"
  }
}
-->
```

## About Shopgate

Shopgate is the leading mobile commerce platform.

Shopgate offers everything online retailers need to be successful in mobile. Our leading
software-as-a-service (SaaS) enables online stores to easily create, maintain and optimize native
apps and mobile websites for the iPhone, iPad, Android smartphones and tablets.

## License

Shopgate Connect - Extension Boilerplate is available under the Apache License, Version 2.0.

See the [LICENSE](./LICENSE) file for more information.
