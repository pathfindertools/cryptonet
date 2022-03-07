---
draft: true
blocks:
  - style:
      textAlignment: text-center
      minHeight: min-h-0
      padding: pt-36 pb-24 pr-10 pl-10
      width: normal
      labelStyles: 'text-white undefined text-xl mb-0 '
      headlineStyles: 'text-white undefined text-6xl mb-0 '
      subheadStyles: 'text-white undefined text-6xl mb-5 '
      textStyles: 'text-white undefined text-xl mb-8 '
      contentOrder: labelHeadingsContent
    image:
      src: ''
    background:
      fillStyles: from-accent3 to-primary bg-gradient-to-tr
      src: >-
        http://res.cloudinary.com/protocolai/image/upload/v1645824008/cryptonet/hero-bg_lrgsrl.svg
      position: object-top
      ornaments:
        - src: >-
            http://res.cloudinary.com/protocolai/image/upload/v1645822768/cryptonet/hero-image_bbybtb.svg
          alignment: top
          xOffset: '230'
    label: Protocol Labs Research invites you to
    headline: Vector Commitment
    subhead: Research Day
    body: >-
      ![](http://res.cloudinary.com/protocolai/image/upload/v1646068750/cryptonet/hero-rule_stzu3r.png)**VIRTUAL
      EVENT - March 25th 2022, 11am-7pm CET**


      Vector commitments are powerful primitives that find applications in many
      blockchains protocols. The goal of this workshop is to survey the state of
      the art in research in Vector Commitments with survey talks, the
      presentation of recent breakthrough results and discussions about the
      important open problems, and how they are motivated by practical
      applications.
    buttons:
      - label: Register
        link: >-
          https://protocollabs.typeform.com/to/dVCvrol0?typeform-source=cryptonet.vercel.app
        type: solid
        buttonFillStyles: bg-primary
        textColor: white
        backgroundColor: primary
      - label: Learn More
        link: '#join-us'
        type: link
        textColor: white
        backgroundColor: ''
    _template: banner
  - style:
      textAlignment: text-left
      minHeight: min-h-0
      padding: pt-28 pb-28 pr-14 pl-14
      contentWidth: w-full
      columns: '2'
      labelStyles: 'text-black undefined text-sm mb-0 '
      headlineStyles: 'text-black undefined text-5xl mb-0 '
      subheadStyles: 'text-black undefined text-3xl mb-0 '
      textStyles: 'text-black undefined undefined mb-0 '
      contentOrder: labelHeadingsContent
    cardStyle:
      fillStyles: bg-white
      padding: pt-6 pb-10 pr-8 pl-0
      type: solid
      accentColor: primary
      imageStyles: h-40 object-scale-down object-left mb-7
      labelStyles: 'text-accent3 undefined text-sm mb-0 '
      headlineStyles: text-accent3 undefined text-3xl mb-5 font-bold
      subheadStyles: 'text-accent3 undefined text-3xl mb-0 '
      textStyles: 'text-accent3 undefined text-base mb-0 '
      buttonType: solid
      buttonTextColor: primary
    background:
      fillStyles: bg-white
    label: ''
    headline: ''
    subhead: ''
    body: ''
    items:
      - headline: ''
        subhead: >-
          Intro Vector commitments allow a party to commit to a vector and then
          to open the commitment at selected positions. The crucial feature of
          this primitive is that the size of both commitments and openings does
          not depend on the length of the vector.
        text: ''
      - image:
          src: >-
            http://res.cloudinary.com/protocolai/image/upload/v1645830390/cryptonet/bio-dario-fiore_l5h9no.svg
          alt: Dario Fiore - Imdea
        label: 'Talk 1:'
        headline: A journey in vector commitments
        subhead: ''
        text: >-
          In this talk I will present the notion of vector commitments, give an
          overview of the state of the art in this area, and cover some of the
          recent efficient constructions. I will also discuss applications and
          open problems.
      - image:
          src: >-
            http://res.cloudinary.com/protocolai/image/upload/v1646679710/cryptonet/bio-victoria-arantxa_i0lizd.svg
          alt: Arantxa Zapico
        label: 'Talk 2:'
        headline: On the efficiency and flexibility of Linear-map vector commitments.
        subhead: ''
        text: >-
          In this talk we will present some theoretical and practical
          contributions to algebraic vector commitments. From a theorical point
          of view, we propose a framework adopting Linear Vector Commitments
          (LVC) \[LaiMal19\] as a starting point for defining SVC with
          updatability and aggregation properties. In particular we show how LVC
          with minimal properties can be boostrapped to obtain stronger ones.
      - image:
          src: >-
            http://res.cloudinary.com/protocolai/image/upload/v1646679711/cryptonet/bio-russell-lai_xojmec.svg
          alt: Russel Lai Friedich-Alexander-Universitat
        label: 'Talk 2:'
        headline: "Lattice-Based Preprocessing SNARKs: Publicly Verifiable and Recursively Composable\L"
        subhead: ''
        text: >-
          A succinct non-interactive argument of knowledge (SNARK) allows a
          prover to produce a short proof that certifies the veracity of a
          certain NP-statement. In the last decade, a large body of work has
          studied candidate constructions that are secure against quantum
          attackers. Unfortunately, no known candidate matches the efficiency
          and desirable features of (pre-quantum) constructions based on
          bilinear pairings. In this work, we make progress.
      - image:
          src: >-
            http://res.cloudinary.com/protocolai/image/upload/v1645822768/cryptonet/bio-alexandrox-zacharakis_oq4xsa.jpg
        label: 'Talk 4:'
        headline: "Techniques and tradeoffs for VC in the dlog setting\L"
        subhead: ''
        text: >-
          In this work we present techniques for opening/proving knowledge of
          subvectors of algebraic vector commitments. First, we present
          combinatorial techniques for proving opening of an algebraic
          commitment generalizing previous results (Hyperproofs). The techniques
          are generic and can be instantiated using any proof of knowledge of
          opening of a commitment. We consider (1) a transparent instantiation
          based.
      - image:
          src: >-
            http://res.cloudinary.com/protocolai/image/upload/v1645822768/cryptonet/bio-weije-wang_nidj8y.jpg
        label: 'Talk 5:'
        headline: A Compiler for Efficient Vector Commitments
        subhead: ''
        text: >-
          We present a new compiler for efficient vector commitments. By taking
          as input any vector commitment that is updatable, aggregatable, and
          has O(nlogn) time to open all proofs, our compiler can produce another
          vector commitment that balances, with the help of bookkeeping, the
          time complexity between UpdateAllProofs() and Aggregate(). More
          specifically, the produced vector commitment requires O(√nlogn) time.
      - image:
          src: >-
            http://res.cloudinary.com/protocolai/image/upload/v1645822768/cryptonet/bio-chris-peikert_i5webd.jpg
        label: 'Talk 6:'
        headline: Vector and Functional Commitments from Lattices
        subhead: ''
        text: >-
          Vector commitments (VCs) allow one to commit concisely to an ordered
          sequence of values, so that the values at desired positions can later
          be concisely and verifiably revealed. In addition, a VC can be
          statelessly updatable, meaning that commitments and proofs can be
          updated to reflect changes to individual entries, using knowledge of
          just those changes (and not the entire vector). To date, there have
          been relatively few post-quantum constructions.
      - image:
          src: >-
            http://res.cloudinary.com/protocolai/image/upload/v1645822768/cryptonet/bio-alin-tomescu_czcx5l.svg
        label: 'Talk 7:'
        headline: Fantastic trees and how to hash them
        subhead: ''
        text: >-
          Are Merkle trees a panacea? In this talk, I argue they are not and
          present several tree-based vector commitments that offer interesting
          trade-offs when compared to Merkle’s classic construction. First, I
          will cover previous work on tree-based VCs from polynomial commitments
          and lattices. Unlike Merkle trees, these constructions have a
          combination of smaller proof sizes, useful homomorphisms and more
          efficient proof aggregation.
    navigationLabel: Join Us
    _template: photoCards
  - style:
      minHeight: min-h-0
      padding: pt-20 pb-20 pr-16 pl-16
    background:
      fillStyles: bg-gray-light
      ornaments:
        - src: >-
            http://res.cloudinary.com/protocolai/image/upload/v1646164301/cryptonet/ornament-schedule_vqtiue.svg
          alignment: top
          width: '450'
          xOffset: '350'
          yOffset: '-130'
    markup: |-
      <h1 class="text-6xl text-primary">Event Schedule</h1>
      <p class="text-gray-dark mb-16">Central European Time</p>
      <dl class="flex flex-wrap">
        <dt class="w-2/12 h-10 pr-8 text-right text-accent3 relative">
          11:00 am
          <svg class="absolute top-1 right-0" width="17" height="48" viewBox="0 0 17 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.2663" cy="8.72162" r="6.58807" fill="#f4f5fa" stroke="#7986AD" stroke-width="3"/>
            <path d="M8.2663 15.2195L8.2663 47.2593" stroke="#7986AD" stroke-width="3"/>
          </svg>
        </dt>
        <dd class="w-10/12 pl-6">“A journey in vector commitments” - Dario Fiore</dd>
        <dt class="w-2/12 h-10 pr-8 text-right text-accent3 relative">
          12:15 - 1:00pm
          <svg class="absolute top-1 right-0" width="17" height="48" viewBox="0 0 17 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.2663" cy="8.72162" r="6.58807" fill="#f4f5fa" stroke="#7986AD" stroke-width="3"/>
            <path d="M8.2663 15.2195L8.2663 47.2593" stroke="#7986AD" stroke-width="3"/>
          </svg>
        </dt>
        <dd class="w-10/12 pl-6">“On the efficiency and flexibility of Linear-map vector commitments.” - Arantxa Zapico</dd>
        <dt class="w-2/12 h-10 pr-8 text-right text-accent3 relative">
          1:00-2:00pm
          <svg class="absolute top-1 right-0" width="17" height="48" viewBox="0 0 17 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.2663" cy="8.72162" r="6.58807" fill="#f4f5fa" stroke="#7986AD" stroke-width="3"/>
            <path d="M8.2663 15.2195L8.2663 47.2593" stroke="#7986AD" stroke-width="3"/>
          </svg>
        </dt>
        <dd class="w-10/12 pl-6">Lunch Break</dd>
        <dt class="w-2/12 h-10 pr-8 text-right text-accent3 relative">
          2:15-3:00pm 
          <svg class="absolute top-1 right-0" width="17" height="48" viewBox="0 0 17 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.2663" cy="8.72162" r="6.58807" fill="#f4f5fa" stroke="#7986AD" stroke-width="3"/>
            <path d="M8.2663 15.2195L8.2663 47.2593" stroke="#7986AD" stroke-width="3"/>
          </svg>
        </dt>
        <dd class="w-10/12 pl-6">“Lattice-Based Preprocessing SNARKs” - Russel Lai</dd>
        <dt class="w-2/12 h-10 pr-8 text-right text-accent3 relative">
          3:15-4:00pm 
          <svg class="absolute top-1 right-0" width="17" height="48" viewBox="0 0 17 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.2663" cy="8.72162" r="6.58807" fill="#f4f5fa" stroke="#7986AD" stroke-width="3"/>
            <path d="M8.2663 15.2195L8.2663 47.2593" stroke="#7986AD" stroke-width="3"/>
          </svg>
        </dt>
        <dd class="w-10/12 pl-6">“Techniques and tradeoffs for VC in the dlog setting” - Alexandros Zacharakis</dd>
        <dt class="w-2/12 h-10 pr-8 text-right text-accent3 relative">
          4:15-5:00pm
          <svg class="absolute top-1 right-0" width="17" height="48" viewBox="0 0 17 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.2663" cy="8.72162" r="6.58807" fill="#f4f5fa" stroke="#7986AD" stroke-width="3"/>
            <path d="M8.2663 15.2195L8.2663 47.2593" stroke="#7986AD" stroke-width="3"/>
          </svg>
        </dt>
        <dd class="w-10/12 pl-6">“A Compiler for Efficient Vector Commitments” - Weijie Wang</dd>
        <dt class="w-2/12 h-10 pr-8 text-right text-accent3 relative">
          5:15-6:00pm
          <svg class="absolute top-1 right-0" width="17" height="48" viewBox="0 0 17 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.2663" cy="8.72162" r="6.58807" fill="#f4f5fa" stroke="#7986AD" stroke-width="3"/>
            <path d="M8.2663 15.2195L8.2663 47.2593" stroke="#7986AD" stroke-width="3"/>
          </svg>
        </dt>
        <dd class="w-10/12 pl-6">“ Vector and Functional Commitments from Lattices” - Chris Peikert</dd>
        <dt class="w-2/12 pr-8 text-right text-accent3 relative">
          6:15-7:00pm
          <svg class="absolute top-1 right-0" width="17" height="48" viewBox="0 0 17 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="8.2663" cy="8.72162" r="6.58807" fill="#f4f5fa" stroke="#7986AD" stroke-width="3"/>
          </svg>
        </dt>
        <dd class="w-10/12 pl-6">“Fantastic trees and how to hash them” - Alin Tomescu</dd>
      </dl>
    _template: embed
  - style:
      fillStyles: bg-black
      textAlignment: text-left
      minHeight: min-h-0
      padding: pt-20 pb-20 pr-16 pl-16
      contentWidth: w-full
      columns: '2'
      labelStyles: 'text-black undefined text-sm mb-0 '
      headlineStyles: text-gray-dark undefined text-4xl mb-0 font-bold
      subheadStyles: 'text-black undefined text-3xl mb-0 '
      textStyles: 'text-black undefined undefined mb-0 '
      contentOrder: labelHeadingsContent
    cardStyle:
      padding: pt-0 undefined pr-0 pl-0
      type: solid
      accentColor: primary
      imageStyles: h-32 object-scale-down object-left mb-5
      labelStyles: 'text-accent3 undefined text-sm mb-0 '
      headlineStyles: text-accent3 undefined text-2xl mb-0 font-bold
      subheadStyles: 'text-accent3 undefined text-xl mb-0 '
      textStyles: 'text-accent3 undefined text-xl mb-0 '
      buttonType: solid
      buttonFillStyles: bg-white
      buttonTextColor: accent4
    background:
      fillStyles: from-accent2 to-accent4 bg-gradient-to-br
      ornaments:
        - src: >-
            http://res.cloudinary.com/protocolai/image/upload/v1646166535/cryptonet/ornament-sponsors_sziwi2.svg
          alignment: bottom
          width: '500'
          xOffset: '-400'
          yOffset: '100'
    label: ''
    headline: ''
    subhead: ''
    body: ''
    items:
      - headline: ''
        subhead: ''
        text: ''
      - image:
          src: >-
            http://res.cloudinary.com/protocolai/image/upload/v1646088242/cryptonet/protocol-logo_ewn4sv.png
        headline: Sponsored by Protocol Labs
        subhead: ''
        text: >-
          A special thanks to our sponsor Protocol Labs for bringing us the top
          minds in vector commitments research. Protocol Labs is an open-source
          R&D lab building protocols, tools, and services to radically improve
          the internet.
        link: 'https://protocol.ai/'
        buttonLabel: Learn More
    _template: photoCards
  - style:
      textAlignment: text-center
      minHeight: min-h-0
      padding: pt-32 pb-20 pr-10 pl-10
      width: narrow
      labelStyles: 'text-black undefined text-sm mb-0 '
      headlineStyles: 'text-accent3 undefined text-6xl mb-5 '
      subheadStyles: 'text-black undefined text-3xl mb-0 '
      textStyles: 'text-accent3 undefined text-2xl mb-10 '
      contentOrder: labelHeadingsContent
    background:
      fillStyles: bg-white
    label: ''
    headline: Protocol Labs Invites You
    subhead: ''
    body: >-
      We have a very exciting speaker lineup to survey the research area,
      present new technical breakthroughs and discuss important open problems.
    buttons:
      - label: Register
        link: 'https://protocollabs.typeform.com/to/dVCvrol0'
        type: solid
        buttonFillStyles: bg-primary
        textColor: white
        backgroundColor: primary
    _template: banner
  - style:
      textAlignment: text-center
      minHeight: min-h-0
      padding: pt-7 pb-7 undefined undefined
      width: normal
      labelStyles: 'text-black undefined text-sm mb-0 '
      headlineStyles: 'text-black undefined text-5xl mb-0 '
      subheadStyles: 'text-black undefined text-3xl mb-0 '
      textStyles: 'text-white undefined undefined mb-0 '
      contentOrder: labelHeadingsContent
    background:
      fillStyles: bg-accent1
      position: object-bottom
    label: ''
    headline: ''
    subhead: ''
    body: 'Made with love by [Protocol Labs](https://protocol.ai/)'
    _template: banner
meta:
  siteImageSrc: >-
    http://res.cloudinary.com/protocolai/image/upload/v1646068909/cryptonet/CyptoNet_Twitter_ubqqvm.png
---

