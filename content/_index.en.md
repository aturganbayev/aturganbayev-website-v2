---
title: "Azamat Turganbayev"
name: "Azamat Turganbayev"
subtitle: "MS in Robotics student, University of Minnesota"
profile_picture: "images/profile-sm.jpg"
cv: "files/ATurganbayev_CV.pdf"

socials:
  - name: github
    icon: github
    label: "GitHub"
    link: "https://github.com/aturganbayev"
  - name: linkedin
    icon: linkedin
    label: "LinkedIn"
    link: "https://www.linkedin.com/in/aturganbayev"
  - name: scholar
    icon: scholar
    label: "Google Scholar"
    link: "https://scholar.google.com/citations?user=jgoXh5oAAAAJ&hl=en"
  - name: researchgate
    icon: researchgate
    label: "ResearchGate"
    link: "https://www.researchgate.net/profile/Azamat-Turganbayev"
  - name: email
    icon: email
    label: "Email"
    link: "mailto:turga0607@gmail.com"
    display: "turga0607@gmail.com"

skills:
  - group: "Programming Languages & Libraries"
    tags: ["Python", "C/C++", "MATLAB", "OpenCV"]
  - group: "Robotics Frameworks & Tools"
    tags: ["ROS / ROS2", "UR5", "URScript", "RoboDK", "Gazebo", "Linux", "Git", "Docker"]
  - group: "Modeling & Simulation"
    tags: ["SolidWorks", "MATLAB/Simulink", "QUARC", "3D printing"]
  - group: "Control Systems"
    tags: ["PID control optimization", "Real-time systems", "Motion planning"]

