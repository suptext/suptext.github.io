---
toc: false
title: We need more failure
---

# We need more failure
## Tending to massively broken systems [](#post) [](#bookmark)
[`22 July 2024`](#lead) `/` ${window.util.count('p:has(> [href="#lead"]) ~ *')}

> *A kernel issue so massive, unprecedented, impactful: why is it we tend to care about our technical dependencies only after the failsafes have broken?*

Leaving the house without a phone, being offline in a new city, losing access to an important account... these are things we generally try to avoid. The smallest hiccup in our technical routines makes us not only deeply uncomfortable, but increasingly, incapable. 
Faced with this, why are we not concerned about *all* the flimsy technical layers and facbrics that envelop our lives, *before* they rip and tear?

While the double Crowdstrike + Azure security whammy unfolding over the weekend has everyone up its arms, on any normal day our technical concerns rarely start before most system foundations have given out. 
When a security patch pushed by Crowdstrike on Thursday did just that and rendering millions of Windows devices inoperable in the process — 
cost projections are now running in the billions, with almost as many lives and occupations afflicted and no less concerned sysadmin faces. A wake-up call, if you or any of your company devices were unlucky enough to have been fed the unduly update.

As specialists scramble to a solution (complicated by how affected devices have been ‘soft-bricked’ and are difficult to debug remotely), folks on the ground have been met with the harsh reality of all the critical computational work we have since outsourced. 
We haven’t completely forgotten how to operate a pen and paper, but we are close. I don’t lament this apperant loss of skill, but am worried about the finer print of our technical contract: *we are blind to how technologies fail us, all the time*.

### Being system illiterate

Okay, maybe not all the time but we are blind:
blind to a minute file synchronisation error of some note-taking app we use to jot down our thoughts. 
Blind to that severely outdated BIOS driver that stopped receiving updates years ago. 
Blind to the development shortcuts someone has taken to meet a release deadline. 
Blind to the hundreds of vendors and development teams we rely on daily to run our cloud based work. 
We aren’t blinded because we don’t want to see but because we *cannot* easily see behind the thick curtains of our software production lines.

Besides the obvious bugs and errors, most of the development practices that go into our products can only be traced back to a certain degree. 
Even if one can it is still difficult to understand these technical pedigrees holistically:
[*The Genealogy of Linux*](https://distrowatch.com/dwres.php?resource=family-tree) for instance is well documented, but a *true* understanding of how individual releases relate to their progenitors is only reserved to the dedicated few. 
Even if you were to possess the full knowledge of an OS’s history, what can a single person, entity or vendor realistically do to relay this intricate web of dependencies to the end-user, before mindlessly clicking *Update Now* to get on with the day?

The reality is, we simply cannot read and parse all our intricate software and hardware dependencies. 
Apart from a cohort of a few apt engineers, you and I are systems illiterate. 
We may have a hunch as to to how our tech ‘talks’ and we might ‘speak’ their (programming) language back to some degree, but most of us are nowhere near able to follow along the more complex conversations technical systems are increasingly having on our behalf. 
If you are proficient, kudos, but as Thursday’s incident shows, even the most technically proficient in our ranks may not be fluent enough when it comes to the complex grammars of our global software interlocutors.

### Give error some room
We have dedicated whole industries solely focused on foolproofing software. 
Slick infoboxes greet us when installing apps, user profiles come fully preconfigured and if an error occurs, troubleshooting guides are only clicks away. 
Onboarding new users should be as seamless as possible and without harm, while updates are aggressively pushed with ‘sensible’ software defaults. 
Your software bed has been made, what’s left now is for you to sleep in it.
But, as most things in life, shielding your dependants from hardship or downplaying the risk of nightmares rarely has the intended effect.

*We need room to fail in order to learn.*
And sometimes that room will be massive. 
Dissuading failure on a system’s level however, is doing a massive disservice to how people learn, acquire new skills, hone their technical vocabularies and become fluent speakers. 
Mind, I am not advocating everyone to become as fluent as a full-time engineer, making software more error prone or having developers mindlessly ‘push to prod’ and see what happens. 
I rather draw attention to how building systems that prevent us from making any mistakes *at all* can lead to situations where we don’t even know how technically mute we are until we are suddenly put to the test.

If your machine had been idly purring away for some years, firing up the bootloader may just as well have been arcane knowledge by now
(the unusual keycombo had me on edge for a minute). 
Most of our technical struggles however, reach far beyond remedying the untimely blue-screen. 
In fact, even *admitting* to being stalled on some issue, we are often ashamed of our apparent illiteracy. 
No wonder that in our heavily platformised, multi-app work environments where some are dragging 20+ years of personal data footprints, our attention for the latest and greatest tools while managing existing ones is being spread all too thin.

### Fail proficient
It is no secret that leaning into one software ecosystem makes switching to another all the costlier as time goes on. 
At the same time, there is no guarantee that whatever ecosystem we choose now will be around tomorrow.
In my experience of building academic research tools however, this budding ‘time creep’ is mostly an afterthought or rarely considered during the initial phases of a project. 

Maybe worse, when faced with time and resource constraints, adopting new software is almost  regarded as an error in itself.
Just think about the difficulty of having your colleagues find the time (and energy) to learn and navigate the slightly obtuse interface of that shiny app you just made.
Yet when faced by similar situations myself, I am no stranger to sticking to ‘what works’ over something less foolproof.

Besides maybe those at the very start of their careers, we are simply too constrained to reconstruct our toolsheds even though we may very well want to. 
Would it serve us to embrace environments more accommodating to our messy technical work, histories and (in)proficiencies? 
Provide room for explicit failure and experimentation, not just catering to the technical strata and regimens of a select few? 
It may be too late in moments of crises. We need to start failing more in the open.

We just need systems that allow us to.