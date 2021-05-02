---
title: 'Blockchain technology - What’s all the hype about?'
subtitle: 'And how it will shape the future of the ride-sharing economy'
date: '2017-05-07'
---

While conversing with a friend recently, I asked him if he had heard about Blockchain. He was puzzled and replied “What’s that?”. I didn’t have a good answer to that and by the end of our conversation, he was more confused about what Blockchain was than before.

In this post, I am going to briefly explain Blockchain as best as I understand it, and then discuss one specific application of this technology in the near future.

## What is Blockchain?

> *Blockchain is a decentralized database that stores a registry of transactions (and assets) across a peer-to-peer network.*

Let’s break that down:

1. **decentralized system:** is one in which the information/resources are allocated across individual actors or nodes of a network.
2. **registry of transactions:** aka storing a trail of all your actions such that it can be traced all the way back to its origin. It’s important to note that this registry is immutable in nature and uni-directional.
3. **peer-to-peer network:** it’s a network in which each actor/node has a relationship with several other actors in the network. Think of it as a many-to-many relationship (Facebook) as oppose to many-to-one relationship (Bank).

## What is Bitcoin?

Like paper money and gold before it, Bitcoin is a currency that allows parties to exchange value. Although unlike it predecessors, **Bitcoin is digital and decentralized**.

Think of Bitcoin as the application of the Blockchain technology in one specific domain as a financial currency.

## What is Ethereum?

> *Ethereum is an open software platform based on blockchain technology that enables developers to build and deploy decentralized applications.*

What this means is that it’s a framework or an abstraction over the Blockchain technology. So you could build a Bitcoin-like application on the Ethereum network without necessarily having to worry about writing the Blockchain technology from scratch.

Here’s a flow-chart which shows how Blockchain, Ethereum and Bitcoin are related to one another.

<img src="/images/blockchain-ethereum-diagram.jpg" alt="Blockchain Ethereum Diagram" />

<br>

## Understanding Ethereum

### Smart contracts

It’s a **(1)** *self-executing* **(2)** *if-this-then-that* **(3)** *computer program* that **(4)** *runs on a Blockchain*. A smart contracts guarantees that certain conditions are met before it’s execution.

### Decentralized Autonomous Organization (DAO)

A **DAO or DAC (Decentralized Autonomous Corporation)** is a **(1)** *nexus of smart contracts* that **(2)** *interconnect* to **(3)** *define the rules of the organization* and **(4)** *run the organization/corporation autonomously*.

## Brainstorming

Let’s think about some middlemen institutions that we use frequently. In my case few of them would be Uber, Google, Chase Bank, SF State University etc. Now think about ways in which we could make the functions of the above organizations decentralized.

Let’s consider Uber for instance. Uber as a company provides a service that helps connect thousands of riders through their mobile app with hundreds of drivers using the same app. This is a one-to-many relationship where all the interactions happening on the platform/service are being routed through the Uber servers/organization where all of the business logic resides.

Now consider a scenario where a “generic” app that you have on your phone is smart enough (a smart contract) to automatically help you get a ride:
1. in a Tesla Model S
2. at exactly 5:45pm
3. from your apartment
4. drop you off at your destination
5. charge you a set amount for the trip
6. based on a smart pricing algorithm.

Sounds like Uber doesn’t it? That’s because the service is exactly the same, but the way the service is provided is different. Here’s how:

Think about the present-day Uber service as a giant tree of **if-this-then-that** statements.

- → If *driver & rider are in the same area => then connect them together*
- → If *demand in the area is high => then surge prices*
- → If *rider rating is 4 stars => then driver rating must be 4 stars or above*

All of the above logic exists in once centralized location say the Uber servers.

On the other hand, in our “generic” smart app example, the same “uber-like” service is provided by the interactions between two smart-contracts that exists locally on the rider’s and driver’s apps. What this means is that there no longer exists 1 giant tree of **IFTTT** conditions, but instead each app contains a smaller set of **smarter** if conditions that when combined with other **equally smart** if conditions can produce the same outcome/service.

I hope this example helps you understand how present day centralized services & organizations can be made decentralized using Blockchain. Also take a moment to think about which of the two approaches described above is more scalable.

## Smart Contracts in Action

Now that we understand how smart contracts can be used to provide services like Uber, let’s think about other services/use cases that can be run on smart contracts. Let your imagination run wild.

