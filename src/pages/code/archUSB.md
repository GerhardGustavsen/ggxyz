---
layout: /src/layouts/main.astro
title: Removable Arch USB
pubDate: 2023-08-17
---


![Usb from chain](/public/images/usbCool.jpg)

## Background
In 2020 I started Informatics at NTNU, there i quicly joined the developing group [Dotkom](https://old.online.ntnu.no/#!about/dotkom). We were responsible for maintaining the website [online.no](https://old.online.ntnu.no/). However I proabably learnt mucth more linux in this time rather than web development. One of the older students helped me install linux as a dual boot on my laptop some weeks after joing the group. The flavor was Manjaro and beeng compleatly new to bolth programing and linux this was a quite steep learning curve. 

Still it did not take long before I felt myself allpowerfull cd'ng thugh terminals and instaling programs using yay. After a while of listening to the older and cooler/nerdier students talk about their cool Arch rice I decided to give Arch a shot myself. Not beeng a compleate fool i decided to try to install this dirsto on a vm before graduating to my laptop. After about a week of frustratingly not beeng able to get online on vm Arch I finally decided arch was a bit mutch for me. I retreated back to manjaro and to be honest i mostly stuck to my other partition with Windows 10.

However fate would have it so that one morning the next week I would boot up my laptop and not find my manjaro partition at all. I still dont know why this was, but I had probably just been screwing around with some comands far beond my powerlevel at the time. I did some smal brain moves and tried to retrive my partition thugh a arch boot USB, and pretty soon i stood without bolth my windows partition and Manjaro partition. Having now totaly bricked my laptop I thought I might as well try to install arch on it annyways.

I decided that a trial through fire was the best and fastest way to learn a new operating system. However, it quickly became apparent that this was less than ideal when I stood without a working laptop for almost a week before I finally had managed to install a graphical interface on my now compleatly arch laptop. This set me back in some clases and gave me quite a few gray hairs. But alas, here i was having a working OS with a clean i3 tiling manager and even a browser. What could posibly go wrong? 

Annywas, exams came along and I never figured out how to get eclipse to work properly or really how to navigate the file system. So I failed object oriented programing with quite a margin. And a short week after that I managed to do a “rm \* -rf” in the root dictionary and tramatized had to retreat back to Windows.However that was not the last of my juney with linux. After half a year of not failing clases and mentaly healing. I was back to hacking at linux. This time I was a bit more causes. I wanted to have my arch linux install as far away from my windows installation as posible. 

## Project
The project was to install Arch linux on a usb thumbdrive. 

### The beneifits:
- Hard to screw opp other opperating systems when I am working on a compleatly isolated disk.
- Posible to boot multiple machines with the same filesystem and arch instalation.
- No need to worry if i end upp losing or breaking my laptop.
- Looks cool.

### The downsides:
- Slower, as the usb will never be able to compete with internal SSDs.
- Risks bricking the arch install if usb drive falls out under opperation.
- little storage space and no option for a swap file/[partition](#swap)
- Easier to loose a smal usb than a full laptopp...

To adress some of theese problems I needed think thuroly about what USB drive to pick out. I needed somthing fast with lots of storage and small so it would not easily get pulled out. And somehow hard to lose.

I ended up going for a SanDisk 128GB Ultra Fit USB 3.1 Flash Drive. This drive i fast and small. It has 128Gbs and that was more than enough for my needs. It also had a smal profile and therefore would sit almost flush with my computer. 

![Sandisk Ultra fit](/public/images/sandisk.jpg)

There is a good guide on removable arch systems on tha arch wikki. I folloed [this](https://wiki.archlinux.org/title/Install_Arch_Linux_on_a_removable_medium) guide and improvised from some other sources. The system i ended upp with was quite lightweight and efficent with headless start and i3 tile manager. I really thought the project was a sucsess and used the removable arch usb as my main development system for well over a year afterwords. 
### BIOS
I got the usb stick configured for most laptops. I installed multiple drivers and tested the usb on multiple machines. The main difficulty was getting the computers to accept the usb as a boot medium. I configured my laptop so that usb boot always was prioritized so I only had to insert the usb device then power on and the system would boot into arch. All laptops running windows has secure boot enabled by default. This is a BIOS option designed to make the computers harder to tincker with for security concerns. Secure boot checks to see if the boot device has the correct checksums, and if not it prehibits the boot. It is a simple task to turn off secure boot and on unledd you have a bios pasword it is avalible as an option in the bios. Someday it might be a cool project to see if i can bypass this. Theoreticly it only takes a windows partition that again would paint to a arch partition, or just import the checksums. I think...

### OS
As far as I understand the way i set up the system made the linux kernal load onto the ram of the host machine when booting. This made the system significantly faster as it did not need to read from the usb for os instructions. I still dont know if This is common with OSes or if my system used this trick more extensivly. It ened upp using almost 2 gigabytes of memmory when idle, but i sadly did not compare this to installing arch directly on the machine.

### Swap 
The most intresting configuration was prehaps that I omited the swap partition. A swap partition is a space in the disk that can act as ram if the conventional ram is full. This is handy as you can use more memmory agressive aplications with less built inn ram, but this is at a cost of speed obviusly. I only only have so manny read and wrights on the usb drive so therefore I deceded on not making anny swap partition. I do now know how manny more read wright cycles the inbuild ssd of the laptop could take, and I may have been wrong to omitt the swap partition on this justification alone. However as i used the drive, I relised that the drive became quite warm and i think i would have made this problem worse with having a swap partition. 

![Usb in laptop](/public/images/usb.jpg)

### Today
As of wrighting this article I am still on arch but I am now back to a normal dual boot system. I used the removable usb until I as before managed to break it by tinkering with some comands I did not compleatly understand. I am now a lot more sterdier with arch and linux in genneral. I later baught a Thinkpad 480s and installed [LARBS](https://larbs.xyz/) shell script to give me an opinionated program asortment. I have modded LARBS a fair bit since installing and I want to one day fork the [LARBS dirsto](https://github.com/LukeSmithxyz/LARBS) and create GARBS. 

Using a linux distro like Arch has taught me a lot. Obviusly a lot about how an operatin system works, but also some more suttler things. I have learnt how little i felt like I owned my computer when using windows. It probably sounds a bit pretencius, but its true. I do not look at my computer as this compleatly black box annymore. I can fix it and i can (to a certen point) understand it. Its also increadably liberating to be able to chose when and what to uppdate. I own my computer and not the other way round. Lastly the prosess has made me fall in love with the philosophy of open source. It truly goes a bit deeper than creating the coolest looking rice and having the best tiling managers. I beleve this love of open source has crept into other parts of my brain and shaped a fair bitt of my philosophy. This whole prosess has pushed me towards a full open source system and I truly think there is no way back to windows now. I still keep a smal partition with windows on my machine, but i find myself using it less and less. Now i may only boot into it once every other month. 