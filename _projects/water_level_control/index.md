---
layout: post
title: Water Level Control System
description:  Its a system that regulates the level of water in a tank. It uses a solenoid value to control of water to a tank and a sphygmanometer sensor to determine the water level by allowing using the change in air pressure in the pipe when the water level changes. I used an ESP8266 MCU to control the system. It also runs a local webserver that allows you to monitor and set the behavior. I calibrated the system by manually taking measurements of pressure against the actual level in litres, Then use numpy's polyfit function to fit into a quadratic equation (the graph wasn't linear). I use the coeficients in the firmware to get accurate water levels.


skills: 
  - C++
  - Python
  - ESP8266
  - HTML/CSS/JS
  - Numpy
  - Embedded System Design

main-image: /image.png
---

---

{% include youtube-video.html id="KNJtpKn5eZI" autoplay = "true" %}

---