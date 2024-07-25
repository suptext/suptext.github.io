---
toc: false
title: We need more failure
style: "/type/post.css"
---

# We need more failure
## [Tending to massively broken systems](#post) [](#bookmark)
[`22 July 2024`](#lead) `/` [`...`](#count)

> *A technical outage so massive, unprecedented, impactful —  why is it we only care about our technical dependencies after the failsafes have been broken?*

Leaving the house without a phone, being offline in a new city, losing access to an important account; these are things we generally try to avoid. 
Even the smallest hiccup in our technical routines makes us not only deeply uncomfortable, but increasingly, incapable. 
Faced with this, why are we not more concerned about all the flimsy technical layers that envelop our lives *before* they imminently crack?

While the Crowdstrike + Azure security whammy unfolding over the weekend has everyone up its arms, on any normal day our technical concerns rarely start before our system foundations have fully given out. 
When a security patch pushed by Crowdstrike on Thursday did just that — rendering millions of Windows devices inoperable in the process — cost projections are now running in the billions, with almost as many lives and occupations afflicted and no less concerned sysadmin faces. 
A wake-up call, if you or any of your company devices had been fed the unduly update.

As specialists scramble a solution (complicated by how affected devices have been ‘soft-bricked’ and are difficult to debug remotely), folks on the ground have been met with a harsh reality of all the critical computational work we have since outsourced. 
We haven’t completely forgotten how to operate a pen and paper, but we are close. I don’t lament this apparent loss of skill but am worried about the finer print of our technical contract: *we are blind to how technologies fail us, all the time*.

[...](#rest)

### Being system illiterate

Okay, maybe not all the time but we are blind.
Blind to a minute file synchronisation error of some note-taking app we use to jot down our thoughts. 
Blind to that severely outdated BIOS driver that stopped receiving updates years ago. 
Blind to the development shortcuts someone has taken to meet a release deadline. 
Blind to the hundreds of vendors and development teams we rely on daily to run our cloud based work. 
We aren’t blinded because we don’t want to see but because we *cannot* easily see behind the thick curtains of our software production lines.

Besides the obvious bug or error, most development steps that belie our software can only be retraced to a certain degree. 
Even if you do, the difficulty remains understanding these technical pedigrees holistically.
For instance, the [*Genealogy of Linux*](https://distrowatch.com/dwres.php?resource=family-tree) may be well documented, but a *true understanding* of how individual releases relate to their predecessors is a feat only reserved to a handful of dedicated archivists. 
And *even if* you were to possess a full knowledge of an OS’s history, what can you or any single person, entity or vendor realistically do to relay such complexity to the end-user, before mindlessly clicking *Update Now* to get on with their day?

The reality is, we simply cannot read and parse all our intricate software and hardware dependencies. 
Apart from a cohort of a few apt engineers, you and I are systems illiterate. 
We may have a hunch as to to how our tech ‘talks’ and we might ‘speak’ their programming to some degree, but most of us are nowhere near able to follow along the more complex conversations technical systems are increasingly having on our behalf. 
If you are proficient, kudos, but as Thursday’s incident shows, even the most technically fluent may not be capable enough when it comes to the complex grammars of our global software interlocutors.

[...](#rest)

### Give error some room
We have dedicated whole industries solely focused on foolproofing software. 
Slick infoboxes greet us when installing apps, user profiles come fully preconfigured and if an error occurs, troubleshooting guides are only clicks away. 
Onboarding new users should be as seamless as possible and without harm, while updates are aggressively pushed with ‘sensible’ defaults. 
Your software bedding has been made, just lie down, get comfy.
But as most things in life, shielding your dependants from hardship or promising a life without nightmares rarely has the intended effect.

*We need room to fail in order to learn.*
And sometimes that room will be massive. 
Dissuading failure on a system’s level is doing a disservice to how people learn, acquire new technical skills, hone their  vocabularies and become fluent speakers. 
Mind, I am not advocating everyone to become as fluent as a full-time engineer, make our apps more error prone or have developers mindlessly ‘push to prod’ and see what happens. 
I want to draw attention to how creating systems that prevent us from making any mistake *at all* can lead to situations where we don’t even know how technically mute we are until we are suddenly put to the test.

If your system had been idly purring away for some years, firing up the bootloader may just as well have been arcane knowledge
(the unusual keycombo had me on edge for a minute). 
Most of our technical struggles however, reach far beyond remedying the untimely blue-screen. 
In fact, even *admitting* to being stalled on some minor issue, we are often ashamed of our apparent illiteracy. 
No wonder that in a heavily platformed, multi-app environment where some are carrying 20+ years of personal and occupational data, our attention for the latest and greatest tools while our managing existing ones is spread all too thin.

[__](#fold)

### Failing proficiently
By now, it is no secret that leaning into one software ecosystem makes switching to another all the costlier as time goes on. 
At the same time, there is no guarantee that whatever ecosystem we choose now won’ t be shelved tomorrow.
In my experience of building academic research tools, this budding ‘time creep’ is mostly an afterthought or rarely considered at all during the initial phases of a project. 

Maybe worse, when faced with time and resource constraints, adopting new software is almost  regarded as an error in itself.
Just think about the difficulty of having your colleagues find the time (and energy) to learn and navigate that slightly obtuse interface of your latest shiny app.
Yet when faced by similar situations myself, I am no stranger to sticking to ‘what works’ over something less foolproof.

Besides maybe those at the very start of their careers, we are simply too constrained to rebuild our toolshed from the ground up - even though we may very well want to.
Could we embrace work environments more accommodating to our messy technical work, incompatibilities and (in)proficiencies?
Provide more room for explicit failure and experimentation, not just catering to the technical regimen of a brilliant few?
It may be too late in moments of crises. 
We need to fail more in the open.

We just need systems that allow us to.
