---
layout: /src/layouts/article.astro
title: VanBuild
date: 2023-09-17
---
![img](/images/projects/vanbuild/car.jpg)

I've long wondred how i shuld document this project. In the summer of 2021 I bought a van. I then converted this van to a camper, and then procided to live fulltime in it for over halv a year. I have decided to splitt the project into 2 articles. One about the practical process of converting a van to a camper and another article about the vanlife lifestyle and my thoughts on it. This will be the article describing the build prosess. The other vanlife article can be found [here](./vanlife).

## Planning
Ive long had the dream of building a van to live in full time. In the spring of 2021, covid was raging and I wanted to have a big new project to spend my time on. There was few activities so, I thought I might as well realize my vanlife dream. However as most people are aware of, its not so simple to just start a huge project. Everything feels scary and nothing is thought out. I had made some rough economic calculations, but knew that the varriance was large. My statagy to get starting and compleating a huge project like this is as follows.

1. Start to think about it. The projcet shuld be well thought out and you shuld be comterble with the idea. Also the idea of failing the project. 
2. Start to talk about it. Make it obvius for the people around you that this is somthing you beleve is posible, and that you are going to do it. This is a sneaky stratagy becouse now you got your ego wrapped upp in the project. I hate going back on what ive said, so this is a good motivator for me. 
3. Spend a lot of money. Ok, this last step seems a biut irresposible. But I like spening a considerable about of mony on big projects that im afraid of not compleating. This is to enshure that I dont give upp so easaly. On this vanbuild project, spening the mnoney was easy. Buy a van!
 
This whole process was driven by a really concrete working plan. Never thnk about the compleate result, and only focus on the next step. This is a well known stratagy, that i feel is essential for projects of this scope. 

![img](/images/projects/vanbuild/start.jpg)

So Annyways, i bought a van... A renault master III. The car was big, and the biggest car i had driven by a long shot. I flew to Bergen and bought it there. Pro tip: dont fly to buy a car, as it makes it a bit harder to not buy the car when actually seeing the car. 😅

## Woodworking

![img](/images/projects/vanbuild/build2.jpg)

The next problem was building it. I had only 2 months in the summer untill the next semster would start. It was crutial that i finished the van within this timeframe, as after the summer my contract for my room would run out and I would be without a home. I therefore started working like a madman. I wanted to start with the woodworking as it seemed the most concrete, and It seemed the easyest. Boi was I wrong. 

The woodworking proved to be a lot harder and more time consuming than i had originally tought. I have worked a fairt bit with wood before, but never at this scale, and it took an imence amount of time to get annything done. I had bought the car with some isolation and woodpanneling already installed, but this works soon showed to be really badly done and i had to tear it all down. I then started on the bed, ad it would take upp a lot of the space. It tunes out that build a bed that does not creek in a car that moves, is pretty hard.

After the bed frame, i build the walls and cabinets. I isolated the walls with armaflex, and glava. Pro tip: dont use glava. I used a lot of handtools as i did not have acsess to anny workshop. 

After building the frames for most of the car, i went climbing. I wanted to test how it was living in the car, so I went to vingsandfor a week. There I slept in the car and spent my time outside in the sun. It was terribly nice to take a break, but I soon started to stress a lot about finishing the car.

I Then went to Halden and continued the woodworking, then I went back to Trondheim to finsih the panneling. I beleve most of the 2 monts were spent woodworking. pro tip: dont make drawers in a car. It tunes out that cars move, and they bend, so the draws get stuck. bad idea.

## Electrisity

So on to somthing more intresing, but a hell of a lot more expensive. Power!

![img](/images/projects/vanbuild/electric.jpg)


The electrical systems consisted of some key components:

- One 12volts "House" battery of 200AH.
- The car dynamo
- Solar pannels for the roof
- Shore charger
- 230V inverter

I had a quite good grip on electrisity from before, but conecion together this 12 volt system was still quite challaging. The heart of the system was the 200AH battery in the back. The system is built a lot like one would build a houseboat system with a so called "house" battery. This battery is resposible for driving everything I would use for livingin the van. The regular car battery was not to be used for annything else than starting the car. In this way I inshured that the car battery would not go flat. Also a car battery is built to be able to suply a starting voltage regarless of temprature and load. This kind of starter battery is bad at beeing fully draned and it shuld be kept at almost full capacity all the time. Therefore I went eith a litzium ion battery in the back. This battery had lower inner resistance and a highter resting voltage than led or amg batteries.