1. The entrance of the movie theatre has a facial recognition/computer vision system (similar to [Amazon Go](https://www.youtube.com/watch?v=NrmMk1Myrxc)) that can verify your identify from from a decentralized identity database stored on the Blockchain network. As your walk into a movie screen, it automatically charges your shared wallet on the Blockchain network and registers the transaction in a shared ledger on the decentralized database. Additional, if you walk out of the screen within 15 mins of the start of the movie, it will refund you the money and you can either walk into another movie screen or go home (boring).

2. Your favorite Italian restaurant is a **DAO (Decentralized Autonomous Organization)**. It’s run autonomously, by combining 10’s of smart contracts working together. As your enter your Ride app (decentralized Uber app in the Blockchain future) from home, your wife and you can just discuss what you would like to eat tonight. Your personal smart contract (say on your phone) knows which restaurant you can going to (because it ordered your Ride for you.. see?) and passes over your order to one of the smart contracts of the **DAO** of the Italian restaurant. Just as you arrive, the food is brought to your table, hot and delicious. (No waiting for a table, no attendance from a server, no ordering, no waiting for the food). As you finish your meal, you can then just walk out (it will charge your shared wallet automatically), get into your Ride and be on your way home.

3. When you decide to marry another person, you will agree upon certain mutual conditions that will help your settle legal issues in the future. So ideally, you would say that if you ever end up getting a divorce, that you are agreeing to split your wealth 50/50 with your spouse. You are also agreeing to pay for child support if you ever have kids. This is signed by you and your spouse at the time of your marriage and guaranteed in the future. But wait a second.. isn’t this exactly what the legal system does today? Yes, it is.. but think about this, smart contracts inherently are capable of following through and enforcing various situations when certain conditions are met. So essentially smart contracts can be a subsection of the legal system that is smart enough to run autonomously without any 3rd party interference. Now you can start to picture a world that functions just a efficiently without a human-led legal system and the best part is that this can be scaled across the world. So there is no need to have different legal rules in the US as opposed to the UK or India, but there could be a shared world legal system instead.

You might notice a couple things that become apparent once your start to imagine a world run by millions of smart contracts working together.

1. Sharing of information (such as identity, wallet, other non-personal information) might imply **more freedom** in your day-to-day activities.

2. Life becomes **less modular** and activity-based, and more continuous and **meaning based**.

## The future of the ride-sharing economy

*Ideas derived from [Elon Musk’s latest TED Talk](https://www.ted.com/talks/elon_musk_the_future_we_re_building_and_boring/up-next)*

Elon Musk has this unique ability to make predictions for what the future might look like given we solve our current problems with a reasonable solution. He is currently doing this in multiple industries with SpaceX, Tesla, SolarCity and now Boring Company. With a track record like his, it only makes sense to bet big on some of his ideas and see how far we can take them.

[![Elon Musk predicts the future of ride sharing economy](/images/elon-talk-blockchain.png)](https://www.youtube.com/watch?v=4NCeuvVZgQI)

The above clip is from his latest Ted Talk where he talks about what the future of the ride-sharing economy might look like. Here’s a quick summary of the talk:

1. In the future when most cars are electric and self-driving, there will end up being more cars on the road than there are now as the affordability of riding in a car will be cheaper than that of traveling in public transportation such as a bus.

2. The current fleet of Tesla’s is accumulating data on the national road system. Hence in the future it will be able to navigate from one city to another in any country without human assistance.

3. *[PREDICTION] A passenger can get into his/her car, with no hands on the wheel, go to sleep and wake up at their destination in 2 years. (Mid-2019)*

4. Literally Safe hands-of driving - the power to disrupt the industry is massive. There will be a shared autonomy fleet.

Ideally you would be able to:
- → Buy a car
- → It drops you off at work
- → Then you can let it go and it can provide an Uber like service to others
- → Earn your money through the service
- → Helps you cover the cost of the lease of your car
- → So you get the car for free

Buy your car and you can choose to have it used by only:
- → you exclusively 
- → friends and family
- → by other drivers that are rated 5 star
- → sometimes and not other times

Does the last point sound familiar? Yes, it does. Sounds like the perfect application of a smart contract doesn’t it? And in Elon Musk’s future of self-driving cars, we can ideally combine it with smart contracts where we can now build an DAO around this ride-sharing service that I call “anti-sexual-harassment-Uber”. Burn.

## Motivation & Future Work

I am really passionate about learning new technologies and helping shape the future of human life using technologies such as AI/VR/Blockchain.

I took a Udemy course to get me started with Blockchain. I would highly recommend it if you are interested to learn more about Blockchain:
[“The Basics of Blockchain”](https://www.udemy.com/course/the-basics-of-blockchain/).

In the near future, I intend to build several decentralized applications on the Ethereum network to possibly help realize and practically implement some of the ideas discussed in this blog post.

## Additional Resources

1. [“Traveling in a blockchain enabled world”](https://www.linkedin.com/pulse/travelling-blockchain-enabled-world-trond-vidar-bjor%C3%B8y/) - Trond Vidar Bjorøy (Article)
2. [Blockchain Startups](https://angel.co/blockchains) - AngelList (Website)
3. [“How the blockchain will radically transform the economy”](https://www.ted.com/talks/bettina_warburg_how_the_blockchain_will_radically_transform_the_economy/up-next) - Bettina Warburg (TED Talk)
4. [“The Advantages of Decentralization”](https://www.youtube.com/watch?v=LKbOPYnUlXs) - Vitalik Buterin (Youtube)
5. [Elon Musk’s latest TED Talk](https://www.ted.com/talks/elon_musk_the_future_we_re_building_and_boring/up-next) (Youtube)

<br>

*This blog post was originally published on [Medium](https://medium.com/@mthakkar_/blockchain-technology-whats-all-the-hype-about-5f3b3b454163).*