timeline:
  - type: "experience"
    title: "Research Assistant"
    subtitle: "Tactile Robotics Laboratory"
    subtitle_link: "https://tact.nu.edu.kz/"
    date: "May 2026 – Present"
    location: "Astana, Kazakhstan"
    body: |
      - Developed an automated tactile exploration system for a UR5 robot arm, enabling systematic, calibrated surface-contact mapping with synchronized force sensing on simulated and physical robots.
      - See the [Tactile Surface Exploration project](#tactile-ur5) for implementation details.

  - type: "project"
    id: "tactile-ur5"
    title: "Tactile Surface Exploration with UR5"
    subtitle: "Tactile Robotics Laboratory"
    subtitle_link: "https://tact.nu.edu.kz/"
    date: "May 2026 – Present"
    location: "Astana, Kazakhstan"
    links:
      - label: "GitHub"
        href: "https://github.com/aturganbayev/tactile_UR5"
    body: "Built an end-to-end pipeline for automated tactile exploration of a silicone cone with a UR5 arm, calibrating surface geometry from CAD and synchronizing contact-force recordings across simulated and physical robots."

  - type: "project"
    id: "flashlight-assembly"
    title: "Automated Flashlight Assembly with UR5"
    subtitle: "ME 5286 – Robotics, University of Minnesota"
    date: "March 2026"
    location: "Minneapolis, MN"
    links:
      - label: "GitHub"
        href: "https://github.com/aturganbayev/ME5286_UR5_Flashlight_Assembly#me5286-lab-4--ur5-flashlight-assembly"
      - label: "Report"
        href: "files/ME5286_Flashlight_Assembly.pdf"
    body: "Programmed a UR5 robot via the RoboDK Python API to autonomously assemble a three-part flashlight, completing the full sequence in 1 minute 39 seconds."

  - type: "project"
    id: "turtlebot-navigation"
    title: "TurtleBot3 Obstacle Avoidance & ArUco Marker Navigation"
    subtitle: "CSCI 5551 / EE 5271 Final Project, University of Minnesota"
    date: "Fall 2025"
    location: "Minneapolis, MN"
    links:
      - label: "GitHub"
        href: "https://github.com/aturganbayev/CSCI5551-EE5271_Turtlebot_Navigation"
      - label: "Report"
        href: "files/CSCI5551_Final_Project.pdf"
    body: "Developed LiDAR-based obstacle avoidance and ArUco marker following for a TurtleBot3 Burger, validated first in Gazebo simulation and then on the real robot."

  - type: "education"
    title: "MS in Robotics"
    subtitle: "University of Minnesota, Twin Cities"
    subtitle_link: "https://twin-cities.umn.edu"
    date: "September 2025 – December 2026"
    body: |
      [Bolashak Scholarship](https://bolashak.gov.kz/en/o-kompanii) | GPA: 3.89/4.00

      Coursework: Machine Learning Fundamentals, Robotics, Robot Vision, Introduction to Intelligent Robotics Systems, 3D Bioprinting

  - type: "experience"
    title: "Senior Research Assistant"
    subtitle: "Center of Excellence in Medical Robotics & Research"
    subtitle_link: "https://cemrr.nu.edu.kz/en"
    date: "November 2023 – April 2025"
    location: "Astana, Kazakhstan"
    body: |
      - Conducted advanced research on robotic-assisted rehabilitation, focused on enhancing upper limb recovery for stroke survivors.
      - Led the design and development of a full-scale hybrid robotic shoulder exoskeleton for intensive, task-specific patient therapy. See the [Shoulder Rehabilitation Exoskeleton project](#exoskeleton) for implementation details.

  - type: "experience"
    title: "Robotics Laboratory Assistant"
    subtitle: "Nazarbayev University"
    subtitle_link: "https://seds.nu.edu.kz/sedslaboratories"
    date: "November 2023 – July 2025"
    location: "Astana, Kazakhstan"
    body: |
      - Managed laboratory operations and technical coordination, keeping facilities and equipment ready for complex robotics research and coursework.
      - Collaborated with faculty to design lab sessions and develop Standard Operating Procedures (SOPs) for the safe operation of potentially dangerous robotic systems.

  - type: "project"
    id: "exoskeleton"
    title: "Shoulder Rehabilitation Robotic Exoskeleton"
    subtitle: "Nazarbayev University & CEMRR"
    date: "September 2023 – April 2025"
    location: "Astana, Kazakhstan"
    links:
      - label: "News"
        href: "https://cemrr.nu.edu.kz/en/news/9"
      - label: "Interview"
        href: "https://www.youtube.com/watch?v=BF6AlbPFsx4&t=535s"
    body: "Designed and built a 5-DOF hybrid robotic shoulder exoskeleton combining a four-bar linkage with a cable-driven parallel mechanism, for intensive task-specific stroke rehabilitation therapy."
    gallery:
      - src: "images/exoskeleton/1.jpg"
        alt: "Shoulder rehabilitation exoskeleton, photo 1 of 4"
      - src: "images/exoskeleton/2.jpg"
        alt: "Shoulder rehabilitation exoskeleton, photo 2 of 4"
      - src: "images/exoskeleton/3.jpg"
        alt: "Shoulder rehabilitation exoskeleton, photo 3 of 4"
      - src: "images/exoskeleton/4.jpg"
        alt: "Shoulder rehabilitation exoskeleton, photo 4 of 4"

  - type: "project"
    id: "mini-shoulder"
    title: "3D-Printed Miniature Model for Human-Robot Shoulder Coupling"
    subtitle: "Nazarbayev University"
    date: "January 2023 – September 2023"
    location: "Astana, Kazakhstan"
    links:
      - label: "Paper"
        href: "https://ieeexplore.ieee.org/document/10458641"
    body: "Designed and validated a 3D-printed miniature 5-DOF shoulder coupling mechanism that later informed the full-scale exoskeleton developed at CEMRR."
    gallery:
      - src: "images/mini_shoulder/prototype.jpg"
        alt: "3D-printed miniature shoulder mechanism prototype, photo 1 of 3"
      - src: "images/mini_shoulder/cas.jpg"
        alt: "Miniature shoulder mechanism CAD joint detail, photo 2 of 3"
      - src: "images/mini_shoulder/sketch.jpg"
        alt: "Miniature shoulder mechanism CAD overview, photo 3 of 3"

  - type: "experience"
    title: "Undergraduate Research Assistant"
    subtitle: "Nazarbayev University"
    subtitle_link: "https://seds.nu.edu.kz/bachelor_in_re"
    date: "April 2022 – November 2023"
    location: "Astana, Kazakhstan"
    body: |
      - Investigated biomechanical aspects of human-robot interaction to improve the efficacy of stroke recovery.
      - Built early 3D-printed prototypes that became the basis for the full-scale exoskeleton later developed at CEMRR. See the [3D-Printed Miniature Model for Human-Robot Shoulder Coupling project](#mini-shoulder) for implementation details.

  - type: "education"
    title: "BS in Robotics and Mechatronics"
    subtitle: "Nazarbayev University, Astana, Kazakhstan"
    subtitle_link: "https://seds.nu.edu.kz/bachelor_in_re"
    date: "August 2018 – June 2023"
    body: |
      Full Scholarship

      Graduation Project: Shoulder Rehabilitation Robotic Exoskeleton. Coursework: Electromechanical Systems, Mechanical Design with CAD, Image Processing, Linear Control Theory, Microcontrollers, Robotics: Kinematics and Dynamics

publications:
  - title: "Exploring the Potential of Four-Bar Linkages in Robotic Exoskeletons: A Comprehensive Review"
    authors: "A. Niyetkaliyev, **A. Turganbayev**, M. Karasheva, R. Zhylkaidarov and Y. Turlybek"
    venue: "Journal of Mechanical Design, vol. 147, no. 10"
    date: "April 2025"
    doi_label: "10.1115/1.4068107"
    doi_link: "https://asmedigitalcollection.asme.org/mechanicaldesign/article-abstract/147/10/100801/1213536/Exploring-the-Potential-of-Four-Bar-Linkages-in?redirectedFrom=fulltext"
  - title: "Design of a 3D Printed Miniature Model for Human-Robot Mechanism Coupling for Shoulder Rehabilitation"
    authors: "M. Karasheva, **A. Turganbayev**, A. Aimysheva and A. Niyetkaliyev"
    venue: "2023 8th International Conference on Robotics and Automation Engineering (ICRAE), Singapore, pp. 58–65"
    date: "2023"
    doi_label: "10.1109/ICRAE59816.2023.10458641"
    doi_link: "https://ieeexplore.ieee.org/document/10458641"
  - title: "The Use of Four-Bar Mechanisms in Robotic Exoskeletons"
    authors: "S. Omirbayev, I. Issa, Z. Kuangaliyev, **A. Turganbayev** and A. Niyetkaliyev"
    venue: "2022 International Conference on Advanced Mechatronic Systems (ICAMechS), Toyama, Japan, pp. 149–156"
    date: "2022"
    doi_label: "10.1109/ICAMechS57222.2022.10003280"
    doi_link: "https://ieeexplore.ieee.org/document/10003280"

talks:
  - "**May 5, 2026 - Project Presentation:** \"Printability of Different PEGDA Concentrations\", *BMEN5361: 3D Bioprinting (Spring 2026)*, University of Minnesota, Twin Cities, MN"
  - "**Dec 9, 2025 - Project Presentation:** \"Vision-Based ArUco Marker Navigation and Obstacle-Avoiding Algorithm for TurtleBot3 Burger Robot\", *EE 5271: Robot Vision (Fall 2025)*, University of Minnesota, Twin Cities, MN"
  - "**Dec 1, 2025 - Project Presentation:** \"Vision-Based ArUco Marker Navigation and Obstacle-Avoiding Algorithm for TurtleBot3 Burger Robot\", *CSCI 5551: Introduction to Intelligent Robotic Systems (Fall 2025)*, University of Minnesota, Twin Cities, MN"
  - "**May 2, 2023 - Project Presentation:** Shoulder Rehabilitation Robotic Exoskeleton, *ROBT 491: Graduation Project (Spring 2023)*, Nazarbayev University, Astana, Kazakhstan"
  - "**Dec 19, 2022 - Conference Presentation:** [The Use of Four-Bar Mechanisms in Robotic Exoskeletons](https://ieeexplore.ieee.org/document/10003280/), *2022 International Conference on Advanced Mechatronic Systems (ICAMechS)*, Toyama, Japan"
---

My research focuses on robot manipulation, perception, and human-centered robotics, spanning automated tactile exploration with a UR5 arm to a 5-DOF shoulder rehabilitation exoskeleton I designed and helped develop into a full-scale device. See [Experience & Projects](#experience) for details. I am currently a first year MS student in Robotics at the University of Minnesota - Twin Cities on a [Bolashak Scholarship](https://bolashak.gov.kz/en/o-kompanii), having previously completed my BS in Robotics and Mechatronics at Nazarbayev University.