I wanted the dynamo in the car to charge bolth the starter battery and the house battery when I was driving, but have the circuts seperated when discharging. My first solution to this was to use a relay that messured voltage and conected the circuts when the voltage was over 14. This would only happen once the dynamo produced power. However this was sub optimal for 2 resons. Firstly the relay was designed for led batteries so the resting voltage of the litizium battery was to high for the relay to cut out. Also the dynamo in my car could supply over 200Amps, making it a bit to mucth for the relay to handle. The dynamo would only supply this current if the resistance was really low. aka when the battery was quite flat. I therefore installed a ampmeter on the suply cable and messured about 100Amps for most situations. I also installed a fuse at 200Amps, since it was the maximum my battery could take. 

This worked a long while untill I one day drained the house battery compleatly. I carfully started the car, and looke at the ampmeter. It read 150Amps exsactly. I was releved and drove a little while. When I had stopped the car and went to enter the cabin in the back I felt a strong smell of burnt plastic. The fusebox for the 200Amp fuse had melted. Yes, you heard that correctly. The fuseBOX. The fuse itself was whole and well, but the plastic box had become a boiling plastic puddle on the floor. This was quite comidic as i would hope the fuse would melt before the fusebox. I later reliced that there was a shunt on the ampmeter at 150Amps. So that was the maximum it would show. A bit of a chernobyl "only 3.6roentgen" kind of moment. I guess the current was around 190Amps, but i guess il never know. 

After this I installed a profecionall campervan house battery charger, supplying at most 150Amps.

The rest of he build went smoother. I installed the solarpannel regulators, and a 12 volt charger that i could use to charge the car from a camper outlett from the outside. I installed the inverter for all my 230Volt needs and all the lights. I also cut a huge scarry hole in the roof and installed a maxifan for ventilation and atmosefare controll.


## Heating

![img](/images/projects/vanbuild/cursed.jpg)

I decided on a diselheater for keeping warm. The heater slowly burns disel and heats upp air. The warm air circulation is compleatly seperated from the burning and exsaugst. This makes it an ideal heat source as it makes it safter agiant CO posening and it will now generate anny water vapor. The diselheater was the last thing I installed and a real hassle to get mounted. The heater became quite warm, si I mountet it on a wooden board to protect the floormat. I mounted the heater under the passenger seat and cut some holes for the exsaughst and air intake. It was extreamly satasfying when I finally turned it on. It turnes out living in a van without heat is quite hard. 

## Water & Cooking

![img](/images/projects/vanbuild/food.jpg)

The water system in the van was quite simple. I installed a 20Litre tank upp above the sink. This made the sink gravity fead. It was nice having water even if the power was gone. However, instaling the tank right above the sink made for a quite tiersome experience washing upp.

For making food I installed 2 gas topps. I decided on not installing an oven, mostly because a lack of time. The burners worked nicly and used suprizingly little gas. It was really cosy turning on the stove with mathes, and seeing the clear blue flames in the darkness. 10/10, would burn again

## Gaming?

![img](/images/projects/vanbuild/computer.jpg)

I installed a gaming computer with a RTX 4080. It sounds exsactly as stupid as it is. I buildt the computer into the wall and installed a sound system with a subwoofer around it. The sound system was super nice and I ended up using it all the time. 

The gaming station however... yeah, not so mutch. It turnes out that you dont have too mucth time for gaming when vanlifing. Also the computer could be used for maximum 2 hours before draining the batteries. That not really long enough for my gaming needs. So I later removed it. I also feared all the shaking would end upp breaking the machine.

## Car stuff

![img](/images/projects/vanbuild/dash.jpg)

I also installed a strong expedition lightbar at the front of the van. I connected the lightbar to my normal longlights, but made it so that i had to also enable them by flipping a dashbaord switch. Im really happy about how the dash tuned out as it lookes really home made and "reodor-felgen"ish. The homemade dash contains the ampmeter for charging the house batteries, the switch for the new lightbar and some tempreture sensors as well as a voltmeter just for fun.

Also, the door fell off... A cupple of weeks after I had gotten the car, I slammed the side door closed, but as it closed there was a cracking sound and the whole door fell off. Quite stressfull, but aslo kind of funny. I ended upp replacing the door slider arm as well as a cupple of ball berings.

Under are some pictures of the finished van. Im really porud of this project and it is certanly the biggest project ive undertaken thus far. It taught me a lot about 12 volt systems, heating and atmofare controll, carpendry and genneral mechanics. I would absolutly recomend building a campervan o annyone that is intrested, but I might not recomend liing in it full time, but [thats](./vanlife) another story.

## Images

![img](/images/projects/vanbuild/done1.jpg)
![img](/images/projects/vanbuild/done3.jpg)
![img](/images/projects/vanbuild/done4.jpg)
![img](/images/projects/vanbuild/winter.jpg)

★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - 
★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - ★ - ☆ - 
