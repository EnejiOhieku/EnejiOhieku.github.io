---
layout: post
title: Self Driving Robot Simulation
description:  Tihs a virtual environment with a robot using a virtual camera to navigte around. I designed a playfield for a robot with URDF and xacro. The robot to was built using URDF and xacro to implementing its joints and mechanics. Properties such as mass, inertia, coefficients of friction was well the defined. Using gazebo plugins i was able to enable cameras in gazebo on the robot of which i used a ROS node to use that image do computer vision processing on it and publish velocity command messages on a topic. The specification of the system was tailored towards The World Robot Olympiad Gameplay rules. I presented the project to participate in the competition in a team as a preamble to the Physical implementation. This was a project in 300L second semester to consolidate my ROS2 training using the online documentation and the theory of machines course i took that semester.


skills: 
  - ROS2
  - Python
  - C++
  - Gazebo
  - OpenCV
  - Kinematics
  - Coordinate Transform
  - URDF/SDF
  - Xacro
  - Linux (Shell)

main-image: /image.png
---

---

## Control with Teleop Keyboard

{% include youtube-video.html id="UGpp_M0Xb5Y" autoplay = "true" %}

## Control with Opencv

{% include youtube-video.html id="RFW0DlEDowk" autoplay = "true" %}

[check out the project on github](https://github.com/EnejiOhieku/World_Robot_Olympiad_mathbot)

---
