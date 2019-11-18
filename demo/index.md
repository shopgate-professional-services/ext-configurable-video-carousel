# Demo

## Widget Configurations

### Autoplay Configurations
- `autoplayValue`: Expects either a object containing parameters `delay` and disableOnInteraction, or a boolean value. A value of `true` will use default `delay` and `disableOnInteraction` values, and `false` will disable autoplay.
#### Config:
```json 
{
  "settings": {
    "autoplayValue": {
      "delay":8000,
      "disableOnInteraction":true
    }
  }
}
```

### Button Configurations
- `buttonBackground`: Expects a color value as a string
- `buttonBorder`: Expects a css border value as a string
- `buttonBorderRadius`: Expects a css border-radius value as a string
- `buttonBoxShadow`: Expects a css box-shadow value as a string
- `buttonFontColor`: Expects a color value as a string
- `buttonPadding`: Expects a css padding value as a string
- `buttonSize`: Expects a numeric value for button sizing
- `buttonType`: Expects either a `text` or `arrow` value
- `buttonWrapperWidth`: Expects a css width value as a string


#### Config:
```json 
{
  "settings":{
    "buttonBackground": "#fff",
    "buttonBorder": "none",
    "buttonBorderRadius": "50%",
    "buttonBoxShadow": "0 8px 13px rgba(0, 0, 0, 0.25)",
    "buttonFontColor": "#5ccee3",
    "buttonPadding": "0",
    "buttonSize": 20,
    "buttonType": "arrow",
    "buttonWrapperWidth": "60%"
  }
}
```

![](ButtonConfigurations.png)

### Carousel Configurations
- `backgroundColor`: Expects a color value as a string. Used to provide a background for loading videos.
- `numberSlidesPerView`: Expects a number. Sets the number of slides in view
- `spaceBetweenSlides`: Expects a number. Sets the space between slides
- `slideInfo`: Expects an array containing information for each slide in the carousel
  - `alt`: Expects a string that provies a alternative titled for a slide
  - `type`: Expects a string that denotes whether the slide is a `video` or an `img`
  - `src`: Expects a string that contains the src for the image or video.
- `widgetWidth`: Expects a css width value as a string

#### Config:
```json 
{
  "settings":{
    "backgroundColor": "black",
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
```

![](SliderView.png)
