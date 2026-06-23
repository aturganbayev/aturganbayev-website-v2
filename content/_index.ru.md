---
title: "Азамат Турганбаев"
name: "Азамат Турганбаев"
subtitle: "Магистрант по робототехнике, Университет Миннесоты"
profile_picture: "images/profile-sm.jpg"
cv: "files/ATurganbayev_CV_ru.pdf"

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
  - group: "Языки программирования и библиотеки"
    tags: ["Python", "C/C++", "MATLAB", "OpenCV"]
  - group: "Фреймворки и инструменты робототехники"
    tags: ["ROS / ROS2", "UR5", "URScript", "RoboDK", "Gazebo", "Linux", "Git", "Docker"]
  - group: "Моделирование и имитация"
    tags: ["SolidWorks", "MATLAB/Simulink", "QUARC", "3D-печать"]
  - group: "Системы управления"
    tags: ["Оптимизация ПИД-управления", "Системы реального времени", "Планирование движения"]

timeline:
  - type: "experience"
    title: "Научный ассистент"
    subtitle: "Лаборатория тактильной робототехники"
    subtitle_link: "https://tact.nu.edu.kz/"
    date: "Май 2026 – настоящее время"
    location: "Астана, Казахстан"
    body: |
      - Разработал автоматизированную систему тактильного исследования для роботизированной руки UR5, обеспечивающую систематическое калиброванное картирование контактов с синхронной записью силы на симулированном и реальном роботах.
      - Подробности реализации — на странице [проекта тактильного исследования поверхности](#tactile-ur5).

  - type: "project"
    id: "tactile-ur5"
    title: "Тактильное исследование поверхности с помощью UR5"
    subtitle: "Лаборатория тактильной робототехники"
    subtitle_link: "https://tact.nu.edu.kz/"
    date: "Май 2026 – настоящее время"
    location: "Астана, Казахстан"
    links:
      - label: "GitHub"
        href: "https://github.com/aturganbayev/tactile_UR5"
    body: "Создал сквозной пайплайн для автоматического тактильного исследования силиконового конуса с помощью робота UR5, откалибровав геометрию поверхности из CAD-модели и синхронизировав запись силы контакта на симулированном и реальном роботе."

  - type: "project"
    id: "flashlight-assembly"
    title: "Автоматизированная сборка фонарика с помощью UR5"
    subtitle: "ME 5286 – Робототехника, Университет Миннесоты"
    date: "Март 2026"
    location: "Миннеаполис, MN"
    links:
      - label: "GitHub"
        href: "https://github.com/aturganbayev/ME5286_UR5_Flashlight_Assembly#me5286-lab-4--ur5-flashlight-assembly"
      - label: "Отчёт"
        href: "files/ME5286_Flashlight_Assembly.pdf"
    body: "Запрограммировал робота UR5 через Python API RoboDK для автономной сборки трёхкомпонентного фонарика, выполнив всю последовательность за 1 минуту 39 секунд."

  - type: "project"
    id: "turtlebot-navigation"
    title: "Обход препятствий и навигация по маркерам ArUco на TurtleBot3"
    subtitle: "Финальный проект CSCI 5551 / EE 5271, Университет Миннесоты"
    date: "Осень 2025"
    location: "Миннеаполис, MN"
    links:
      - label: "GitHub"
        href: "https://github.com/aturganbayev/CSCI5551-EE5271_Turtlebot_Navigation"
      - label: "Отчёт"
        href: "files/CSCI5551_Final_Project.pdf"
    body: "Разработал систему обхода препятствий на основе LiDAR и следование по маркерам ArUco для TurtleBot3 Burger, проверенную сначала в симуляции Gazebo, а затем на реальном роботе."

  - type: "education"
    title: "Магистратура по Робототехнике"
    subtitle: "Университет Миннесоты, Твин-Ситис"
    subtitle_link: "https://twin-cities.umn.edu"
    date: "Сентябрь 2025 – Декабрь 2026"
    body: |
      [Стипендия Болашак](https://bolashak.gov.kz/ru/o-kompanii) | GPA: 3.89/4.00

      Курсы: Основы машинного обучения, Робототехника, Техническое зрение, Введение в интеллектуальные робототехнические системы, 3D-биопечать

  - type: "experience"
    title: "Старший научный сотрудник"
    subtitle: "Центр передовых исследований в области медицинской робототехники"
    subtitle_link: "https://cemrr.nu.edu.kz/en"
    date: "Ноябрь 2023 – Апрель 2025"
    location: "Астана, Казахстан"
    body: |
      - Проводил передовые исследования в области роботизированной реабилитации, направленные на восстановление функций верхних конечностей у пациентов после инсульта.
      - Руководил проектированием и разработкой полноразмерного гибридного роботизированного экзоскелета плечевого сустава для интенсивной задачно-специфичной терапии пациентов. Подробности на странице [проекта реабилитационного экзоскелета](#exoskeleton).

  - type: "experience"
    title: "Ассистент робототехнической лаборатории"
    subtitle: "Назарбаев Университет"
    subtitle_link: "https://seds.nu.edu.kz/ru/sedslaboratories"
    date: "Ноябрь 2023 – Июль 2025"
    location: "Астана, Казахстан"
    body: |
      - Управлял работой лаборатории и технической координацией, обеспечивая готовность оборудования для сложных исследований и учебных задач в области робототехники.
      - Совместно с преподавателями разрабатывал лабораторные занятия и стандартные операционные процедуры (СОП) для безопасной эксплуатации потенциально опасных роботизированных систем.

  - type: "project"
    id: "exoskeleton"
    title: "Реабилитационный экзоскелет плечевого сустава"
    subtitle: "Назарбаев Университет & CEMRR"
    date: "Сентябрь 2023 – Апрель 2025"
    location: "Астана, Казахстан"
    links:
      - label: "Новости"
        href: "https://cemrr.nu.edu.kz/ru/news/9"
      - label: "Интервью"
        href: "https://www.youtube.com/watch?v=BF6AlbPFsx4&t=535s"
    body: "Спроектировал и собрал 5-DOF гибридный роботизированный экзоскелет плечевого сустава, объединяющий четырёхзвенный механизм с кабельно-приводным параллельным механизмом, для интенсивной задачно-специфичной терапии пациентов после инсульта."
    gallery:
      - src: "images/exoskeleton/1.jpg"
        alt: "Реабилитационный экзоскелет плечевого сустава, фото 1 из 4"
      - src: "images/exoskeleton/2.jpg"
        alt: "Реабилитационный экзоскелет плечевого сустава, фото 2 из 4"
      - src: "images/exoskeleton/3.jpg"
        alt: "Реабилитационный экзоскелет плечевого сустава, фото 3 из 4"
      - src: "images/exoskeleton/4.jpg"
        alt: "Реабилитационный экзоскелет плечевого сустава, фото 4 из 4"

  - type: "project"
    id: "mini-shoulder"
    title: "3D-печатная миниатюрная модель сопряжения плечевого механизма человека и робота"
    subtitle: "Назарбаев Университет"
    date: "Январь 2023 – Сентябрь 2023"
    location: "Астана, Казахстан"
    links:
      - label: "Статья"
        href: "https://ieeexplore.ieee.org/document/10458641"
    body: "Спроектировал и проверил 3D-печатную миниатюрную модель 5-DOF механизма сопряжения плечевого сустава, которая позже легла в основу полноразмерного экзоскелета, разработанного в CEMRR."
    gallery:
      - src: "images/mini_shoulder/prototype.jpg"
        alt: "3D-печатный прототип миниатюрного механизма плеча, фото 1 из 3"
      - src: "images/mini_shoulder/cas.jpg"
        alt: "Детализация суставов CAD-модели миниатюрного механизма плеча, фото 2 из 3"
      - src: "images/mini_shoulder/sketch.jpg"
        alt: "Обзор CAD-модели миниатюрного механизма плеча, фото 3 из 3"

  - type: "experience"
    title: "Научный ассистент (бакалавриат)"
    subtitle: "Назарбаев Университет"
    subtitle_link: "https://seds.nu.edu.kz/ru/bachelor_in_re"
    date: "Апрель 2022 – Ноябрь 2023"
    location: "Астана, Казахстан"
    body: |
      - Исследовал биомеханические аспекты взаимодействия человека и робота с целью повышения эффективности реабилитации после инсульта.
      - Создал ранние 3D-печатные прототипы, которые легли в основу полноразмерного экзоскелета, позже разработанного в CEMRR. Подробности на странице [проекта 3D-печатной миниатюрной модели сопряжения плечевого механизма](#mini-shoulder).

  - type: "education"
    title: "Бакалавриат по Робототехнике и Мехатронике"
    subtitle: "Назарбаев Университет, Астана, Казахстан"
    subtitle_link: "https://seds.nu.edu.kz/ru/bachelor_in_re"
    date: "Август 2018 – Июнь 2023"
    body: |
      Полная стипендия

      Дипломный проект: Реабилитационный экзоскелет плечевого сустава. Курсы: Электромеханические системы, Конструирование с применением САПР, Обработка изображений, Линейная теория управления, Микроконтроллеры, Робототехника: кинематика и динамика

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
  - "**5 мая 2026 - Презентация проекта:** «Способность к печати PEGDA различных концентраций», *BMEN5361: 3D-биопечать (Весна 2026)*, Университет Миннесоты, Твин-Ситис"
  - "**9 декабря 2025 - Презентация проекта:** «Навигация на основе маркеров ArUco и алгоритм обхода препятствий для робота TurtleBot3 Burger», *EE 5271: Компьютерное зрение роботов (Осень 2025)*, Университет Миннесоты, Твин-Ситис"
  - "**1 декабря 2025 - Презентация проекта:** «Навигация на основе маркеров ArUco и алгоритм обхода препятствий для робота TurtleBot3 Burger», *CSCI 5551: Введение в интеллектуальные робототехнические системы (Осень 2025)*, Университет Миннесоты, Твин-Ситис"
  - "**2 мая 2023 - Презентация проекта:** Реабилитационный экзоскелет плечевого сустава, *ROBT 491: Дипломный проект (Весна 2023)*, Назарбаев Университет, Астана, Казахстан"
  - "**19 декабря 2022 - Конференц-доклад:** [The Use of Four-Bar Mechanisms in Robotic Exoskeletons](https://ieeexplore.ieee.org/document/10003280/), *2022 Международная конференция по передовым мехатронным системам (ICAMechS)*, Тояма, Япония"
---

Мои научные интересы охватывают манипуляцию роботами, восприятие и робототехнику, ориентированную на человека, от автоматизированного тактильного исследования с роботом UR5 до реабилитационного экзоскелета плечевого сустава с 5 степенями свободы, который я спроектировал и помог довести до полноразмерного устройства. Подробности на странице [Опыт и проекты](#experience). Сейчас я студент первого года магистратуры по специальности «Робототехника» в Университете Миннесоты - Твин-Ситис, обучаюсь по [стипендии Болашак](https://bolashak.gov.kz/ru/o-kompanii), ранее окончил бакалавриат по специальности «Робототехника и мехатроника» в Назарбаев Университете.
