---
toc: false
title: We need more failure (2024)
---

```js
import count from "/comp/words.js"
```

# We need more failure
## Tending to massively broken systems [](#post) [](#bookmark)
[`22 July 2024`](#lead) / ${count('p:has(> [href="#lead"])  ~ *')}

> *A kernel issue so massive, unprecedented, impactful—why is it we only tend to care about our technical dependencies *after* the failsafes have been broken?*

Leaving our house without a phone, being offline in a new city, losing access to an important account; these are things we generally try to avoid, as even the smallest hiccup in our familiar technical routines makes us not only deeply uncomfortable, but increasingly, incapable. 
When facing with this, why are we not more concerned about *all* the flimsy technical layers and facbrics that envelop our lives *before* they imminently rip?

While the double Crowdstrike / Azure security whammy unfolding over the weekend had everyone up its arms, on any normal day the extent of our technical concerns rarely begins before most foundations of our systems have given out. 
When a security patch pushed by Crowdstrike on Thursday did just that — rendering millions of Windows devices inoperable in the process — cost projections have since ran into the billions, with almost as many lives and occupations afflicted and no less concerned sysadmins faces. 
A wake-up call, if you or any of your company devices were unlucky enough to have been fed the unduly update.

As specialists scramble to shimmy a solution (complicated due to how affected devices have been ‘soft-bricked’ and difficult to debug remotely), folks on the ground have been met with a harsh reality of all the critical computational work we have since outsourced. 
We haven’t completely forgotten how to operate a pen and paper, but we are close. I don’t lament this per se, but am worried about the fine prints of our current technical contract: namely, how *we are blind to how technologies fail us, all the time*.

### Being system illiterate

Okay, maybe not all the time, but we are blind. 
Blind to a minute file synchronisation error of some note-taking app we use to jot down our thoughts. 
Blind to some severely outdated BIOS driver that stopped receiving updates years ago. 
Blind to the development shortcuts someone has taken to meet a release deadline. 
Blind to the hundreds of vendors and development teams we rely on daily to run our cloud based work. 
We aren’t blinded because we don’t want to see, but because we *cannot* easily see behind the production lines and jagged edges of our software artefacts.

Namely, besides obvious bugs and errors, most of the development practices that shape our digital products can only be retraced to a certain degree. 
Even if one does, it is still difficult to understand their technical pedigree holistically: *[The Genealogy of Linux](https://distrowatch.com/dwres.php?resource=family-tree)* is well documented, but a full understanding of how each individual release relates to its progenitor is probably reserved to a dedicated few. 
And even if you were to possess the full knowledge of an OS’s history, what could a single person, entity or vendor realistically do to relay this tangled web to the end-user, before mindlessly clicking *Update Now* to get on with the day?

The reality is, we simply cannot read and parse all our intricate software and hardware dependencies. 
Apart from a cohort of a few apt engineers, you and I are systems illiterate. 
We may have a hunch as to to how our tech ‘talks’ and we might ‘speak’ their (programming) languages to some degree, but most of us are nowhere near able to follow along the more complex conversations our technical systems are increasingly having on our behalf. 
If you are proficient, kudos, but as last Thursday’s incident shows, even the most technically proficient among us might not be fluent enough when it comes to the complex grammars of our new global software interlocutors.

### Give error some room
We have dedicated whole industries solely focused on foolproofing software. 
Slick infoboxes greet us when installing apps, user profiles come fully preconfigured, and if an error occurs, a troubleshooting guide is only clicks away. 
Onboarding new users should be as seamless and harmless as possible, while updates are aggressively pushed with ‘sensible’ software defaults provided. Your technical bed has been made, you only need to sleep in it. 
Yet, as most things in life, shielding your dependants from hardship or downplaying restless nights rarely has the intended effect.

*We need room to fail in order to learn.*
Sometimes that room will be massive. 
But preventing failure on a system’s level is doing a disservice to the how people acquire technical skills, hone their basic vocabularies and become proficient users. 
Mind, I am not advocating everyone to become as fluent as a full-blown systems engineer, making our systems more error prone, or having developers mindlessly ‘push to prod’ and see what happens. 
I would rather draw attention to how building systems that prevent us from making mistakes, can lead to situations where we don’t even know how technically mute we are until we are suddenly put to the test.

If your current machine has been idly purring away for some time, firing up the bootloader may just as well be arcane knowledge (the unusual keycombo had me on edge for a minute). 
Yet technical struggles reach far beyond remedying the untimely blue-screen. In fact, even admitting to being stalled on some minor issue, we can be a little ashamed of our illiteracy. 
No wonder how in an increasing platform-heavy work environment where some of us are juggling 20+ years personal data footprints, our capacity to adopt the latest and greatest while managing existing tools is spread all too thin.

### Fail proficient
It is no secret that leaning into one software ecosystem makes switching to another all the costlier as time goes by. In my experience of building academic research tools, this ‘time creep’ is mostly an afterthought or rarely considered at all. Even worse, when faced with time and resource constraints, adopting new software is almost regarded as error in itself, not to mention the difficulty of having your colleagues find time to navigate the slightly obtuse interface of that shiny new doodad you just made — yet when faced by similar situations myself, I am no stranger to sticking to ‘what works’ over something seemingly less resilient.

Besides maybe those at the very start of their careers, we are simply too resource constrained to clear house on our existing tooling and start over, even though we may very well want to. Would it serve us to create environments more accommodating to our technical (in)proficiencies? Provide room for ‘grammatical’ expression and experimentation, not just catering to the software rules and strata of a select few? In moments of crises it may be too late to experiment. We need to fail more in the open.

We just need systems that allow us to.