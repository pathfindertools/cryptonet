---
draft: true
blocks:
  - style:
      fillStyles: from-accent1 to-black bg-gradient-to-br
      alignment: 'flex-row-reverse text-left items-center '
      featureContent: 'w-1/2 min-h-0 '
      padding: pt-40 pb-16 pr-7 pl-20
      featureImage: 'object-right-bottom object-scale-down '
      imagePadding: pt-12 pb-4 pr-0 pl-0
      labelStyles: text-gray-light  text-xl mb-0 font-bold
      headlineStyles: text-primary  text-6xl mb-0 font-bold
      subheadStyles: text-gray  text-2xl mb-7 font-bold
      textStyles: 'text-white  text-lg mb-11 '
      contentOrder: labelHeadingsContent
    image:
      src: >-
        http://res.cloudinary.com/protocolai/image/upload/v1643128562/Hall_of_Fame_grccee.png
      imageStyle: half
      fit: cover
      position: object-center
    label: ''
    headline: MicroGen
    subhead: A site builder for Web 3.0
    body: Make modern web 3.0 ready websites with a real-time visual editor.
    buttons:
      - label: Get Started
        link: 'https://github.com/filecoin-project/microgen'
        type: solid
        buttonFillStyles: bg-primary
        textColor: white
        backgroundColor: black
    _template: feature
  - style:
      fillStyles: from-gray-light to-gray-light bg-gradient-to-t
      textAlignment: left
      padding: pt-20 pb-20 pr-20 pl-20
      columns: '2'
      labelStyles: text-black font-sans text-xl mb-0 font-bold
      headlineStyles: text-black  text-5xl mb-11 font-bold
      subheadStyles: text-black  text-3xl mb-0 font-bold
      textStyles: text-black  text-lg mb-0 font-bold
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-white
      padding: pt-4 pb-4 pr-5 pl-7
      type: solid
      accentColor: primary
      borderStyles: border-primary border-l-4
      labelStyles: 'text-black  text-sm mb-0 '
      headlineStyles: text-primary  text-xl mb-2 font-bold
      subheadStyles: 'text-black  text-lg mb-0 '
      textStyles: 'text-black   mb-0 '
      buttonType: outline
      buttonTextColor: accent4
    label: ''
    headline: Features
    subhead: ''
    body: ''
    items:
      - headline: Deploy Quickly
        subhead: ''
        text: >-
          Get a website complete with a visual CMS deployed in less than an hour
          on your choice of static host.
      - headline: Modern Features
        subhead: ''
        text: >-
          Responsive design, open graph social sharing and google analytics on
          every site.
      - headline: Custom Design
        subhead: ''
        text: >-
          Customize the look and feel of your site with a realtime visual
          editor, without writing a single line of code.
      - headline: Git Based
        subhead: ''
        text: Version controlled content and design.
    navigationLabel: Features
    _template: textCards
  - style:
      fillStyles: bg-primary
      textAlignment: text-center
      minHeight: min-h-0
      padding: pt-7 pb-10 pr-0 
      width: normal
      labelStyles: text-black  text-xl mb-0 font-bold
      headlineStyles: text-white  text-6xl mb-3 font-bold
      subheadStyles: text-black  text-3xl mb-0 font-bold
      textStyles: text-black  text-lg mb-0 font-bold
      contentOrder: labelHeadingsContent
    label: ''
    headline: Learn More
    subhead: ''
    body: ''
    buttons:
      - label: Get Started
        link: 'https://github.com/filecoin-project/microgen'
        type: solid
        buttonFillStyles: bg-white
        textColor: primary
        backgroundColor: white
    _template: banner
  - style:
      minHeight: min-h-0
      fullWidth: false
      padding: pt-10 pb-10 pr-20 pl-20
      fillStyles: bg-black
    markup: <p class="text-white">I am an embed</p>
    navigationLabel: Embed
    _template: embed
  - style:
      fillStyles: bg-accent1
      textAlignment: text-left
      minHeight: min-h-0
      padding: pt-14 pb-20 pr-20 pl-20
      contentWidth: w-full
      columns: '2'
      labelStyles: text-black  text-xl mb-0 font-bold
      headlineStyles: text-white  text-6xl mb-10 font-bold
      subheadStyles: text-black  text-3xl mb-0 font-bold
      textStyles: text-black  text-lg mb-0 font-bold
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-primary
      padding: pt-5 pb-5 pr-5 pl-5
      type: solid
      accentColor: white
      imageStyles: '   '
      labelStyles: 'text-white  text-sm mb-0 '
      headlineStyles: 'text-white  text-2xl mb-0 '
      subheadStyles: 'text-white  text-lg mb-0 '
      textStyles: 'text-white   mb-0 '
      buttonType: outline
      buttonTextColor: white
    label: ''
    headline: Made with Microgen
    subhead: ''
    body: ''
    items:
      - image:
          src: >-
            http://res.cloudinary.com/protocolai/image/upload/v1638476735/hackathons_z7pwah.png
        headline: Hackathons
        subhead: ''
        text: >-
          This is where you might talk about the card, if this wasn't just
          filler text.
        link: 'https://hackathons.filecoin.io/'
        buttonLabel: Visit Site
      - image:
          src: >-
            http://res.cloudinary.com/protocolai/image/upload/v1638476723/asia-season_sn2gv8.png
        headline: Asia Hackathon Season
        subhead: ''
        text: >-
          This is where you might talk about the card, if this wasn't just
          filler text.
        link: 'https://hackathons.filecoin.io/asia-hackathon-season/'
        buttonLabel: Visit Site
    navigationLabel: Made with Microgen
    _template: photoCards
meta:
  siteTitle: Hackathons
  siteDescription: >-
    With Filecoin and IPFS, we empower developers and entrepreneurs to solve
    significant problems and ship innovative applications. Join our hackathons
    and shape the future of the web to make it more decentralized, robust, and
    secure!
  siteImageSrc: >-
    https://res.cloudinary.com/tombustout/image/upload/v1634005837/asia-hackathon-hero_isb8ak.png
nav:
  navAlignment: right
  navTextColor: white
  navBackgroundColor: accent4
colors:
  primary: '#0090FF'
  accent1: '#0E4465'
  accent2: '#2DDB87'
  accent3: '#2DD0DB'
  accent4: '#00D0DB'
  white: '#FFFFFF'
  grayLight: '#E8E8EF'
  gray: '#B0B0BF'
  grayDark: '#7B7A80'
  black: '#000000'
---

